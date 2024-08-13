import React from 'react';
import './CartItem.css';

interface CartItemProps {
    product_name: string;
    image: string;
    badge: string;
    description: string;
    price: string;
}

const CartItem: React.FC<CartItemProps> = ({ product_name, image, badge, description, price }) => {
    return (
        <div className="product-card">
            <div className="product-tumb">
                <img src={image} alt={product_name} />
            </div>
            {/* <div className="badge">{badge}</div> */}
            <div className="product-details">
                <span className="product-catagory">{product_name}</span>
                <p>{description}</p>
            </div>
            <div className="product-price">{price}</div>
        </div>

    );
}
export default CartItem;