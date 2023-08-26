
import React from "react";
import ModelSSpec from "./components/ModelSSpec";
import ModelSExterior from "./components/ModelSExterior";
import ExperianceModelS from "./components/ExperianceModelS";
import ModelSInterior from "./components/ModelSInterior";
import ModelSFooter from "./components/ModelSFooter";
function modelS() {
  return (
    <div>
      <ModelSSpec />
      <ModelSInterior />
      <ModelSExterior />
      <ExperianceModelS />
      <ModelSFooter />
    </div>
  );
}

export default modelS;
