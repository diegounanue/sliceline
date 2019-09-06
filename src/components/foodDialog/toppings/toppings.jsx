import React from 'react';
import './toppings.scss';

const Toppings = ({ toppings, checkTopping }) => {
    return (
        <div className="toppings">
            {
                toppings.map((topping, i) => {
                    return <div>
                        <input type="checkbox" name="vehicle1" value={topping.checked} checked={topping.checked} onClick={() => checkTopping(i)} /> <span> {topping.name} </span>
                    </div >
                })}
        </div>
    );
}

export default Toppings;