import React from "react";
import ModelXSpec from "./components/ModelXSpec";
import ModelXInterior from "./components/ModelXinterior";
import ModelXExterior from "./components/ModelXExterior";
import ExperianceModelX from "./components/ExperianceModelX";
import ModelXFooter from "./components/ModelXFooter";
function modelX() {
  return (
    <div>
      <ModelXSpec />
      <ModelXInterior />
      <ModelXExterior />
      <ExperianceModelX />
      <ModelXFooter />
    </div>
  );
}

export default modelX;
