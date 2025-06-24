<<<<<<< HEAD
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",   // Replace these
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Contact form error:", error);
      });
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Contact Us</h2>
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-6">
            <h5 className="fw-bold mb-4">📍 Reach Us Directly</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                <strong>Phone:</strong> +254 704 095 021
              </li>
              <li className="mb-3">
                <i className="bi bi-whatsapp text-success me-2"></i>
                <strong>WhatsApp:</strong> +254 704 095 021
              </li>
              <li className="mb-3">
                <i className="bi bi-envelope-fill text-danger me-2"></i>
                <strong>Email:</strong> mufasavansforhire@gmail.com
              </li>
              <li className="mb-4">
                <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                <strong>Location:</strong> Nairobi, Kenya
              </li>
            </ul>

            <div className="rounded shadow overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.3621495176692!2d36.8219466!3d-1.2920658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e8e1bc4a4f%3A0xc9a915b35b3ed35!2sNairobi!5e0!3m2!1sen!2ske!4v1718924898894!5m2!1sen!2ske"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mufasa Vans Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h5 className="fw-bold mb-4">✉️ Send a Message</h5>

            {sent && (
              <div className="alert alert-success text-center">
                ✅ Message sent successfully!
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="row g-3 needs-validation" noValidate>
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" name="name" className="form-control" required placeholder="John Doe" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input type="tel" name="phone" className="form-control" required placeholder="+2547..." />
              </div>
              <div className="col-12">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" required placeholder="you@example.com" />
              </div>
              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="4" required placeholder="How can we help you?"></textarea>
              </div>
              <div className="col-12 text-center mt-3">
                <button type="submit" className="btn btn-primary px-4 py-2 shadow-sm">
                  <i className="bi bi-send me-2"></i>Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
=======
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",   // Replace these
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Contact form error:", error);
      });
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Contact Us</h2>
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-6">
            <h5 className="fw-bold mb-4">📍 Reach Us Directly</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                <strong>Phone:</strong> +254 704 095 021
              </li>
              <li className="mb-3">
                <i className="bi bi-whatsapp text-success me-2"></i>
                <strong>WhatsApp:</strong> +254 704 095 021
              </li>
              <li className="mb-3">
                <i className="bi bi-envelope-fill text-danger me-2"></i>
                <strong>Email:</strong> mufasavansforhire@gmail.com
              </li>
              <li className="mb-4">
                <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                <strong>Location:</strong> Nairobi, Kenya
              </li>
            </ul>

            <div className="rounded shadow overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.3621495176692!2d36.8219466!3d-1.2920658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e8e1bc4a4f%3A0xc9a915b35b3ed35!2sNairobi!5e0!3m2!1sen!2ske!4v1718924898894!5m2!1sen!2ske"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mufasa Vans Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h5 className="fw-bold mb-4">✉️ Send a Message</h5>

            {sent && (
              <div className="alert alert-success text-center">
                ✅ Message sent successfully!
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="row g-3 needs-validation" noValidate>
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" name="name" className="form-control" required placeholder="John Doe" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input type="tel" name="phone" className="form-control" required placeholder="+2547..." />
              </div>
              <div className="col-12">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" required placeholder="you@example.com" />
              </div>
              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="4" required placeholder="How can we help you?"></textarea>
              </div>
              <div className="col-12 text-center mt-3">
                <button type="submit" className="btn btn-primary px-4 py-2 shadow-sm">
                  <i className="bi bi-send me-2"></i>Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
>>>>>>> 9ce5eece53e82ac57f3680925f259fc8f28b68f6
