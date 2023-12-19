// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState(false);
const [arr,setarr]=useState([])
 const [cart,setcart]=useState([]);
const [total,settotal]=useState(0);
const [len,setlength]=useState(0);
  return (
    <MyContext.Provider value={{ value, setValue,arr,setarr,cart,setcart,total,settotal,len,setlength }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
