import React from 'react';
import './foodDialog.scss';

const foodDialog = ({ openFood, setOpenFood }) => {
    // setOpenFood to null in shadow to dismiss the modal, because it's open when there's a openFood
    return (
        openFood ? (
            <>

                <div className="dialog__shadow" onClick={() => setOpenFood()}></div>
                <div className="dialog">
                    <div className="dialog__banner" style={{ backgroundImage: `url(${openFood.img}` }}>
                        <span className="dialog__title"> {openFood.name} </span>
                    </div>
                    <div className="dialog__content"><div></div></div>
                    <div className="dialog__footer">
                        <div className="custom_button"> add to cart</div>
                    </div>
                </div>
            </>)
            : null
    );
}

export default foodDialog;