import React from 'react';
import './menu.scss';
import { foodItems } from "../../data/foodData";
import MenuItem from './menu-item/menu-item';

const menu = () => {
    return (
        <div className="menu">
            <div className="menu__list">
                {
                    foodItems.map(
                        item => <MenuItem name={item.name} imageUrl={item.img} />
                    )
                }
            </div>

        </div>
    );
}

export default menu;