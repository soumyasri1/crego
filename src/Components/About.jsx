import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../ComponentCSS/About.css'; // Import custom CSS for styling

const About = () => {
    return (
      <div className='main-cotainer' >
        <section id="about" className="about-section py-5">
            <Container>
                <Row className="h-100 align-items-center">
                    <Col md={6} className="about-left-panel">
                        <div className="about-content">
                            <h2 className="about-heading">Welcome to <span id="jsonTitle">{'{JSON}'} </span><span id="junctitle">JUNCTION</span></h2>
                            <p className="about-description">
                                Welcome to the innovative world – where creativity meets functionality
                                seamlessly! With the power of Bootstrap and React, we're crafting a dynamic and intuitive
                                user interface that revolutionizes the way you interact with your expressions.
                            </p>
                            <p className="about-description">
                                Unlock the potential of creative logic with our innovative Expression Engine. Seamlessly input
                                your connector type – whether it's the logical prowess of AND or the versatile nature of OR.
                                Define rules with precision, navigate through expressions effortlessly, and sculpt your logic
                                to perfection with dynamic expression management.
                            </p>
                            <p className="about-description">
                                Let's build together – where creativity meets functionality, and where every expression tells
                                a story. Welcome to Expression Engine – where logic finds its voice.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className="about-right-panel">
                        <div className="image-container">
                            

                        <img
    src="/about1.png"
    className="img-fluid image-1"
    alt="About Us"
    style={{ width: '100%', height: '100%' }}
/>

                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
    );
};

export default About;
