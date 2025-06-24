<<<<<<< HEAD
import React from "react";
import img1 from '../assets/w.jpg';
import img2 from '../assets/air.jpg';
import img3 from '../assets/group.jpg';
import img4 from '../assets/mombasa-city.jpg';
import img5 from '../assets/eldoret.jpg';
import img6 from '../assets/park.jpg';

const gallery = [
  { image: img1, title: "Wedding Transport - Nairobi" },
  { image: img2, title: "Airport Transfer - Jomo Kenyatta" },
  { image: img3, title: "Group Safari - Maasai Mara" },
  { image: img4, title: "Corporate Trip - Mombasa" },
  { image: img5, title: "Family Tour - Nakuru" },
  { image: img6, title: "Event Shuttle - Eldoret" },
];


const Portfolio = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Our Portfolio</h2>
        <div className="row g-4">
          {gallery.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <div className="card shadow-sm h-100 border-0">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body text-center">
                  <h6 className="card-title">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
=======
import React from "react";
import img1 from '../assets/w.jpg';
import img2 from '../assets/air.jpg';
import img3 from '../assets/group.jpg';
import img4 from '../assets/mombasa-city.jpg';
import img5 from '../assets/eldoret.jpg';
import img6 from '../assets/park.jpg';

const gallery = [
  { image: img1, title: "Wedding Transport - Nairobi" },
  { image: img2, title: "Airport Transfer - Jomo Kenyatta" },
  { image: img3, title: "Group Safari - Maasai Mara" },
  { image: img4, title: "Corporate Trip - Mombasa" },
  { image: img5, title: "Family Tour - Nakuru" },
  { image: img6, title: "Event Shuttle - Eldoret" },
];


const Portfolio = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Our Portfolio</h2>
        <div className="row g-4">
          {gallery.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <div className="card shadow-sm h-100 border-0">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body text-center">
                  <h6 className="card-title">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
>>>>>>> 9ce5eece53e82ac57f3680925f259fc8f28b68f6
