import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import BookingForm from "../components/BookingForm";

import img1 from "../assets/matatu-nganya.jpg";
import img2 from "../assets/7l-matatu.jpg";
import img3 from "../assets/9l-matatu.jpg";

// Local vehicle data
const vehicles = [
  {
    name: "Matatu / Nganya",
    image: img1,
    capacity: "33 Passengers",
    features: ["Vibrant Design", "Loud Music System", "Fast Navigation", "City Routes"],
  },
  {
    name: "7L Matatu",
    image: img2,
    capacity: "14 Passengers",
    features: ["Compact Size", "Comfortable Seats", "AC", "Affordable"],
  },
  {
    name: "9L Matatu",
    image: img3,
    capacity: "15,16,18 Passengers",
    features: ["Extra Space", "Group Friendly", "Well Maintained", "Reliable Driver"],
  },
];

const LocalBookingHome = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString("Explore Your City")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Reliable Local Transfers")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Book Local — Ride Mufasa")
      .pauseFor(1000)
      .start();
  }, []);

  // ✅ Define background image to prevent crash
  const localBgImage = img1;

  return (
    <>
      {/* Hero Section */}
      <header
        className="text-white text-center d-flex flex-column justify-content-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${localBgImage}) center/cover no-repeat`,
          minHeight: "85vh",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Local Rides with Mufasa</h1>
          <h2 className="display-6 fw-semibold mb-4">
            <span ref={typewriterRef}></span>
          </h2>
          <p className="lead mb-4">Quick, reliable, and affordable rides within your town or city.</p>
          <a href="#booking" className="btn btn-warning btn-lg px-5 py-2 shadow">
            Book Now
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="bi bi-clock fs-1 text-warning"></i>
              <h5 className="fw-bold mt-3">On-Time Pickup</h5>
              <p>Never miss your appointment or meeting. We value your time.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-wallet2 fs-1 text-warning"></i>
              <h5 className="fw-bold mt-3">Affordable Prices</h5>
              <p>Transparent and budget-friendly rates for everyday commuting.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-people fs-1 text-warning"></i>
              <h5 className="fw-bold mt-3">Group Rides</h5>
              <p>Travel with friends, family, or co-workers in comfort and style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Cards Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Local Vehicle Options</h2>
          <div className="row">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow h-100">
                  <img
                    src={vehicle.image}
                    className="card-img-top"
                    alt={vehicle.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{vehicle.name}</h5>
                    <p className="mb-2"><strong>Capacity:</strong> {vehicle.capacity}</p>
                    <ul className="list-unstyled">
                      {vehicle.features.map((feature, i) => (
                        <li key={i}>✅ {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Book a Local Ride</h2>
          <p className="text-center mb-5">Tell us where you're headed. We'll handle the ride!</p>
          <BookingForm serviceType="local" />
        </div>
      </section>
    </>
  );
};

export default LocalBookingHome;
