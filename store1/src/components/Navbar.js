import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartProduct from './CartProduct';
import { Button, Navbar, Modal, Container, Dropdown, Nav } from 'react-bootstrap'; 
import { productsArray } from '../productsStore'; // Ensure correct import path
import './Navbar.css';

function NavbarComponent() {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    //const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    // Filter products based on search term
    //const filteredProductsArray= productsArray.filter(product =>
       // product.title.toLowerCase().includes(searchTerm.toLowerCase())
    //);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items })
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.url) {
                window.location.assign(response.url);
            }
        });
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
            <Navbar expand="sm" >
                
                <Container>
                    
                    
                <Navbar.Brand href='/'>
                    <img
                        src="/images/images (2).png"
                        width="50"
                        height="50"
                    
                        alt="Store Logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Shop</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                      
                  
                    {/* Search Form */}
                    

                    <Dropdown className="ml-2">
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownButtonStyle}>
                           Category Page
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="http://localhost:3000/about">About</Dropdown.Item>
                            <Dropdown.Item href="http://localhost:3000/contact">Contact</Dropdown.Item>
                            <Dropdown.Item href="http://localhost:3000/">Shop</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    

                    <Button onClick={handleShow} className="cart-button">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{ color: 'dark' }} />
                        <span style={{ marginLeft: '5px' }}> {productsCount}</span>
                    </Button>
                    
                </Navbar.Collapse>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
                            ))}
                            <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
                            <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
                        </>
                        :
                        <h1>There are no items in your cart</h1>
                    }
                </Modal.Body>
            </Modal>
        </Navbar>
    );
}

const dropdownButtonStyle = {
    backgroundColor: ' #2d2511',
    borderColor: '#0c0c0c',
    borderRadius: '5px',
    margin:'10px'
};
const SearchButtonStyle = {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    borderRadius: '5px',
    color:'white',
};

export default NavbarComponent;