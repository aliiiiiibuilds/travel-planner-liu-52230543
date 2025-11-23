import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your message. This is a demo form and no data is actually sent to a server."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="mb-3">Contact</h1>
      <p className="text-muted">
        This contact form is provided for demonstration purposes only. In a
        production environment, this section could be connected to a backend
        service or an email provider to receive real feedback from users.
      </p>

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Send (demo)
        </button>
      </form>
    </div>
  );
}

export default Contact;
