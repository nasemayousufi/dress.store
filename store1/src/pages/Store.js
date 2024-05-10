import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../productsStore';   
import ProductCard from '../components/ProductCard';
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa'; 
import { FaInstagram  } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';





function Store(){
    return (
        <>
        <h1 align="center" className='p-3'> Shop</h1>
        <Row xs={1} md={3} className='g-3'>
            {productsArray.map((product, idx) => (
                <Col align="center"  key={idx}>
                    <ProductCard  product={product}/>
                </Col>
            ))}
                
        </Row>

            
        </>
        
        
    )
}

export default Store;