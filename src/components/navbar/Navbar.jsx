import React from 'react';
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="navbar__logo">
                slice line <span role="img" aria-label="pizza icon"> 🍕 </span>
            </span>
        </div>
    );
}

export default Navbar;