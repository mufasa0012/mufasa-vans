import React, { useState } from "react";
import img2 from '../assets/air.jpg';
import img3 from '../assets/group.jpg';
import img4 from '../assets/mombasa-city.jpg';

const posts = [
  {
    title: "Top 5 Must-Visit Safari Parks in Kenya",
    date: "June 2025",
    image: img4,
    excerpt:
      "Planning a wildlife adventure? These five safari parks offer breathtaking experiences with the Big Five and more. Discover why Kenya is a top destination for safari lovers, and which parks offer the most unforgettable animal encounters and scenery.",
  },
  {
    title: "Why You Should Book Airport Transfers in Advance",
    date: "May 2025",
    image: img2,
    excerpt:
      "Avoid last-minute stress by pre-booking your airport rides. Here's why it's the smart traveler's choice. Learn how early reservations ensure better prices, availability, and peace of mind when traveling to or from major airports in Kenya.",
  },
  {
    title: "How Mufasa Vans Ensures Safe and Comfortable Journeys",
    date: "April 2025",
    image: img3,
    excerpt:
      "From trained drivers to vehicle sanitization, here’s how we prioritize your peace of mind. Discover our safety protocols, comfort-first approach, and how we continue to provide reliable transport across Kenya for tourists and locals alike.",
  },
];

const BlogCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  const getExcerpt = () => {
    if (expanded) return post.excerpt;
    return post.excerpt.slice(0, 80) + "...";
  };

  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={post.image}
          className="card-img-top"
          alt={post.title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{post.title}</h5>
          <small className="text-muted mb-2">{post.date}</small>

          <p
            className="card-text transition-text"
            style={{
              maxHeight: expanded ? "500px" : "80px",
              overflow: "hidden",
              transition: "max-height 2.2s ease",
            }}
          >
            {getExcerpt()}
          </p>

          <button
            className="btn btn-sm btn-outline-primary mt-auto"
            onClick={toggleExpand}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Travel Blog</h2>
        <div className="row g-4">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
