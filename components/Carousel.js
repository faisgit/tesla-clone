import React from "react";
import ModelS from "./sub_components/ModelS";
import Model3 from "./sub_components/Model3";
import ModelY from "./sub_components/ModelY";
import ModelX from "./sub_components/ModelX";
import Solarpanels from "./sub_components/Solarpanels";
import Solarroof from "./sub_components/Solarroof";
import Powerwall from "./sub_components/Powerwall";
import Desktopacessories from "./sub_components/Desktopacessories";

function Carousel() {
  return (
    <div class="h-[100vh] carousel carousel-vertical">
      
    <div class="carousel-item h-[100vh] ">
      <Model3 />
    </div>
    <div class="carousel-item h-[100vh]">
      <ModelY />
    </div>
    <div class="carousel-item h-[100vh]">
     <ModelX />
    </div>
    <div class="carousel-item h-[100vh]">
      <ModelS />
    </div>
    <div class="carousel-item h-[100vh]">
      <Solarpanels />
    </div>
    <div class="carousel-item h-[100vh]">
      <Solarroof />
    </div>
    <div class="carousel-item h-[100vh]">
      <Powerwall />
    </div>
    <div class="carousel-item h-[100vh]">
      <Desktopacessories />
    </div>

  </div>
  );
}

export default Carousel;
