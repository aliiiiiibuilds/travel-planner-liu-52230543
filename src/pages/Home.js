import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBudget =
      budgetFilter === "all" || destination.budgetTag === budgetFilter;

    return matchesSearch && matchesBudget;
  });

  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageItems = filteredDestinations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, budgetFilter]);

  return (
    <div>
      {}
      <div className="hero">
        <h1 className="display-5 fw-bold">
          Plan your next trip with TravelBuddy
        </h1>
        <p className="col-md-8 fs-5">
          TravelBuddy is a simple travel planner that lets you explore a small
          set of example destinations, compare basic information and build
          first ideas for your next trip.
        </p>
        <Link className="btn btn-light btn-lg" to="/features">
          View our services
        </Link>
      </div>

      {}
      <div className="filters-bar mb-4">
        <div className="row g-3 align-items-end">
          <div className="col-md-6">
            <label className="form-label small text-muted">
              Search destination
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Type a city or country name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label small text-muted">Budget level</label>
            <select
              className="form-select"
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
            >
              <option value="all">Any</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label small text-muted d-block">
              Price range
            </label>
            <div className="coming-soon-pill">
              Price range filter <span>coming soon</span>
            </div>
          </div>
        </div>
      </div>

      {}
      <h2 className="section-title">Popular Destinations</h2>
      <p className="text-muted mb-3">
        The list below shows a small sample of destinations. You can search by
        name and filter by budget to see which trip might fit your preferences.
      </p>

      {pageItems.length === 0 ? (
        <p className="text-muted">
          No destinations match your search. Try changing the filters.
        </p>
      ) : (
        <div className="row">
          {pageItems.map((destination, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={destination.id}>
              <div
                className="destination-card h-100"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {destination.image && (
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-image"
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-1">
                    {destination.flag && (
                      <span className="me-1">{destination.flag}</span>
                    )}
                    {destination.name}
                  </h5>
                  <p className="card-text text-muted small mb-1">
                    {destination.country}
                  </p>
                  <p className="card-text text-muted mb-2">
                    {destination.shortDescription}
                  </p>
                  <p className="card-text mb-1">
                    <small>
                      <strong>Best time:</strong> {destination.bestTime}
                    </small>
                  </p>
                  <p className="card-text mb-3">
                    <span className="badge-soft me-2">
                      Budget: {destination.budgetLevel}
                    </span>
                    <span className="price-pill">
                      Price: {destination.priceRange}
                    </span>
                  </p>
                  <Link
                    to={`/destination/${destination.id}`}
                    className="mt-auto btn btn-outline-primary btn-sm"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {}
      {filteredDestinations.length > itemsPerPage && (
        <nav className="pagination-container">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage((prev) => Math.max(1, prev - 1))
                }
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <li
                key={idx + 1}
                className={`page-item ${
                  currentPage === idx + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Home;
