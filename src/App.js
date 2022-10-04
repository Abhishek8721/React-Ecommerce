import React, { useState } from "react";
import Cart from "./Components/Cart";
import './App.css'
import Addcart from "./Components/Addcart";
const App = () =>{
  const [cartList,setCardList] = useState([])
  const [hideItem,setHideItem] = useState(false)
  console.log(cartList)
  const addCart = (item) =>{
   
    setCardList([...cartList,{...item, quantity:1}])
    
  }
  const showItem = (value) =>{
    setHideItem(value)
  }
return (
  <>
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"1050px",marginLeft:"170px",marginBottom:"30px"}}>
  <h1 onClick={()=>showItem(false)}>Shoping Cart</h1>
  <button onClick={()=>showItem(true)}>My Cart</button>
  </div>
  {hideItem ? <Addcart cartList={cartList}/> : <Cart addCart = {addCart}/>}
  

  </>
)
}
export default App