import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import './TrendyPlants.css';

const TrendyPlants = () => {
  return (
    <section className="trendy-plants" id="plant-types">
      <h2 className="section-title">Our Trendy plants</h2>
      <div className="trendy-container">
        {/* Card 1 */}
        <div className="trendy-card">
          <div className="trendy-content">
            <div className="trendy-image-wrapper">
              <img
                src="https://imgs.search.brave.com/xOBqXfnF50Z_562_cPLf-2PUTd3h-aZDhGgGKw4Bpkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFRdE0xYnlHcUwu/anBn"
                alt="Small Desk Plant"
                className="trendy-img"
              />
            </div>
            <div className="trendy-info">
              <h3>For Small Desk Ai Plat</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <div className="trendy-price">Rs. 599/-</div>
              <div className="trendy-actions">
                <button className="btn-explore">Explore</button>
                <button className="btn-bag">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="trendy-card">
          <div className="trendy-content">
            <div className="trendy-image-wrapper">
              <img
                src="https://imgs.search.brave.com/LSJmoJcwvTpgEjQVM31KO7yhg-FXvliIz_4Yvr58O2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9uZW9uLXBsYW50/LWdyb3dpbmctZGFy/ay1zdG9ybXktc2t5/LW5pZ2h0LXNjZW5l/LWNyZWF0ZWQtd2l0/aC1nZW5lcmF0aXZl/LWFpXzEyNDUwNy0x/OTY2ODUuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw"
                alt="Fresh Decs Plant"
                className="trendy-img"
              />
            </div>
            <div className="trendy-info">
              <h3>For Fresh Deck Ai Plat</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <div className="trendy-price">Rs. 579/-</div>
              <div className="trendy-actions">
                <button className="btn-explore">Explore</button>
                <button className="btn-bag">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendyPlants;
