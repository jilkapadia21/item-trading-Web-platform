import React from 'react';
import './Registration.css';

function Registration() {
  return (
    <div className="container flex-column justify-content-center align-items-center">
      <h2 className="text-center mb-4">Registration Form</h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="d-grid">
          <input type="submit" className="btn btn-primary" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default Registration;
