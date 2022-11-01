import React, { useState } from 'react'
import { useEffect } from 'react';
import data from '../data'
const Home = () => {

    var available = []
    var ans = []
    const [seat, setSeat] = useState([])
    const [newData, setNewData] = useState(data)
    const [seats, setSeats] = useState(0)
    const searchAttemp1 = () => {
        var count = 0

        for (var i = 0; i < 7; i++) {
            count = 0
            for (var j = 0; j < 7; j++) {
                if (data[i][j] == 0) {
                    count++
                }
            }
            available[i] = count
        }
        

    }
    const searchAttemp2 = () => {
        for (var i = 0; i < 7; i++) {
            if (available[i] == seats) {
                return i
            }
        }
        return -1
    }
    const searchAttemp3 = (arr) => {
        arr.sort()

        for (var i = 0; i < 7; i++) {
            if (arr[i] > seats) {
                return arr[i]
            }
        }
        return -1
    }
    const bookSeat1 = (x) => {
        for (var i = 0; i < 7; i++) {
            if (data[x][i] == 0) {
                data[x][i] = 1
                ans.push(7 * x + i + 1)
            }
        }
        setNewData(data)
        setSeat(ans)
    }
    const bookSeat2 = (y) => {
        if(y==-1){
            return
        }
        for (var i = 0; i < 7; i++) {
            if (available[i] == y) {
                var j = i
                break;
            }
        }
        var count = 0
            for (var i = 0; i < 7; i++) {
                if (data[j][i] == 0) {
                   
                    data[j][i] = 1
                    ans.push(7 * j + i + 1)
                    count++
                    if(count==seats) break;
                }
            }
            
            setNewData(data)
            setSeat(ans)  
            
    }
  
    const bookSeat3 = () =>{
        var seat = seats
        var count = 0

        for (var i = 0; i < 7; i++) {
           
            for (var j = 0; j < 7; j++) {
                if (data[i][j] == 0) {
                    count++
                }
            }
            
        }
        if(count>=seats){
            for(var i =0;i<7;i++){
                for(var j=0;j<7;j++){
                    if(data[i][j]==0){
                        data[i][j]=1
                        seat--
                        ans.push(7 * j + i + 1)
                       
                    }
                    if(seat==0) break
                }
                if(seat==0) break
               }
               setNewData(data)
               setSeat(ans)
        }else{
            var arr = [0]
            setSeat(arr)
        }
      
        
    }
    const searchItem = () => {
        if(seats==0){
            return
        }
        searchAttemp1()
        var x = searchAttemp2()
        if (x != -1) {
            bookSeat1(x)
        } else if(x!=0){
            var newArr = available.slice(0)
            var y = searchAttemp3(newArr)
            if(y!=-1){
                bookSeat2(y) 
            }else{
                bookSeat3()
            }        
        }
        
                  
    }
    return (
        <>
            <div className='home'>
                <input type="text" placeholder="Enter number of seats to be booked" onChange={(e) => setSeats(e.target.value)} />
                <button className='btn btn-outline-dark' onClick={searchItem}>Book Now</button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", margin: "20px", color: "white" }}>
                <div className='box2' style={{ color: "black" }}>available</div>
                <div className='box2 red'>booked</div>
            </div>
            <section>
                <div className='boxcontainer'>
                    {
                        newData.map(item => {
                            return (
                                item.map(items => {
                                    return (
                                        <>
                                            {items == -1 ? <div className='box gray'></div> : items == 1 ? <div className='box red'></div> : <div className='box'></div>}
                                        </>
                                    )
                                })
                            )
                        })

                    }
                </div>
            </section>
            <p>The booked seats are {seat.map(item => {
                return (
                    <>
                        {item},

                    </>
                )
            })}</p>
        </>
    )
}

export default Home