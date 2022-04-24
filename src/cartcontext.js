import { createContext, useState } from "react";

const CartContext=createContext();
 export function CartProvider({children}){
    const [items,setItems]= useState([]);
    const [total,setTotal]=useState(0);

    const addToCart= (name, price,id) => {
        setItems((prevState) => [...prevState ,{name,price,id}])
        setTotal(total => total + Number(price))
    };
     const removeDish = (i) => {
       setItems([...items.slice(0, i), ...items.slice(i+1, items.length)]);
       setTotal((total) => total - Number(items[i].price));
     };
     return( 
         <CartContext.Provider value={{items, addToCart,total,removeDish,setItems,setTotal}}>
             {children}
         </CartContext.Provider>
     )
 } 

export default CartContext;