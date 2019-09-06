import React from 'react';
import './order.scss';
import { formatPrice } from '../../data/foodData';

const Order = ({ orders, setOrders, setOpenFood }) => {

    const total = orders.reduce((acumulator, order) => {
        return acumulator + order.price * order.quantity
    }, 0);

    const deleteOrder = (e, index) => {
        // I have to create a new object to re render
        e.stopPropagation();
        const newArray = [...orders];
        newArray.splice(index, 1);
        setOrders(newArray);
    }

    const editOrder = (order, index) => {
        setOpenFood({ ...order, index });
    }

    return (
        <div className="order">
            <div className="order_title"> Your Order </div>
            <div className="order__content">
                {orders.length === 0
                    ? (<div> No orders added </div>)
                    :
                    orders.map((order, index) => (
                        <div className="order__item" onClick={() => editOrder(order, index)}>
                            <div className="order__details">
                                <span>{order.quantity}</span>
                                <span>{order.name}</span>
                                <span className="order__delete" onClick={(e, index) => deleteOrder(e, index)}>🗑️</span>
                                <span>{formatPrice(order.price * order.quantity)}</span>
                            </div>
                            <div className="order__choises">
                                {order.toppings
                                    .filter(t => t.checked)
                                    .map(topping => topping.name)
                                    .join(", ")}
                            </div>
                            {order.drink && <div className="order__choises">{order.drink}</div>}
                        </div>
                    ))
                }
            </div>
            <span className="order__total"> Total: {total} </span>
            <div className="order__footer">
                <div className="custom_button"> Checkout </div>
            </div>
        </div>
    );
}

export default Order;