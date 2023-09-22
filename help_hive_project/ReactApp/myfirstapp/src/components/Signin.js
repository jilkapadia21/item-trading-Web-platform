import React from "react";

function SignIn() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center ">
      <h2 className="text-center mb-4">Sign In</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-success btn-block"
            value="Sign In"
          />
        </div>
      </form>
      <p className="text-center">
        Don't have an account? <a href="Registration.html">Register Now</a>
      </p>
    </div>
  );
}

export default SignIn;


