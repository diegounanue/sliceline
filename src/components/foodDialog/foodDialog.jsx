import React from 'react';
import './foodDialog.scss';
import { formatPrice } from '../../data/foodData';

const foodDialog = ({ openFood, setOpenFood, orders, setOrders }) => {
    // setOpenFood to null in shadow to dismiss the modal, because it's open when there's a openFood

    if (!openFood) return null;

    const order = {
        //name: openFood.name
        // spread all properties
        ...openFood
    }

    const close = () => {
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
                <div className="dialog__content"></div>
                <div className="dialog__footer">
                    <div className="custom-button" onClick={onSetOrder}> add to order: {formatPrice(openFood.price)}</div>
                </div>
            </div>
        </>
    )
}

export default foodDialog;