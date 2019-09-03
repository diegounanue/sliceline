import React from 'react';
import './menu-item.scss';

const MenuItem = ({name, imageUrl, onClick}) => {
    return (
        <div className="menuitem" style={{backgroundImage:`url(${imageUrl}`}} onClick={onClick}>
            <span className="menuitem_title"> {name} </span>
        </div>
    );
}

export default MenuItem;