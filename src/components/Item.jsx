import React, { useState } from 'react';

function Item({ item, onPackedItem }) {
    
    const handleOnClick = () => {
        onPackedItem(item.id);
    }

    return (
        <div>
            <li>
                <span style={ item.packed ? {textDecoration: 'line-through'} : {} }>
                    {item.quantity} {item.description}
                </span>
                <button onClick={handleOnClick}> ❌ </button>
            </li>
        </div>
    )
}

export default Item;