import React from 'react';
import { Star } from 'lucide-react';
import './CustomerReviews.css';

const CustomerReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Maxn Raval",
            image: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
            stars: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        },
        {
            id: 2,
            name: "Venely k",
            image: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
            stars: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        },
        {
            id: 3,
            name: "Lii thakur",
            image: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
            stars: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        }
    ];

    return (
        <section className="customer-reviews">
            <h2 className="section-title">Customer Review</h2>
            <div className="reviews-container">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card glass">
                        <div className="review-header">
                            <img
                                src={`https://i.pravatar.cc/150?u=${review.id}`}
                                alt={review.name}
                                className="review-avatar-img"
                            />
                            <div className="review-meta">
                                <h4 className="review-author">{review.name}</h4>
                                <div className="review-stars">
                                    {[...Array(review.stars)].map((_, i) => (
                                        <Star key={i} size={14} fill="#FFD700" stroke="none" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="review-content">{review.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
