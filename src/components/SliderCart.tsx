"use client";

import React, { useState } from 'react';
import CartItem from './CartItem';
import './SliderCart.css';

const SliderCart: React.FC = () => {

    const items = [
        {
            product_name: 'Donut',
            image: '/donat.jpg',
            badge: '',
            description: 'Varian Meises, Keju, Matcha, Tiramisu, Oreo, Strawberry',
            price: 'Rp 5.000',
        },
        {
            product_name: 'Crombolona',
            image: 'crombolona.jpg',
            badge: '',
            description: 'Varian Cokelat, Tiramisu, Cream, Strawberry',
            price: 'Rp 8.000',
        },
        {
            product_name: 'Risol',
            image: 'risol.webp',
            badge: '',
            description: 'Varian Sayur, Bihun, Sosis dan Keju, Mayo',
            price: 'Rp 5.000',
        },
    ];

    return (
        <div className="container-food-card">
            <h2 className="h2">Aneka Jajanan</h2>
            <div className="conteiner-food">
                <button className="slider-button left" >❮</button>
                <div className="slider-wrapper" >
                    <div className="slider-container">
                        {items.map((item, index) => (
                            <CartItem
                                key={index}
                                product_name={item.product_name}
                                image={item.image}
                                badge={item.badge}
                                description={item.description}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
                <button className="slider-button right" >❯</button>
            </div>
        </div>
    );
}
export default SliderCart