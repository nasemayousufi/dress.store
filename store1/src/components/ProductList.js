import React from 'react';
import ProductList from './ProductList'; // Adjust the path as needed

function ParentComponent() {
    // Assuming you have a list of products here
    const products = [
        { id: 1, title: 'Product 1', price: 45.99, productImage: "assets/1.jpg" },
        { id: 2, title: 'Product 2', price: 50, productImage: "assets/2.png" },
        // Add more products as needed
    ];

    return (
        <div>
            <h1>Product List</h1>
            <ProductList products={products} />
        </div>
    );
}

export default ParentComponent;