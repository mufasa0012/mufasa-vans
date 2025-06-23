import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import BookingForm from '../components/BookingForm';
import bgImage from '../assets/flight.jpg';

const Home = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString('Ride Like Royalty')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Travel in Style')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Your Journey, Our Pride')
      .pauseFor(1000)
      .start();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header
        className="text-white text-center d-flex flex-column justify-content-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage}) center/cover no-repeat`,
          minHeight: '85vh',
        }}
      >
        <div className="container">
          <h1 className="mufasa-title">Mufasa Vans for Hire</h1>
          <h2 className="display-4 fw-bold mb-4 text-shadow">
            <span ref={typewriterRef}></span>
          </h2>
          <p className="lead mb-4">Experience unmatched travel comfort and reliability with us.</p>
          <a
            href="#booking"
            className="btn btn-warning btn-lg px-4 py-2 shadow-lg glow-on-hover"
          >
            Book Your Ride Today
          </a>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="bi bi-truck fs-1 text-warning"></i>
              <h5 className="fw-bold mt-3">Flexible Van Rentals</h5>
              <p>From airport transfers to wedding vans, we cover all your travel needs with customizable packages.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-geo-alt fs-1 text-warning"></i>
              <h5 className="fw-bold mt-3">Nationwide Coverage</h5>
              <p>Whether you're exploring Nairobi, Mombasa, Maasai Mara or Eldoret, we've got you covered.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-star fs-1 text-warning"></i>
              <h5 className="fw-bold mt-3">Top Rated Service</h5>
              <p>Our clients love our reliable, clean, and on-time service. We value your satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">Your Trusted Travel Partner</h2>
              <p>
                Mufasa Vans for Hire offers private van services for families, tourists, and corporate clients.
                Our modern fleet and experienced drivers ensure you arrive comfortably and safely.
              </p>
              <p>
                Whether it's an airport pickup, safari tour, event shuttle, or group travel, Mufasa is your go-to
                solution in Kenya.
              </p>
              <a href="#booking" className="btn btn-outline-warning mt-3">Plan Your Trip</a>
            </div>
            <div className="col-md-6">
              <img
                src={bgImage}
                alt="Travel with Mufasa Vans"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Book Your Van Today</h2>
          <p className="text-center mb-5">Get started by filling the form below and our team will confirm your booking shortly.</p>
          <BookingForm />
        </div>
      </section>
    </>
  );
};

export default Home;
