import React from "react";
import img1 from '../assets/flight.jpg';
import img2 from '../assets/hail.jpeg';
import img3 from '../assets/seat.jpg';

const vehicles = [
  {
    name: "Toyota Hiace",
    image: img1, // Replace with actual image paths in /public/
    capacity: "14 Passengers",
    features: ["Air Conditioning", "Leather Seats", "USB Charging", "Music System"],
  },
  {
    name: "Nissan Caravan",
    image: img2,
    capacity: "11 Passengers",
    features: ["Reclining Seats", "Cool Box", "Bluetooth Audio", "Professional Driver"],
  },
  {
    name: "Coaster Bus",
    image: img3,
    capacity: "22 Passengers",
    features: ["Spacious Interior", "Overhead Storage", "Wi-Fi", "AC"],
  },
];

const Fleet = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Our Fleet</h2>
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
  );
};

export default Fleet;
