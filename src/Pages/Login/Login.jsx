import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Providers/AuthProvider/AuthContext";

const Login = () => {

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  // all stats
  const [error, setError] = useState("")

  // import the signIn function
  const {singInUser} = use(AuthContext)

  // sign handler
  const handleSignUser = (e)=>{

    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password);

    // call the signIn function
    singInUser(email, password)
    .then(result =>{
      console.log(result);
      alert("user logged in successfully")
      navigate("/")
    }).catch(error => {
      setError(error.code);
    })
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen w-6/12">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Login your account{" "}
        </h2>
        <div className="card-body">
          <form onSubmit={handleSignUser} className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {
              error && <p className="text-red-400 text-sm">{error}</p>
            }
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="text-center font-medium mt-5">Don’t Have An Account ? <Link to="/auth/register" className="text-secondary underline">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
