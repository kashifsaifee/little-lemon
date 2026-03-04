import React, { useState } from "react";

const ReservationsPage = () => {
  const [formValues, setFormValues] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const [errors, setErrors] = useState({});
  const [bookings, setBookings] = useState([]);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
    setSuccess("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.date) newErrors.date = "This field is required.";
    if (!formValues.time) newErrors.time = "This field is required.";
    if (!formValues.guests) newErrors.guests = "This field is required.";

    if (formValues.guests) {
      const g = Number(formValues.guests);
      if (g < 1 || g > 10) {
        newErrors.guests = "Guests must be between 1 and 10.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBooking = {
      date: formValues.date,
      time: formValues.time,
      guests: formValues.guests,
      occasion: formValues.occasion,
    };

    setBookings((prev) => [...prev, newBooking]);
    setFormValues({ date: "", time: "", guests: "", occasion: "" });
    setSuccess("Thank you! Your table has been reserved.");
  };

  return (
    <section className="section section-alt">
      <div className="container reservation-grid">
        <div>
          <h2>Reserve a Table</h2>
          <p>
            Book your visit in advance to guarantee your table, especially on
            weekends and holidays.
          </p>
          <ul className="list">
            <li>Open Tuesday to Sunday</li>
            <li>Lunch: 12:00 PM – 3:00 PM</li>
            <li>Dinner: 6:00 PM – 10:00 PM</li>
          </ul>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={formValues.date}
              onChange={handleChange}
              className={errors.date ? "input-error" : ""}
            />
            <small className="error-msg">{errors.date}</small>
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={formValues.time}
              onChange={handleChange}
              className={errors.time ? "input-error" : ""}
            />
            <small className="error-msg">{errors.time}</small>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              min="1"
              max="10"
              placeholder="1–10"
              value={formValues.guests}
              onChange={handleChange}
              className={errors.guests ? "input-error" : ""}
            />
            <small className="error-msg">{errors.guests}</small>
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={formValues.occasion}
              onChange={handleChange}
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Casual dining">Casual dining</option>
              <option value="Business meeting">Business meeting</option>
            </select>
          </div>

          <button type="submit" className="btn primary-btn">
            Confirm Reservation
          </button>

          {success && <p className="form-success">{success}</p>}
        </form>
      </div>

      <div className="container bookings-section">
        <h3>Your Bookings</h3>
        {bookings.length === 0 ? (
          <p className="no-bookings">
            No bookings yet. Fill the form to add your first reservation.
          </p>
        ) : (
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Occasion</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, index) => (
                <tr key={index}>
                  <td>{b.date}</td>
                  <td>{b.time}</td>
                  <td>{b.guests}</td>
                  <td>{b.occasion || "-"}</td>
                  <td>
                    <span className="badge">Confirmed</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default ReservationsPage;
