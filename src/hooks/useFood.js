import {useState} from 'react';

const useOpenFood = () => {
    const [openFood, setOpenFood] = useState();

    return {
        openFood,
        setOpenFood
    };
}

export default useOpenFood;