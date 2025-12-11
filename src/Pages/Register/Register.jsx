import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-6/12">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Register your account{" "}
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="your name" />

            {/* email */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="photo url" />

            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="text-center font-medium mt-5">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
