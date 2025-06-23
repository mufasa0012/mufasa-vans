import React from "react";
import img1 from '../assets/w.jpg';
import img2 from '../assets/air.jpg';
import img3 from '../assets/group.jpg';
import img4 from '../assets/mombasa-city.jpg';
import img5 from '../assets/eldoret.jpg';
import img6 from '../assets/park.jpg';

const tours = [
  {
    title: "Airport Transfers",
    image: img1, // Replace with real image e.g., /airport.jpg
    description:
      "We provide reliable, on-time airport pickup and drop-off services from all major airports in Kenya.",
  },
  {
    title: "Safari Packages",
    image: img2,
    description:
      "Explore the majestic wildlife parks of Kenya with our professional guides and luxury vans or buses.",
  },
  {
    title: "Wedding Transport",
    image: img3,
    description:
      "Arrive in style on your big day. Elegant, clean vans for you, your bridal party, and guests.",
  },
  {
    title: "Group & Corporate Travel",
    image: img4,
    description:
      "We cater to group outings, company retreats, and business travel across the country.",
  },
];

const Tour = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Tour & Travel Packages</h2>
        <div className="row">
          {tours.map((tour, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow h-100">
                <img src={tour.image} className="card-img-top" alt={tour.title} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{tour.title}</h5>
                  <p className="card-text">{tour.description}</p>
                  <a href="#booking" className="btn btn-warning">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tour;
