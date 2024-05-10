
import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props){
    
    
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    return (
        <>
        <img src ={productData.productImage}  alt= {productData.title} style={{maxWidth:"100px", maxHeight:"100px"}}/>
        <h1> {productData.title}</h1>
        <p> {quantity} total</p>
        <p>${(quantity * productData.price).toFixed(2)}</p>
        <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
        </>

    )
}

export default CartProduct;