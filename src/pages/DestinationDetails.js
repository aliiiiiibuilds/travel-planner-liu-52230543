import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations";

function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find((item) => item.id === id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
//got it from chatgpt
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  if (!destination) {
    return (
      <div>
        <h1>Destination not found</h1>
        <p>
          The destination you are looking for does not exist.{" "}
          <Link to="/">Go back to Home</Link>
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="loading-spinner" />
        <p className="text-muted mt-3">Loading destination details...</p>
      </div>
    );
  }

  return (
    <div className="col-md-8 mx-auto">
      <div className="details-card animated-card">
        <p className="small text-muted mb-1">
          {destination.flag && <span className="me-1">{destination.flag}</span>}
          {destination.country}
        </p>
        <h1 className="mb-2">{destination.name}</h1>

        <p className="mb-2">
          <span className="badge-soft me-2">
            Budget level: {destination.budgetLevel}
          </span>
          <span className="price-pill">
            Estimated price range: {destination.priceRange}
          </span>
        </p>

        <p className="text-muted">{destination.description}</p>

        <p>
          <strong>Best time to visit:</strong> {destination.bestTime}
        </p>

        <h5 className="mt-3">Main Highlights</h5>
        <ul>
          {destination.highlights.map((h, index) => (
            <li key={index}>{h}</li>
          ))}
        </ul>

        <Link to="/" className="btn btn-outline-primary mt-3">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default DestinationDetails;
