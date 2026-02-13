import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BestO2.css';

const BestO2 = () => {
    return (
        <section className="best-o2">
            <div className="best-o2-card glass">
                <div className="best-o2-image">
                    <img
                        src="https://imgs.search.brave.com/3idqTbE0_iY2OLi-x3m3zXTiiAabGIqayZZ4MwEy4U4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGF0Y2hwbGFudHMu/Y29tL3VwbG9hZHMv/M18yX0Fib3V0X2Nh/bGF0aGVhc19taW5f/ZGY2OWVlN2ViZC5q/cGc"
                        alt="Best O2 Plants"
                        className="best-o2-img"
                    />
                </div>
                <div className="best-o2-content">
                    <h2 className="best-o2-title">We Have Small And Best O2 Plants Collection's</h2>
                    <p className="best-o2-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <p className="best-o2-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="best-o2-footer">
                        <button className="btn-explore">Explore</button>
                        <div className="best-o2-pagination">
                            <button className="nav-arrow"><ChevronLeft size={20} /></button>
                            <span className="page-number">01/04</span>
                            <button className="nav-arrow"><ChevronRight size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestO2;
