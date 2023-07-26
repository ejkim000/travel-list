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

  const handleAddItems = (item) => {

    setItems([
      ...items,
      item
    ]);

  };

  const handleDeleteItem = (id) => {
    // filter out the id that matchs the object id
    setItems(items.filter(item => item.id !== id));
  }

  const handleToggleItem = (id) => {
    setItems((items) => items.map((item) => item.id === id ? {
      ...item,
      packed: !item.packed
    } : item ));
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  )
}

export default App;
