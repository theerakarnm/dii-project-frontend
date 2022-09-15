import React from "react";

import Navbar from "../components/Navbar";

import Homeform from "../components/Homeform";

const Home = () => {
  return (
    <>
      <Navbar nameWhichActive={"Home"} />
      <Homeform />
    </>
  );
};

export default Home;
