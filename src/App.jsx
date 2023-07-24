import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


function App() {

  // For lifting up state from Form
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [packedTotal, setPackedTotal] = useState(0);


  const handleAddItems = (item) => {

    setItems([
      ...items,
      item
    ]);

    setTotalItems(prev => prev + 1);
  };

  const handlePackedItem = (id) => {

    setPackedTotal(0);

    items.map((item) => {

      if (item.id === id) {
        item.packed = !item.packed
      }

      if (item.packed) setPackedTotal(prev => prev + 1);

    });

    setItems(items);

  };


  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList 
      items={items} 
      onPackedItem={handlePackedItem}
      />
      <Stats totalItems={totalItems} packedTotal={packedTotal} />
    </div>
  )
}

export default App;
