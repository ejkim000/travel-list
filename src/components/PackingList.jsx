import React from 'react';
import Item from './Item';


function PackingList({ items, onPackedItem }) {

  return (
    <div className='list'>
        <ul>
            {items.map((item)=>(
                <Item 
                key={item.id} 
                item={item} 
                onPackedItem={onPackedItem}
                />
            ))}
        </ul>
    </div>
  )
}

export default PackingList