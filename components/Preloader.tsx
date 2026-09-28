"use client";

import React, { useEffect, useState } from "react";
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
        <div className="logo-box">
          <svg viewBox="0 0 100 100" className="logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" stroke="#d4af37" strokeWidth="2" />
            <path d="M10 10 L45 35 L45 90 L10 90 Z" fill="#111" stroke="#d4af37" strokeWidth="1" />
            <path d="M90 10 L45 35 L90 55 Z" fill="#d4af37" opacity="0.8" />
            <path d="M45 90 L90 55 L90 90 Z" fill="#000" stroke="#d4af37" strokeWidth="1" />
            <path d="M45 35 L45 90" stroke="#d4af37" strokeWidth="1" />
            <path d="M45 35 L90 55" stroke="#d4af37" strokeWidth="1" />
          </svg>
        </div>
        <div className="logo-text">
          <h1 className="title">SHAPES & SHADES</h1>
          <h2 className="subtitle">INTERIOR STUDIO</h2>
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
