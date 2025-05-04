import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <h1>Welcome to Multimart</h1>
              <p>Discover amazing products at great prices</p>
              <Link to="/shop" className="btn btn-primary">
                Shop Now
              </Link>
            </Col>
            <Col lg={6} className="hero-image">
              <img src="/images/hero.jpg" alt="Hero" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features">
        <Container>
          <h2 className="text-center mb-5">Why Choose Us</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="feature-card">
                <div className="feature-icon">
                  <ion-icon name="shield-checkmark"></ion-icon>
                </div>
                <h3>Secure Shopping</h3>
                <p>Your security is our priority</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card">
                <div className="feature-icon">
                  <ion-icon name="rocket"></ion-icon>
                </div>
                <h3>Fast Delivery</h3>
                <p>Quick and reliable shipping</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card">
                <div className="feature-icon">
                  <ion-icon name="headset"></ion-icon>
                </div>
                <h3>24/7 Support</h3>
                <p>Always here to help you</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="categories">
        <Container>
          <h2 className="text-center mb-5">Shop by Category</h2>
          <Row className="g-4">
            <Col sm={6} md={4} lg={3}>
              <Link to="/shop?category=electronics" className="category-card">
                <img src="/images/electronics.jpg" alt="Electronics" />
                <h3>Electronics</h3>
              </Link>
            </Col>
            <Col sm={6} md={4} lg={3}>
              <Link to="/shop?category=clothing" className="category-card">
                <img src="/images/clothing.jpg" alt="Clothing" />
                <h3>Clothing</h3>
              </Link>
            </Col>
            <Col sm={6} md={4} lg={3}>
              <Link to="/shop?category=home" className="category-card">
                <img src="/images/home.jpg" alt="Home" />
                <h3>Home</h3>
              </Link>
            </Col>
            <Col sm={6} md={4} lg={3}>
              <Link to="/shop?category=beauty" className="category-card">
                <img src="/images/beauty.jpg" alt="Beauty" />
                <h3>Beauty</h3>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
