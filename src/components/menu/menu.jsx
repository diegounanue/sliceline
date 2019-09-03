import React from 'react';
import './menu.scss';
import { foods } from "../../data/foodData";
import MenuItem from './menu-item/menu-item';

const menu = ({setOpenFood}) => {
    return (
        <div>
            {
                Object.entries(foods).map(
                    ([categodyTitle, foodItems]) => {
                        console.log(foods)
                        return (
                            <div key={categodyTitle}>
                                <h3> {categodyTitle} </h3>

                                <div className="menu__list">
                                    {
                                        foodItems.map(
                                            item => <MenuItem key={item.name} name={item.name} imageUrl={item.img} onClick={() => setOpenFood(item)} />
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                )
            }
        </ div>
    );
}

export default menu;