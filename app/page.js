import React from 'react'
import Model3 from './components/Model3'
import ModelY from './components/ModelY'
import ModelX from './components/ModelX'
import ModelS from './components/ModelS'
import Solarpanels from './components/Solarpanels'
import Solarroof from './components/Solarroof'
import Powerwall from './components/Powerwall'
import Desktopacessories from './components/Desktopacessories'

function Home() {
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
  )
}

export default Home