import React from "react";

function Features() {
  return (
    <div className="col-md-10 mx-auto">
      <h1 className="mb-3">Services & Features</h1>
      <p>
        TravelBuddy offers a small set of core features designed to support
        basic travel planning. The focus is on clarity, simplicity and a clean
        user experience rather than on complex business logic.
      </p>

      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Destination Catalogue</h5>
              <p className="card-text">
                Users can browse a catalogue of example destinations, each with
                a short description, best travel period, budget indication and a
                list of main highlights.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Search & Filtering</h5>
              <p className="card-text">
                The Home page includes a search bar and a budget filter, which
                allow users to focus on destinations that match their interests
                and financial constraints. A future extension will introduce a
                detailed price range filter.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Responsive Interface</h5>
              <p className="card-text">
                The interface is built with React and Bootstrap and is designed
                to adapt to different screen sizes. This ensures that the
                application remains usable on laptops, tablets and mobile
                devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-muted">
        In a future phase, the project could be extended with user accounts,
        saved trips, and integration with external APIs for real flight and
        accommodation data.
      </p>
    </div>
  );
}

export default Features;
