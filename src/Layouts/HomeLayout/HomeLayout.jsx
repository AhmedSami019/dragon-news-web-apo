import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";

const HomeLayout = () => {
  return (
    <div>
        {/* this is header section of app */}
      <header>
        {" "}
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
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
