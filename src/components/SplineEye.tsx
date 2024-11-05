import React from 'react';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="w-full h-full relative inset-0">
      <Spline
        scene="https://prod.spline.design/kOmoladhxVY4gC95/scene.splinecode"
        className='w-full h-full rounded-3xl'
      />
      <div className="absolute top-10 left-10 text-[5vw] md:text-[2vw]">
        Interaktiv 3D Model
      </div>
    </div>
  );
}
