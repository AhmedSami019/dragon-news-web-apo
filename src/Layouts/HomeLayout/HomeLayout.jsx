import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import Navbar from "../../Components/Navbar/Navbar";
import LeftAside from "../../Components/HomeLayoutsComponents/LeftAside/LeftAside";
import RightAside from "../../Components/HomeLayoutsComponents/RightAside/RightAside";

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
        {/* this is top navbar section */}
        <nav className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      
      {/* this is main section9o of app */}
      <main className="w-11/12 mx-auto my-4 grid grid-cols-12 gap-5 ">
        <aside className="col-span-3 h-fit sticky top-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 h-fit sticky top-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
