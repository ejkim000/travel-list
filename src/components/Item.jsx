import React, { useState } from 'react';

// function Item({ item, onPackedItem }) {
function Item({ item, onDeleteItem }) {

    // const handleOnClick = () => {
    //     onPackedItem(item.id);
    // }

    const handleDelete = () => {
        onDeleteItem(item.id);
    }

    return (
        <div>
            <li>
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