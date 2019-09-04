import React from 'react';
import './order.scss';
import { formatPrice } from '../../data/foodData';

const Order = ({ orders }) => {
    return (
        <div className="order">
            <div className="order_title"> Your Order </div>
            <div className="order__content">
                {orders.length === 0
                    ? (<div> No orders added </div>)
                    :
                    orders.map(item => (
                        <div className="order__item">
                            <span>1</span>
                            <span>{item.name}</span>
                            <span></span>
                            <span>{formatPrice(item.price)}</span>
                        </div>
                    ))
                }
            </div>
            <div className="order__footer">
                <div className="custom_button"> add to cart</div>
            </div>
        </div>
    );
}

export default Order;