import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ title, description, price, image, delay = 0 }) => {
  return (
    <div className="product-card animate-scale-in" style={{ animationDelay: `${delay}s` }}>
      <div className="product-image">
        <img src={image} alt={title} className="plant-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">{price}</span>
          <div className="product-actions">
            <button className="btn-add-cart" aria-label="Add to cart">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
      <button className="btn-buy">Buy Now</button>
    </div>
  );
};

export default ProductCard;
