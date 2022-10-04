import React, { useState } from "react"
const Addcart = ({ cartList }) => {
    const [price, setPrice] = useState(0)


    return (
        <>
            <nav style={{ width: "1000px", marginLeft: "180px" }}>
                <p>Image</p>
                <p>Name</p>
                <p>Color</p>
                <p>Quantity</p>
                <p>Price</p>

            </nav>
            <div>
                {cartList.map(item => {
                    return (
                        <>
                            <div className="items" style={{ marginLeft: "180px" }}>
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
                                    <p>{item.quantity}</p>

                                </div>


                                <div className="price">
                                    <p>${item.price}</p>
                                </div>



                            </div>

                        </>
                    )
                })}
                <div style={{ textAlign: "right", width: "1000px" }}>
                    <p>total: ${cartList.map(item => item.price).reduce((total, value) => total + value, 0)}</p>
                </div>

                <div style={{ textAlign: "right", width: "920px", marginTop: "20px" }}>
                    <button onClick={() => alert("Thankyou for your order")}>Checkout</button>
                </div>



            </div>
        </>
    )
}
export default Addcart