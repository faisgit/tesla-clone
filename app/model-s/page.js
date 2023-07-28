import React from "react";
import ModelSSpec from "./components/ModelSSpec";

import dynamic from "next/dynamic";
import ModelSExterior from "./components/ModelSExterior";

const ModelSInterior = dynamic(() => import("./components/ModelSInterior"), {
  ssr: false,
});
function modelS() {
  return (
    <div>
      <div className="bg-black h-16" />
      <ModelSSpec />
      <ModelSInterior />
      <ModelSExterior />
    </div>
  );
}

export default modelS;
