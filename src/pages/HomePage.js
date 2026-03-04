import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section id="hero" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Fresh Mediterranean Flavors in Chicago</h1>
            <p>
              Little Lemon is a family-owned neighborhood bistro serving
              vibrant Mediterranean dishes with a modern twist.
            </p>
            <Link to="/reservations" className="btn primary-btn">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
              alt="Little Lemon Restaurant Dish"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Weekly Specials</h2>
            <Link to="/menu" className="btn secondary-btn">
              View Full Menu
            </Link>
          </div>
          <div className="card-grid">
            <article className="card">
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                alt="Greek Salad"
              />
              <div className="card-body">
                <div className="card-header">
                  <h3>Greek Salad</h3>
                  <span className="price">$12.99</span>
                </div>
                <p>
                  Crisp lettuce, peppers, olives, and feta with lemon-herb
                  dressing.
                </p>
              </div>
            </article>

            <article className="card">
              <img
                src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
                alt="Bruschetta"
              />
              <div className="card-body">
                <div className="card-header">
                  <h3>Bruschetta</h3>
                  <span className="price">$7.99</span>
                </div>
                <p>
                  Grilled bread topped with fresh tomato, basil, and olive oil.
                </p>
              </div>
            </article>

            <article className="card">
              <img
                src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg"
                alt="Lemon Dessert"
              />
              <div className="card-body">
                <div className="card-header">
                  <h3>Lemon Dessert</h3>
                  <span className="price">$5.99</span>
                </div>
                <p>Zesty lemon tart with buttery crust and whipped cream.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="section section-alt">
        <div className="container about-grid">
          <div>
            <h2>About Little Lemon</h2>
            <p>
              Run by brothers Mario and Adrian, Little Lemon brings the warmth
              of Mediterranean hospitality to the heart of Chicago.
            </p>
            <p>
              We blend timeless family recipes with seasonal local produce to
              create a welcoming dining experience.
            </p>
          </div>
          <div className="about-images">
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              alt="Mediterranean dish"
              className="about-image about-image-top"
            />
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
              alt="Restaurant interior"
              className="about-image about-image-bottom"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
