import React, { useState } from "react"


export default function CheckoutForm() {

    const [ email, setEmail ] = useState("");
    const [ fullname, setFullname ] = useState("");
    const [ address, setAddress ] = useState("");

    function saveOrder() {
        alert("This is sample cart, your order was not really completed.")

        // let customer = {
        //     fullname: fullname,
        //     email: email,
        // }
        // axios.post("https://webhook.site/1022c860-ad18-46d0-9699-c8a6ad5ba435", customer);
    }

    return (
        <>
            <h2>Your Details</h2>

            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) } }/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Your Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" value={fullname} onChange={(e) => { setFullname(e.target.value) } } />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Shipping Address</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address" value={fullname} onChange={(e) => { setAddress(e.target.value) } } />
            </div>

            <p>
            Thank your for shopping with us!
            </p>

            <button type="button" class="myButton2" onClick={() => saveOrder()}><span class="blinking">Check Out</span></button>
            <br/>
        </>
    )
}