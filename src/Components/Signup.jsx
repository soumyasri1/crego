// components/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ComponentCSS/Authenticate.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Perform signup logic (in a real app, this would be sent to a server)
    const userInfo = { username, email, password };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                    <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-at"></i></span>
                    <input type="email" className="form-control" id="email"  onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label" >
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                    <input type="password" className="form-control" id="password"onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>

                <div className="d-grid">
                  <button type="button" className="btn btn-primary" onClick={handleSignup}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
