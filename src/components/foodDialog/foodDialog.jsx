import React from 'react';
import './foodDialog.scss';
import { formatPrice } from '../../data/foodData';
import useQuantity from '../../hooks/useQuantity';
import QuantityItem from './quantityItem/quantityItem';

const FoodDialog = ({ openFood, setOpenFood, orders, setOrders }) => {

    // if openFood is null returns null, if both are true returns the rigth element openFoor.quantity
    const quantity = useQuantity(openFood && openFood.quantity);

    if (!openFood) return null;

    const order = {
        //name: openFood.name
        // spread all properties
        ...openFood,
        // when I change the quantity with setQuantity in the child QuantityItem this component re renders updating the order constant
        quantity: quantity.quantity
    }

    const close = () => {
        // setOpenFood to null in shadow to dismiss the modal, because it's open when there's a openFood
        setOpenFood();
    }


    const onSetOrder = () => {
        // without hooks this state should be updated in the parent element who has the states
        // to send the orders to different components like orders

        setOrders([...orders, order]);
    }

    return (
        <>
            <div className="dialog__shadow" onClick={close}></div>
            <div className="dialog">
                <div className="dialog__banner" style={{ backgroundImage: `url(${openFood.img}` }}>
                    <span className="dialog__title"> {openFood.name} </span>
                </div>
                <div className="dialog__content">
                    <QuantityItem {...quantity} />
                </div>
                <div className="dialog__footer">
                    <div className="custom-button" onClick={onSetOrder}> add to order: {formatPrice(order.price * order.quantity )}</div>
                </div>
            </div>
        </>
    )
}

export default FoodDialog;