import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
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
                <Play size={16} fill="white" stroke="none" />
              </div>
              <span>Live Demo...</span>
            </button>
          </div>

          {/* Reviewer Card (positioned relative to content in mobile, absolute in desktop) */}
          <div className="reviewer-card animate-fade-in delay-500">
            <div className="reviewer-avatar">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                alt="Alena Patel"
                className="avatar-img"
              />
            </div>
            <div className="reviewer-info">
              <h4 className="reviewer-name">Alena Patel</h4>
              <div className="review-stars-small">⭐⭐⭐⭐⭐</div>
              <p className="reviewer-text">
                Lorem ipsum dolor sit amet, consectetur...
              </p>
            </div>
          </div>
        </div>

        {/* Center - Large Plant Image */}
        <div className="hero-center animate-scale-in delay-300">
          <div className="large-plant-container">
            <div className="large-plant-image">
              {/* Image removed as per user request */}
            </div>
          </div>
        </div>

        {/* Right Side Elements */}
        <div className="hero-right">
          {/* Featured Plant Card */}
          <div className="featured-plant-card animate-slide-in-right delay-400">
            <div className="featured-plant-image animate-float">
              <img
                src="https://imgs.search.brave.com/3idqTbE0_iY2OLi-x3m3zXTiiAabGIqayZZ4MwEy4U4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGF0Y2hwbGFudHMu/Y29tL3VwbG9hZHMv/M18yX0Fib3V0X2Nh/bGF0aGVhc19taW5f/ZGY2OWVlN2ViZC5q/cGc"
                alt="Calathea Plant"
                className="featured-plant-img"
              />
            </div>
            <div className="featured-plant-info">
              <span className="plant-category">Trendy House Plant</span>
              <h3 className="plant-name">Calathea plant</h3>
              <button className="plant-cta">
                <ArrowRight size={20} />
              </button>
            </div>
            <button className="btn-buy-now">Buy Now</button>
            <div className="card-pagination">
              <span className="active-dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
