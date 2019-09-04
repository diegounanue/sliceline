import React from 'react';
import './quantityItem.scss';

const QuantityItem = ({ quantity, setQuantity, onQuantityChange }) => {
    return (
        <div className="quantity-item">
            <span className="quantity-item__title"> Quantity </span>
            <div className="quantity-item__btn" onClick={() => setQuantity(quantity - 1)}> - </div>
            <input type="text" className="quantity-item__input" onChange={ e => onQuantityChange(e) } value={quantity}/>
            <div className="quantity-item__btn" onClick={() => setQuantity(quantity + 1)}> + </div>
        </div>
    );
}

export default QuantityItem;