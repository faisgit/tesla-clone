import React from "react";
import ModelSSpec from "./components/ModelSSpec";

import dynamic from "next/dynamic";

const ModelSInterior = dynamic(() => import("./components/ModelSInterior"), {
  ssr: false,
});
function modelS() {
  return (
    <div>
      <div className="bg-black h-16" />
      <ModelSSpec />
      <ModelSInterior />
    </div>
  );
}

export default modelS;
