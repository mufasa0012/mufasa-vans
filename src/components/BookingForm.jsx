import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const BookingForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",      // Replace with your EmailJS Service ID
        "your_template_id",     // Replace with your Template ID
        form.current,
        "your_public_key"       // Replace with your Public Key (user ID)
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((err) => console.error("Email error:", err));
  };

  return (
    <div className="p-4 rounded bg-white shadow-lg">
      <h2 className="text-center mb-4">Book a Ride</h2>

      {sent && (
        <div className="alert alert-success text-center">
          ✅ Booking sent successfully!
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Pick-Up Location</label>
          <input type="text" name="pickup" className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Destination Address</label>
          <input type="text" name="destination" className="form-control" required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Passengers</label>
          <input type="number" name="passengers" className="form-control" required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Pick-Up Date</label>
          <input type="date" name="pickup_date" className="form-control" required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Return Date</label>
          <input type="date" name="return_date" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="col-md-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" name="phone" className="form-control" required />
        </div>
        <div className="col-md-3">
          <label className="form-label">Email Address</label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="col-12 text-center mt-3">
          <button type="submit" className="btn btn-primary btn-lg px-5">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
