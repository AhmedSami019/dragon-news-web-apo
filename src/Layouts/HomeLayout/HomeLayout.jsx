import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";

const HomeLayout = () => {
  return (
    <div>
        {/* this is header section of app */}
      <header>
        {" "}
        <Header></Header>
      </header>
      {/* this is main section9o of app */}
      <main>
        <section className="left-nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
