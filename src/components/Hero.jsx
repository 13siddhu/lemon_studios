import React from 'react';
import { Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up">
            Breath Natural
          </h1>
          <p className="hero-description animate-fade-in-up delay-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hero-buttons animate-fade-in-up delay-200">
            <button className="btn-primary">Explore</button>
            <button className="btn-play">
              <div className="play-icon">
                <Play size={16} fill="white" />
              </div>
              <span>Live Demo</span>
            </button>
          </div>
        </div>

        {/* Center - Large Plant Image */}
        <div className="hero-center animate-scale-in delay-300">
          <div className="large-plant-container">
            <div className="large-plant-image">
              {/* Placeholder for large plant */}
              <div className="plant-placeholder large"></div>
            </div>
            <div className="plant-label">Our Trendy plants</div>
          </div>
        </div>

        {/* Right Side Elements */}
        <div className="hero-right">
          {/* Featured Plant Card */}
          <div className="featured-plant-card animate-slide-in-right delay-400">
            <div className="featured-plant-image animate-float">
              <div className="plant-placeholder small"></div>
            </div>
            <div className="featured-plant-info">
              <span className="plant-category">Trendy House Plant</span>
              <h3 className="plant-name">Calathea plant</h3>
              <button className="plant-cta">
                <span>→</span>
              </button>
            </div>
            <button className="btn-buy-now">Buy Now</button>
          </div>
        </div>

        {/* Reviewer Card */}
        <div className="reviewer-card animate-fade-in delay-500">
          <div className="reviewer-avatar">
            <div className="avatar-placeholder"></div>
          </div>
          <div className="reviewer-info">
            <h4 className="reviewer-name">Alena Patel</h4>
            <p className="reviewer-title">Trusted Reviewer</p>
            <p className="reviewer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
