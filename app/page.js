import React from "react";
import Model3 from "./components/Model3";
import ModelX from "./components/ModelX";
import ModelS from "./components/ModelS";

function Home() {
  return (
    <div class="h-[100vh] carousel carousel-vertical">
      <div class="carousel-item h-[100vh] ">
        <Model3 />
      </div>
      <div class="carousel-item h-[100vh]">
        <ModelX />
      </div>
      <div class="carousel-item h-[100vh]">
        <ModelS />
      </div>
    </div>
  );
}

export default Home;
