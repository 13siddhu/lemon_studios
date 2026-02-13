import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './TopSelling.css';

const TopSelling = () => {
    const products = [
        {
            id: 1,
            title: "Calathea plant",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "Rs. 359/-",
            image: "https://imgs.search.brave.com/3idqTbE0_iY2OLi-x3m3zXTiiAabGIqayZZ4MwEy4U4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGF0Y2hwbGFudHMu/Y29tL3VwbG9hZHMv/M18yX0Fib3V0X2Nh/bGF0aGVhc19taW5f/ZGY2OWVlN2ViZC5q/cGc",
            delay: 0.1
        },
        {
            id: 2,
            title: "Rubber Plant",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "Rs. 459/-",
            image: "https://imgs.search.brave.com/41Du9lzympA7GYmjhagAhXBl4SycXiPHCc8prgDPkbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9reWFy/aS5jby9jZG4vc2hv/cC9maWxlcy9BcnRi/b2FyZF8xXzFfMTQw/NjgxM2UtZGY0Yi00/NGMxLTg4NDctYmUw/OGY3NmVhYmZkLmpw/Zz92PTE3MzM5OTkx/NzUmd2lkdGg9NDgw",
            delay: 0.2
        },
        {
            id: 3,
            title: "Peace Lily",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "Rs. 399/-",
            image: "https://imgs.search.brave.com/oAHYxpPaaLdBp5431hl80BwPB7Nq-rn_mPNDhLsihIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzQ2LzgwLzg2/LzM2MF9GXzE1NDY4/MDg2MzNfdzhMSXQ0/cmdycGdLQ0R5NkI1/OFdVMUtva1I3ampj/S1IuanBn",
            delay: 0.3
        },
        {
            id: 4,
            title: "Snake Plant",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "Rs. 259/-",
            image: "https://imgs.search.brave.com/5-80O7vbaPi006QzAUXxgN0yuAMrz5zY-DrzgnGFD8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlLmNv/bS90aG1iL3hIUnpv/Y0liS010aEw4ZEx4/ZnRoZmFJMlRmdz0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL0dl/dHR5SW1hZ2VzLTEz/ODQ1OTY1MjMxLTUw/ZTNmNDgyY2FhYjRl/ZmNhNGM2MTYxNTE1/ZjlhY2U0LmpwZw",
            delay: 0.4
        },
        {
            id: 5,
            title: "Monstera",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "Rs. 899/-",
            image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1964&auto=format&fit=crop",
            delay: 0.5
        },
        {
            id: 6,
            title: "Pothos",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "Rs. 299/-",
            image: "https://imgs.search.brave.com/ElCbsUvHziM8ShcA_hHWAJrFh6nFhwXuMTvwm9kQ5Ww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MjgvMzEwMi83Mzk1/L2ZpbGVzL2dvbGRl/bi1wb3Rob3MtdmFy/aWV0eV80ODB4NDgw/LmpwZz92PTE2NzM3/MDk2OTM",
            delay: 0.6
        }
    ];

    return (
        <section className="top-selling" id="more">
            <h2 className="section-title">Our Top Selling</h2>
            <div className="top-selling-container">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        delay={product.delay}
                    />
                ))}
            </div>
        </section>
    );
};

export default TopSelling;
