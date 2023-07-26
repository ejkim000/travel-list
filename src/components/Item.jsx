import React, { useState } from 'react';

function Item({ item, onDeleteItem, onToggleItem }) {

    const handleDelete = () => {
        onDeleteItem(item.id);
    }

    const handleToggle = () => {
        onToggleItem(item.id);
    }

    return (
        <div>
            <li>
                <input type="checkbox" onChange={handleToggle} />
                <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                    {item.quantity} {item.description}
                </span>
                <button onClick={handleDelete}> ❌ </button>
                {/* <button onClick={handleOnClick}> ❌ </button> */}
            </li>
        </div>
    )
}

export default Item;