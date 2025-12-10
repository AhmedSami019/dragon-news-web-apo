import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Login with</h2>
      <div className="grid grid-cols-1 mt-5 gap-2">
        <button className="btn btn-outline btn-secondary">
            <FcGoogle size={24}></FcGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline btn-primary">
            <FaGithub size={24}></FaGithub>
          Login with github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
