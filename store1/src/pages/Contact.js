import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import './Contact.css'; 

const Contact = () => {
    return (
        <main className="contact-form-container">
            <h1 className="contact-heading">Get in Touch</h1>
            <form className="contact-form" method="post" action="https://webdevbasics.net/scripts/demo.php">
                <div className="form-group">
                    <label htmlFor="myName" className="form-label">Name:</label>
                    <input type="text" name="myName" id="myName" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="myEmail" className="form-label">Email:</label>
                    <input type="email" name="myEmail" id="myEmail" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="myComments" className="form-label">Comments:</label>
                    <textarea
                        name="myComments"
                        id="myComments"
                        rows="4"
                        className="form-input"
                    ></textarea>
                </div>
                <div className="button-group">
                    <input type="submit" id="mySubmit" value="Submit" className="btn-submit" />
                    <input type="reset" id="myReset" value="Reset" className="btn-reset" />
                </div>
            </form>

     
        </main>
    );
};

export default Contact;