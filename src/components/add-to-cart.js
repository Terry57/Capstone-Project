import React, { useContext } from "react"
import { CartContext } from "../../shopping.js"

export default function AddToCart({item}) {
    const { addProduct } = useContext(CartContext)
    return (
        <>
            <button class="myButton2" onClick={ () => addProduct(item) }>Add to Cart</button>
        </>
    )
}