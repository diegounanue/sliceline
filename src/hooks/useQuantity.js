import { useState } from 'react';

const useQuantity = (defaultValue) => {

    const [quantity, setQuantity] = useState(defaultValue || 1);

    const onQuantityChange = e => {
        // if the user enters a string or empty string I convert it to number +'s' returns NaN so NaN > 0 is false
        if(!+e.target.value >= 1) {
            setQuantity(1);
            console.log(quantity);
            return;
        }
        setQuantity(+e.target.value);
        console.log(quantity);
    }

    return {
        quantity,
        setQuantity,
        onQuantityChange
    }
}

export default useQuantity;