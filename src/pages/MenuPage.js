import React from "react";

const MenuPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h2>Our Menu</h2>
        <p className="menu-intro">
          Explore our selection of Mediterranean-inspired dishes,
          crafted with seasonal ingredients.
        </p>

        <h3>Starters</h3>
        <div className="card-grid">
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
              <p>Grilled bread with tomato, basil, and garlic-infused olive oil.</p>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg"
              alt="Hummus Plate"
            />
            <div className="card-body">
              <div className="card-header">
                <h3>Hummus Plate</h3>
                <span className="price">$8.99</span>
              </div>
              <p>Creamy chickpea hummus served with warm pita and vegetables.</p>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
              alt="Stuffed Grape Leaves"
            />
            <div className="card-body">
              <div className="card-header">
                <h3>Stuffed Grape Leaves</h3>
                <span className="price">$9.50</span>
              </div>
              <p>Vine leaves filled with rice, herbs, and a hint of lemon.</p>
            </div>
          </article>
        </div>

        <h3 style={{ marginTop: "2.5rem" }}>Mains</h3>
        <div className="card-grid">
          <article className="card">
            <img
              src="https://images.pexels.com/photos/4109130/pexels-photo-4109130.jpeg"
              alt="Grilled Salmon"
            />
            <div className="card-body">
              <div className="card-header">
                <h3>Grilled Salmon</h3>
                <span className="price">$18.50</span>
              </div>
              <p>Salmon fillet with lemon butter sauce and seasonal vegetables.</p>
            </div>
          </article>

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
              <p>Lettuce, olives, feta, cucumber, and tomato with herb dressing.</p>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.pexels.com/photos/3535385/pexels-photo-3535385.jpeg"
              alt="Lemon Chicken"
            />
            <div className="card-body">
              <div className="card-header">
                <h3>Lemon Chicken</h3>
                <span className="price">$17.00</span>
              </div>
              <p>
                Roasted chicken marinated in lemon, garlic, and Mediterranean herbs.
              </p>
            </div>
          </article>
        </div>

        <h3 style={{ marginTop: "2.5rem" }}>Desserts</h3>
        <div className="card-grid">
          <article className="card">
            <img
              src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg"
              alt="Baklava"
            />
            <div className="card-body">
              <div className="card-header">
                <h3>Baklava</h3>
                <span className="price">$6.50</span>
              </div>
              <p>Layers of filo pastry with nuts and honey syrup.</p>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg"
              alt="Lemon Tart"
            />
            <div className="card-body">
              <div className="card-header">
                <h3>Lemon Tart</h3>
                <span className="price">$5.99</span>
              </div>
              <p>Classic lemon tart with a buttery crust and fresh zest.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
