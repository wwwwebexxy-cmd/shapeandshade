"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Preloader.css";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if the preloader has already been shown in this session
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");
    
    if (hasSeenPreloader) {
      setShowPreloader(false);
      return;
    }

    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    // Start the exit animation after the loading line completes (2.9s)
    const startAnimationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 2900); 

    // Remove preloader from DOM after animation completes
    const removePreloaderTimer = setTimeout(() => {
      setShowPreloader(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("hasSeenPreloader", "true");
    }, 4400); // 2900ms delay + 1500ms animation

    return () => {
      clearTimeout(startAnimationTimer);
      clearTimeout(removePreloaderTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!showPreloader) return null;

  return (
    <div className={`preloader-container ${isAnimating ? "is-animating" : ""}`}>
      {/* Curtain Panels */}
      <div className="curtain curtain-left"></div>
      <div className="curtain curtain-right"></div>
      
      {/* Logo Container */}
      <div className={`preloader-content ${isAnimating ? "fade-out" : ""}`}>
        <Image
          src="/shapes-shades-logo.webp"
          alt="Shapes & Shades Interior Studio"
          width={1178}
          height={683}
          className="preloader-logo"
          sizes="(max-width: 768px) 240px, 340px"
          priority
        />
        <div className="loading-bar-container">
          <div className="loading-bar-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
