import React, { useState } from "react"


export default function CheckoutForm() {

    const [ email, setEmail ] = useState("");
    const [ fullname, setFullname ] = useState("");
    const [ address, setAddress ] = useState("");
    

    function saveOrder() {
        alert("This is sample cart, your order was not really completed.")
    }
    return (
        <>
            <h2>Your Details</h2>
            <div class="checkout">
            <div class="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) } }/>
            </div>
            <div class="form-group">
                <label htmlFor="exampleFormControlInput1">Your Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" value={fullname} onChange={(e) => { setFullname(e.target.value) } } />
            </div>
            <div class="form-group">
                <label htmlFor="address">Shipping Address</label>
                <input type="text" name="address" class="form-control" id="exampleFormControlInput1" placeholder="Address" value={address} onChange={(e) => { setAddress(e.target.value) } } />
            </div>
            <button type="button" class="myButton4" onClick={() => saveOrder()}><span class="blinking2">Check Out</span></button>
            </div>
            <div className="grid">
            <img className="img-fluid border" src="/carter2.jpg" alt="carter"/> 
            <img className="img-fluid border" src="/clinton2.jpg" alt="clinton"/> 
            <img className="img-fluid border" src="/kennedy2.jpg" alt="kennedy"/> 
            <img className="img-fluid border" src="/lbj2.jpg" alt="lbj"/> 
            <img className="img-fluid border" src="/nixon.jpg" alt="nixon"/> 
            <img className="img-fluid border" src="/roosevelt.jpg" alt="roosevelt"/>  
            </div>
            <p>
            Thank your for shopping with us!
            </p>
            
        </>
    )
}