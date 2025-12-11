import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindOnUs = () => {
  return (
    <div>
      <h2 className="font-semibold text-lg  mb-5">Find On Us</h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item justify-start"><FaFacebook size={18}/>Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter size={18}/>twitter</button>
        <button className="btn join-item justify-start"><FaInstagram size={18}/>Instagram</button>
      </div>
    </div>
  );
};

export default FindOnUs;
