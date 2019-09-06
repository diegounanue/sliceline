import { useState } from 'react';

const useDrinks = (defaultChoise) => {
    const [value, setValue] = useState(defaultChoise);

    const onChange = e => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange
    };
}

export default useDrinks;