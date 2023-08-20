import React from "react";
import ModelXSpec from "./components/ModelXSpec";
import ModelXInterior from "./components/ModelXinterior";
import ModelXExterior from "./components/ModelXExterior";
function modelX() {
  return (
    <div>
      <ModelXSpec />
      <ModelXInterior />
      <ModelXExterior />
    </div>
  );
}

export default modelX;
