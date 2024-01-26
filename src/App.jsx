// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Assuming your navbar component is named MyNavbar
import Home from './Components/Home';
import About from './Components/About';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ExpressionEngineForm from './Components/Form';
import Contact from './Components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include the navbar at the top level */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/expression-engine" element={<ExpressionEngineForm />} />
      </Routes>
    </Router>
  );
};

export default App;
