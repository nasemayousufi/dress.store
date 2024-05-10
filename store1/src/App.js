
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';  
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';
import CartProvider from './CartContext';
import About from './pages/About';
import Contact from  './pages/Contact';
import { FaLinkedin } from 'react-icons/fa'; 
import { FaInstagram  } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';





function App() {
  
  return (
    <CartProvider>
    <Container>

      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Store />} />
          <Route path='success' element ={<Success />} />
          <Route path='cancel' element ={<Cancel />} />
          <Route path='about' element ={<About />} />
          <Route path='contact' element ={<Contact/>} />
          
          
          
        </Routes>
        

        <footer className="text-dark py-3" style={{ backgroundColor: 'rgb(223, 170, 91)' ,marginTop:'10px',marginBottom:'5px'}}>
    <div className="container px-5">
        <div className="d-flex justify-content-between align-items-center">
            <p>&copy; @2024 - Nasema Yousufi</p>
            <div>
                <a className="text-dark mr-3" href="https://www.linkedin.com/in/nasema-yousufi">
                    <FaLinkedin size={24} />
                </a>
                <a className="text-dark mr-3" href="https://www.instagram.com/nasimayousufi">
                    <FaInstagram size={24} />
                </a>
                <a className="text-dark" href="https://www.facebook.com/nasimayousufi">
                    <FaFacebook size={24} />
                </a>
            </div>
        </div>
    </div>
</footer>
    
      </BrowserRouter>


    </Container>
   
  
    </CartProvider>
    
    
    
    
  );
}



export default App ;

