import { useState } from 'react';

const useToppings = (defaultToppings) => {
    const [toppings, setToppings] = useState(defaultToppings || getDefaultToppings());

    const checkTopping = index => {
        const newToppingArray = [...toppings];
        newToppingArray[index].checked = !newToppingArray[index].checked;
        setToppings(newToppingArray);
    }

    return {
        toppings,
        checkTopping
    }
}

export default useToppings;

const toppingsList = [
    "Extra Cheese",
    "Pepperoni",
    "Sausage",
    "Onions",
    "Peppers",
    "Pineapple",
    "Ham",
    "Spinach",
    "Artichokes",
    "Mushrooms",
    "Anchovies"
];

const getDefaultToppings = () => toppingsList.map( item => {
    return {
        name: item,
        checked: false
    }
})