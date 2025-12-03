import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// 👇 FIX: import Vanta Birds safely
// @ts-ignore
import BIRDS from "vanta/dist/vanta.birds.min";
import logo from "../assets/we-design-logo.png";

const IntroAnimation: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const VantaBirds = (BIRDS as any).default || BIRDS; // 👈 handle default export issue

    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = VantaBirds({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,

        backgroundColor: 0x07192f,
        backgroundAlpha: 1,
        color1: 0xff6600,
        color2: 0xffffff,
        colorMode: "varianceGradient",
        quantity: 5,
        birdSize: 1,
        wingSpan: 30,
        speedLimit: 5,
        separation: 20,
        alignment: 20,
        cohesion: 20,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.3)",
          animation: "fadeInLogo 3s ease-in-out forwards 2s",
        }}
      >
        <img
          src={logo}
          alt="We Design Logo"
          style={{
            width: "250px",
            opacity: 0,
            animation: "fadeInLogo 2s ease-in-out forwards 3s",
          }}
        />
      </div>

      <style>
        {`
          @keyframes fadeInLogo {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default IntroAnimation;
