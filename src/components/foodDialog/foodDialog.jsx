import React from 'react';
import './foodDialog.scss';
import { formatPrice } from '../../data/foodData';
import useQuantity from '../../hooks/useQuantity';
import useToppings from '../../hooks/useToppings';
import useDrinks from '../../hooks/useDrinks';
import QuantityItem from './quantityItem/quantityItem';
import Toppings from './toppings/toppings';
import Drinks from './drinks/drinks';

const FoodDialogContainer = ({ openFood, setOpenFood, orders, setOrders }) => {

    // HOOKS: these hooks are initialized every time FoodDialogContainer is mounted
    // if openFood is null returns null, if both are true returns the rigth element openFoor.quantity
    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood && openFood.toppings);
    const { value, onChange } = useDrinks(openFood && openFood.drink);

    const isEditing = openFood.index > -1;

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openFood.index] = order;
        setOrders(newOrders);
        close();
    }

    const order = {
        //name: openFood.name
        // spread all properties
        ...openFood,
        // when I change the quantity with setQuantity in the child QuantityItem this component re renders updating the order constant and with it quantity
        quantity: quantity.value,
        toppings: toppings.toppings,
        drink: value
    }

    const close = () => {
        // setOpenFood to null in shadow to dismiss the modal, because it's open when there's a openFood
        setOpenFood();
    }


    const onSetOrder = () => {
        // without hooks this state should be updated in the parent element who has the states
        // to send the orders to different components like orders

        setOrders([...orders, order]);
        //quantity.setValue(1);
        close();
    }

    const hasToppings = food => {
        return food.section === "Pizza";
    }

    return (
        <>
            <div className="dialog__shadow" onClick={close}></div>
            <div className="dialog">
                <div className="dialog__banner" style={openFood.img ? { backgroundImage: `url(${openFood.img}` } : { minHeight: '75px' }}>
                    <span className="dialog__title"> {openFood.name} </span>
                </div>
                <div className="dialog__content">
                    {/* conditional rendering Toppings if the section is pizza, && renders second part if both are true, otherwise I can use
                    food.section === "pizza" ? <Toppings {...toppings} /> : null
                */}
                    {hasToppings(openFood) && (
                        <>
                            <h3> Would you like toppings? </h3>
                            <Toppings {...toppings} />
                        </>
                    )}
                    {openFood.choices ?
                        <Drinks drinks={openFood.choices} onChange={onChange} value={value} />
                        : null
                    }
                    <QuantityItem quantity={quantity} />
                </div>
                <div className="dialog__footer">
                    <div className={!value && openFood.section === 'Drinks' ? 'custom-button button-disabled' : 'custom-button'} onClick={isEditing ? editOrder : onSetOrder}>
                        {isEditing ? 'edit order' : 'add to order'}: {formatPrice(order.price * order.quantity)}
                    </div>
                </div>
            </div>
        </>
    )
}

export const FoodDialog = props => {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />;
}

export default FoodDialog;