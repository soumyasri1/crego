import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ComponentCSS/Home.css';


function Homepage() {
  return (
    <div >
      <header className=" text-white py-5 mainDiv">
        <Container id="firstContainer">
          <Row>
            <Col>
              <h1 className="display-4 firstBox">Welcome to <span className="json-title">{'{JSON}'} </span><span className="junc-title">JUNCTION</span></h1>
              <p className="lead ">Your One Stop Solution to Simplify your data- Where Complexity Meets Simplicity!</p>
            </Col>
          </Row>
        </Container>
      </header>
      <main className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="text-primary">What is <span className="json-title">{'{JSON}'} </span><span className="junc-title">JUNCTION</span></h2>
              <p className="lead" style={{color:'white'}}>
                In the realm where creativity meets functionality seamlessly, we harness the transformative power of Bootstrap and React to craft a dynamic and intuitive user interface. Our mission is to revolutionize the way you interact with your expressions, infusing every pixel with purpose and every interaction with meaning. With a fusion of design elegance and coding finesse, we unlock endless possibilities for digital expression. Our interface is not just a canvas; it's a gateway to innovation, where every click, swipe, and gesture tells a story. Embrace a world where design innovation and technological excellence converge, setting new standards for user experience and reshaping the digital landscape. Join us on this journey of discovery, where every interaction sparks inspiration and every moment ignites creativity.
              </p>
            </Col>
            <Col md={6}>
              <img src="./banner.jpg" alt="Banner" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mt-5">
            <Col md={12}>
              <h2 className="text-primary">Why Choose Us?</h2>
              <Row>
                <Col md={3} className="mb-3 cardContainer">
                  <Card className="h-100 shadow cardContainerdiv" >
                    <Card.Body className='cardBody'>
                      <Card.Title>Simple and Easy</Card.Title>
                      <Card.Text >
                        Effortlessly transform your data into JSON with Us - Seamlessly converting complexity into structured simplicity, saving you time and effort at every step!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-3 cardContainer">
                  <Card className="h-100 shadow cardContainerdiv">
                    <Card.Body className='cardBody'>
                      <Card.Title>Secure</Card.Title>
                      <Card.Text>
                        Rest assured, your data remains protected with our meticulously secure conversion process at JSONJUNCTION - Your peace of mind is our priority.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-3 cardContainer">
                  <Card className="h-100 shadow cardContainerdiv">
                    <Card.Body className='cardBody'>
                      <Card.Title>Reliable Support</Card.Title>
                      <Card.Text>
                        Feel free to reach out to us at any time for inquiries or assistance. We're here to help!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-3 cardContainer">
  <Card className="h-100  cardContainerdiv">
    <Card.Body className='cardBody'>
      <Card.Title>Fast Processing</Card.Title>
      <Card.Text>
        Quickly process your data conversions with JSONJUNCTION - Streamlining your workflow and ensuring efficient data handling.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2 className="text-primary">Sign Up or Sign In to Continue:</h2>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="bg-dark text-white py-3">
        <Container>
          <Row>
            <Col>
             <Footer></Footer>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Homepage;
