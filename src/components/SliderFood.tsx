"use client";

import CartItem from './CartItem';
import './SliderCart.css';

const SliderFood: React.FC = () => {

    const items = [
        {
            product_name: 'Ayam Geprek',
            image: '/ayam_geprek.jpg',
            badge: '',
            description: '',
            price: 'Rp 15.000',
        },
        {
            product_name: 'Bakso',
            image: 'bakso.jpg',
            badge: '',
            description: '',
            price: 'Rp 10.000',
        },
        {
            product_name: 'Opor Ayam',
            image: 'opor.jpg',
            badge: '',
            description: '',
            price: 'Rp 10.000',
        },


    ];


    return (
        <div >
            <h2 className="h2">Aneka Makanan</h2>
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
export default SliderFood