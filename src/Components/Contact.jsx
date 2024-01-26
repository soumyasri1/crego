import React from 'react';
import '../ComponentCSS/Contact.css';

const Contact = () => (
  <div className="container py-5" style={{ color: 'White' }}>
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h1>Contact Us</h1>
        <p className="lead">Have questions or suggestions? We'd love to hear from you!</p>
      </div>
    </div>
    <div className="row justify-content-center mt-4">
      <div className="col-md-6">
        <ul className="list-unstyled">
          <li>
            <h5>Email:</h5>
            <a href="crego@gmail.com" style={{ color: 'white' }}>crego@gmail.com</a>
          </li>
          <li>
            <h5>Phone:</h5>
            <p style={{ color: 'white' }}>(123) 456-7890</p>
          </li>
         
        </ul>
      </div>
    </div>
    <div className="row justify-content-center mt-4">
      <div className="col-md-6">
        <h5>Or send us a message:</h5>
        <form>
        <div className="form-group">
  <textarea className="form-control" rows="8" cols="50"></textarea>
</div>

          
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
