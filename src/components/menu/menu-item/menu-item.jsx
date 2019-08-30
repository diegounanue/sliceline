import React from 'react';
import './menu-item.scss';

const MenuItem = ({name, imageUrl}) => {
    return (
        <div className="menuitem" style={{backgroundImage:`url(${imageUrl}`}}>
            <span className="menuitem_title"> {name} </span>
        </div>
    );
}

export default MenuItem;