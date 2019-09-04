import React from 'react';
import './quantityItem.scss';

const QuantityItem = ({ quantity }) => {
    return (
        <div className="quantity-item">
            <span className="quantity-item__title"> Quantity </span>
            <div className="quantity-item__btn" onClick={() => {quantity.setValue(quantity.value - 1);}}> - </div>
            <input type="text" className="quantity-item__input" {...quantity} />
            <div className="quantity-item__btn" onClick={() => {quantity.setValue(quantity.value + 1);}}> + </div>
        </div>
    );
}

export default QuantityItem;