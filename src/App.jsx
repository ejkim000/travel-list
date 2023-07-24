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


  return (
    <>
     <Logo />
     <Form />
     <PackingList initialItems={initialItems}/>
     <Stats />
    </>
  )
}

export default App;