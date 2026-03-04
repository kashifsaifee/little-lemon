import React, { useState } from "react";

const ContactPage = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
    setSuccess("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "Please enter your name.";
    if (!formValues.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formValues.message.trim())
      newErrors.message = "Please enter a short message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSuccess("Thank you! Your message has been sent.");
    setFormValues({ name: "", email: "", message: "" });
  };

  return (
    <section className="section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Have a question about your reservation, a private event, or our menu?
          Reach out and we’ll get back to you soon.
        </p>

        <div className="reservation-grid">
          <div>
            <h3>Restaurant Info</h3>
            <ul className="list">
              <li>Little Lemon Restaurant</li>
              <li>123 Lemon Street, Chicago, IL</li>
              <li>Phone: (312) 555-0199</li>
              <li>Email: hello@littlelemon.com</li>
            </ul>

            <h3 style={{ marginTop: "2rem" }}>Opening Hours</h3>
            <ul className="list">
              <li>Tuesday – Friday: 12:00 PM – 10:00 PM</li>
              <li>Saturday – Sunday: 11:00 AM – 11:00 PM</li>
              <li>Monday: Closed</li>
            </ul>
          </div>

          <form
            className="reservation-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={formValues.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
              <small className="error-msg">{errors.name}</small>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formValues.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              <small className="error-msg">{errors.email}</small>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="How can we help?"
                value={formValues.message}
                onChange={handleChange}
                className={errors.message ? "input-error" : ""}
              ></textarea>
              <small className="error-msg">{errors.message}</small>
            </div>

            <button type="submit" className="btn primary-btn">
              Send Message
            </button>

            {success && <p className="form-success">{success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
