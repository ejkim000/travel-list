import React from 'react';
import Item from './Item';


function PackingList({ initialItems }) {
  return (
    <div className='list'>
        <ul>
            {initialItems.map((item)=>(
                <Item key={item.id} item={item} />
            ))}
        </ul>
    </div>
  )
}

export default PackingList