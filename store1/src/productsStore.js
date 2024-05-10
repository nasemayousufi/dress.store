import product1 from './assets/1.jpg';
import product2 from './assets/2.png';
import product3 from './assets/3.png';
import product4 from './assets/4.png';
import product5 from './assets/5.png';
import product6 from './assets/6.png';
import product7 from './assets/7.png';
import product8 from './assets/8.png';
import product9 from './assets/9.png';
import product10 from './assets/10.png';
import product11 from './assets/11.png';
import product12 from './assets/12.png';

const productsArray =[
    {
        id: "price_1P9SWfB7WhE6RWOSjmP9Fkgh",
        title: "Party Dress",
        price: 45.99,
        productImage: product1,

    },
    {
        id: "price_1P9SThB7WhE6RWOSVfeCJhO0",
        title: "Empire Dress",
        price: 50.00,
        productImage: product2,
     

    },
    {
        id:"price_1P9yBvB7WhE6RWOS39Bj3NWz",
        title: "Mother Dress",
        price: 70.99,

        productImage: product3,

    },
    {
        id: "price_1P9STxB7WhE6RWOSYieBKMfP",
        title: "Mother Dress",
        price: 56.99,
        productImage: product4,
   
       
    },
    {
        id: "price_1PDROJB7WhE6RWOSAJGKfuFO",
        title: "Wedding Dress",
        price: 250.00,
        productImage: product5,
   
       
    },
    {
        id: "price_1PDROvB7WhE6RWOSuAUBHx0V",
        title: "Gown Dress",
        price: 99.99,
        productImage: product6,
   
       
    },
    {
        id: "price_1PDRPbB7WhE6RWOSwU0pQVju",
        title: "Party Dress",
        price: 50.99,
        productImage: product7,
   
       
    },
    {
        id: "price_1PDRQHB7WhE6RWOSORwBFCqe",
        title: "Gown Dress",
        price: 125.99,
        productImage: product8,
   
       
    },
    {
        id: "price_1PDRQrB7WhE6RWOS8tlpLfpr",
        title: "Mother Dress",
        price: 130.00,
        productImage: product9,
   
       
    },
    {
        id: "price_1PDRRSB7WhE6RWOSYqV92nGh",
        title: "Gown Dress",
        price: 60.00,
        productImage: product10,
   
       
    },
    {
        id: "price_1PDRSOB7WhE6RWOSKwRjeAye",
        title: "Party Dress",
        price: 75.99,
        productImage: product11,
   
       
    },
    {
        id: "price_1PDRavB7WhE6RWOSPs9pbInZ",
        title: "Party Dress",
        price: 135.00,
        productImage: product12,
       
    },
    
    
];


function getProductData(id){
    let productData = productsArray.find(product => product.id === id)
    if(productData == undefined){
        console.log("Product data does not exist for ID:"  + id);
      
    }
    return productData;
}



export { productsArray, getProductData};