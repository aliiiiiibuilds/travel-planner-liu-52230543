import React from "react";

function About() {
  return (
    <div className="col-md-8 mx-auto">
      <h1 className="mb-3">About TravelBuddy</h1>
      <p>
        TravelBuddy is a small travel planning web application developed as part
        of the course <strong>CSCI426 – Advanced Web Programming</strong>. The
        main objective of the system is to demonstrate how ReactJS can be used
        to build a responsive, component-based user interface that solves a
        simple real-world problem.
      </p>
      <p>
        The application focuses on a limited set of destinations and presents
        key information such as a short description, best time to visit, budget
        level and main highlights. Users can quickly browse the list, apply
        filters, and open a dedicated page for each destination.
      </p>
      <p>
        From a learning perspective, TravelBuddy illustrates frontend concepts
        such as routing, state management, props, reusable components and
        styling with Bootstrap. The project also encourages good development
        practices such as version control with Git and deployment to a public
        hosting platform.
      </p>
    </div>
  );
}

export default About;
