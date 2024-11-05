import React from "react";

import FadeIn from "../components/FadeIn";
import OdinRender from "../components/OdinRender"
import SplineEye from "../components/SplineEye"
import Comparison from "@/components/Comparison";
import AllRender from "@/components/AllRenders";
import Intro from "@/components/Intro";

export default function Home() {

  return (
    <div className="w-[100vw] overflow-y-hidden">
      <FadeIn delay={0}>
        <div className="w-[100vw] h-[100vh]">
          <Intro />
        </div>
      </FadeIn>

      <FadeIn delay={0}>
        <div className="w-[100vw] h-[100vh] p-5">
            <SplineEye />
        </div>
      </FadeIn>

      <FadeIn delay={0}>
        <div className="w-[100vw] h-[100vh] px-5">
          <OdinRender />
        </div>
      </FadeIn>

      <FadeIn delay={0}>        
        <div className="w-[100vw] md:h-[100vw] p-5">
          <AllRender /> 
        </div>
      </FadeIn>

      <FadeIn delay={0}>        
        <div className="w-[100vw] h-[100vh] p-5">
            <Comparison />
        </div>
      </FadeIn>
    </div>
  );
};