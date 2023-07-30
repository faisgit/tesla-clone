"use client";
import React from "react";
import ModelSSpec from "./components/ModelSSpec";
import ModelSExterior from "./components/ModelSExterior";
import ExperianceModelS from "./components/ExperianceModelS";
import ModelSInterior from "./components/ModelSInterior";
import { useEffect } from "react";
import ModelSFooter from "./components/ModelSFooter";
function modelS() {
  useEffect(() => {
    const init = async () => {
      const { Animate, initTE } = await import("tw-elements");
      initTE({ Animate });
    };
    init();
  }, []);
  return (
    <div>
      <div className="bg-black h-16" />
      <ModelSSpec />
      <ModelSInterior />
      <ModelSExterior />
      <ExperianceModelS />
      <ModelSFooter />
    </div>
  );
}

export default modelS;
