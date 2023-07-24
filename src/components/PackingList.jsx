import React from 'react';
import Item from './Item';


// function PackingList({ items, onPackedItem }) {
function PackingList({ items, onDeleteItem }) {
  return (
    <div className='list'>
        <ul>
            {items.map((item)=>(
                <Item 
                key={item.id} 
                item={item} 
                // onPackedItem={onPackedItem}
                onDeleteItem={onDeleteItem}
                />
            ))}
        </ul>
    </div>
  )
}

export default PackingList;