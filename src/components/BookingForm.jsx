import React, { useRef } from "react";
import emailjs from "emailjs-com";

const BookingForm = ({ serviceType }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",    // 🔁 Replace with your EmailJS service ID
        "your_template_id",   // 🔁 Replace with your EmailJS template ID
        form.current,
        "your_public_key"     // 🔁 Replace with your EmailJS public key
      )
      .then(() => {
        alert("Booking sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send booking. Please try again.");
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="p-4 rounded shadow bg-light"
    >
      <h4 className="mb-4 text-center fw-bold">Ride Booking Form</h4>

      {/* Name */}
      <div className="mb-3">
        <label className="form-label">Your Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="John Doe"
          className="form-control rounded-pill"
          required
        />
      </div>

      {/* Pick-up */}
      <div className="mb-3">
        <label className="form-label">Pick-up Location</label>
        <input
          type="text"
          name="pickup"
          placeholder="E.g. CBD, Westlands"
          className="form-control rounded-pill"
          required
        />
      </div>

      {/* Destination */}
      <div className="mb-3">
        <label className="form-label">Destination</label>
        <input
          type="text"
          name="destination"
          placeholder="E.g. Rongai, Umoja"
          className="form-control rounded-pill"
          required
        />
      </div>

      {/* Vehicle size */}
      <div className="mb-3">
        <label className="form-label">Vehicle Size (Seater)</label>
        <select
          name="seater"
          className="form-select rounded-pill"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select Seater Size
          </option>
          <option value="33">33-Seater</option>
          <option value="22">22-Seater</option>
          <option value="18">18-Seater</option>
          <option value="16">16-Seater</option>
          <option value="15">15-Seater</option>
          <option value="14">14-Seater</option>
          <option value="11">11-Seater</option>
          <option value="10">10-Seater</option>
          <option value="7">7-Seater</option>
          <option value="5">5-Seater</option>
        </select>
      </div>

      {/* Notes */}
      <div className="mb-3">
        <label className="form-label">Additional Notes</label>
        <textarea
          name="message"
          placeholder="Anything else we should know?"
          rows="4"
          className="form-control rounded"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-warning w-100 fw-semibold shadow-sm rounded-pill">
        Submit Booking
      </button>

      {/* WhatsApp */}
      <div className="text-center mt-4">
        <p className="mb-2 fw-semibold text-muted">Prefer to chat?</p>
        <a
          href="https://wa.me/254704095021"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success d-inline-flex align-items-center justify-content-center gap-2 w-100 rounded-pill shadow"
          style={{ transition: "all 0.3s ease" }}
        >
          <i className="bi bi-whatsapp fs-6" style={{ fontSize: "1rem" }}></i>
          Chat via WhatsApp
        </a>
      </div>
    </form>
  );
};

export default BookingForm;
