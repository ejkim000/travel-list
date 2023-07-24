import React from 'react';

function Stats({ totalItems, packedTotal }) {
  
  return (
    <footer className='stats'>
        <em>🧳You have {totalItems} items on your list, and you have alreadt packed {packedTotal} ({(packedTotal/totalItems * 100).toFixed(0)} %)</em>
    </footer>
  )
}

export default Stats;