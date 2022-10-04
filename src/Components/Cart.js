import React, { useState } from "react";
import Data from "./Data"
const Cart = ({ addCart }) => {
    const [data, setData] = useState(Data)
    const [searchItem, setSearchItem] = useState('')

    return (
        <>
            <header>


                <div className="right">
                    <p>Search</p>
                    <input type="text" onChange={e => setSearchItem(e.target.value)} />
                    <button>Search</button>
                </div>


            </header>
            <section>
                <nav>
                    <p>Image</p>
                    <p>Name</p>
                    <p>Color</p>
                    <p>Stock</p>
                    <p>Price</p>
                    <p>Buy</p>
                </nav>

                {data.filter(val => {
                    if (searchItem == "") {
                        return val
                    } else if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
                        return val
                    }
                }).map(item => {
                    return (
                        <>
                            <div className="items">
                                <div>
                                    <img src={item.image} />
                                </div>
                                <div className="name">
                                    <p>{item.name}</p>
                                </div>
                                <div className="color">
                                    <p>{item.color}</p>
                                </div>
                                <div className="stock">
                                    <p>{item.stock}</p>
                                </div>
                                <div className="price">
                                    <p>${item.price}</p>
                                </div>
                                <div>
                                    <img src="cart.png" className="cart" onClick={() => addCart(item)} />
                                </div>

                            </div>
                        </>
                    )
                })}

            </section>
        </>
    )
}
export default Cart