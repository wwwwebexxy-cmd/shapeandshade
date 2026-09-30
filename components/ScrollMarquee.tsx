"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ScrollMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textRef.current || !containerRef.current) return;

      // Animate the text leftwards on scroll
      gsap.to(textRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // when the top of the container hits the bottom of the viewport
          end: "bottom top", // when the bottom of the container hits the top of the viewport
          scrub: 1, // smooth scrubbing with 1 second delay
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-12 md:py-24 2xl:py-32 flex items-center border-y"
      style={{ borderColor: 'var(--card-border)' }}
    >
      <div
        ref={textRef}
        className="flex whitespace-nowrap font-black text-[15vw] uppercase leading-none tracking-tighter text-transparent"
        style={{
          width: "fit-content",
          WebkitTextStroke: "2px var(--primary)",
        }}
      >
        <span className="pr-8 md:pr-16 lg:pr-24 2xl:pr-32">SHAPING SPACES • SHADING LIVES • INTERIOR DESIGN • CUSTOM FURNITURE • JOINERY • </span>
        <span className="pr-8 md:pr-16 lg:pr-24 2xl:pr-32">SHAPING SPACES • SHADING LIVES • INTERIOR DESIGN • CUSTOM FURNITURE • JOINERY • </span>
      </div>
    </div>
  );
};

export default ScrollMarquee;
