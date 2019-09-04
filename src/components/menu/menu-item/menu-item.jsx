import React from 'react';
import './menu-item.scss';
import { formatPrice } from '../../../data/foodData';

const MenuItem = ({item, onClick}) => {
    return (
        <div className="menuitem" style={{backgroundImage:`url(${item.img}`}} onClick={onClick}>
            <span className="menuitem_title"> {item.name} {formatPrice(item.price)} </span>
        </div>
    );
}

export default MenuItem;