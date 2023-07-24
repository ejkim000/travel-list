import React from 'react'

function Item({ item }) {
    return (
        <div>
            <li>
                <span>
                    {item.quantity} {item.description}
                </span>
                <button> ❌ </button>
            </li>
        </div>
    )
}

export default Item