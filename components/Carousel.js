import React from 'react'
import ModelS from './sub_components/ModelS'
import Model3 from './sub_components/Model3'
import ModelY from './sub_components/ModelY'
import ModelX from './sub_components/ModelX'

function Carousel() {
  return (
    <div>
      {/* <Model3 />
      <ModelY />
      <ModelS />
      <ModelX /> */}

<div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <Model3 />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
  </div> 
 
</div>
    </div>
  )
}

export default Carousel