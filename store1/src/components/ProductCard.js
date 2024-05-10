import React from 'react';
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from '../CartContext';
import { useContext } from "react"

const styles = {
  card: {
    width: '20rem', // Adjust the width as needed
    margin: '20px',
  
    // Adjust the margin as needed
  },
  image: {
    height: '300px', // Adjust the height as needed
    objectFit: 'cover',
 // Ensure the image covers the entire area
  },
  title: {
    fontSize: '1.2rem', // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
    margin: '10px 0', // Adjust the margin as needed
  },
  description: {
    fontSize: '1rem', // Adjust the font size as needed
    margin: '5px 0', // Adjust the margin as needed
  },
  button: {
    margin: '5px', // Adjust the margin as needed
    backgroundColor: ' rgb(223, 170, 91)', // Set the background color to transparent
    border: '2px solid  rgb(223, 170, 91)', // Set the border
    minWidth: '100px', // Set the minimum width
    paddingLeft: '10px', // Set the left padding
    paddingRight: '10px', // Set the right padding
    paddingTop: '5px', // Set the top padding
    paddingBottom: '5px', // Set the bottom padding
    borderRadius: '15px', // Set the border radius
    color: 'rgb(19, 19, 19)', // Set the text color
  },
};

function ProductCard(props) {
    const { id, title, price, productImage } = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(id);

    return (
        <Card style={styles.card}>
            <Card.Body>
                <img src={productImage} alt={title} style={styles.image} />  
                <Card.Title style={styles.title}>{title}</Card.Title>
                <Card.Text style={styles.description}>${price}</Card.Text>
                
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column sm="6">In Cart {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button size="sm" onClick={() => cart.addOneToCart(id)} style={styles.button}>+</Button>
                                <Button size="sm" onClick={() => cart.removeOneFromCart(id)} style={styles.button}>-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(id)} style={styles.button}>Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(id)} style={styles.button}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    );
}
 
export default ProductCard;