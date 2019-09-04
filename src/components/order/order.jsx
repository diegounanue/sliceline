import React from 'react';
import './order.scss';
import { formatPrice } from '../../data/foodData';

const Order = ({ orders }) => {

    const total = orders.reduce((acumulator, order) => {
        return acumulator + order.price * order.quantity
    }, 0);

    //const toppings = item.toppings.filter(t => t.checked).map(t => t.name).join(", ");

    return (
        <div className="order">
            <div className="order_title"> Your Order </div>
            <div className="order__content">
                {orders.length === 0
                    ? (<div> No orders added </div>)
                    :
                    orders.map(item => (
                        <>
                            <div className="order__item">
                                <span>{item.quantity}</span>
                                <span>{item.name}</span>
                                <span></span>
                                <span>{formatPrice(item.price * item.quantity)}</span>
                            </div>
                            <div className="order__topping">
                                {item.toppings
                                    .filter(t => t.checked)
                                    .map(topping => topping.name)
                                    .join(", ")}
                            </div>
                        </>
                    ))
                }
            </div>
            <span> {total} </span>
            <div className="order__footer">
                <div className="custom_button"> add to cart</div>
            </div>
        </div>
    );
}

export default Order;