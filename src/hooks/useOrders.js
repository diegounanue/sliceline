import {useState} from 'react';

const useOrders = () => {
    //get set
    const [orders, setOrders] = useState([]);

    return {
        orders,
        setOrders
    };
}

export default useOrders;