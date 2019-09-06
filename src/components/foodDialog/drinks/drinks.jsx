import React from 'react';

const drinks = ({ drinks, onChange, value }) => {
    return (
        <div className="drinks">
            {
                drinks.map(drink =>
                    <div key={drink}>
                        <input
                            type="radio"
                            name={drink}
                            value={drink}
                            checked={drink === value}
                            onChange={onChange}
                        />
                        <label for="huey">{drink}</label>
                    </div>
                )}
        </div>)
}

export default drinks;