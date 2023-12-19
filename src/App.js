import Item from './item';
import './App.css';
import Cart from './cart';
import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Start from './start';
import { useContext } from 'react'; 
import { MyContext } from './provider';
function App() {
  const { value,setValue} = useContext(MyContext);
  return (
    <>
    

<Start></Start>
{value && <Cart></Cart>}
<Item></Item>

    </>
  );
}

export default App;
