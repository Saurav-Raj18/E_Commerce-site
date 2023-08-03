import React, { createContext, useReducer } from "react";
import Cartreducer from "./Cartreducer";
const CartContext=createContext();

const Cart=({children})=>{
    
    const initialState={
        option:[]
    }
   const [state,dispatch]=useReducer(Cartreducer,initialState) 
   const AddToCart=(singleProduct,quantity)=>{
         //console.log(singleProduct)
        dispatch({type:"ADD_PRODUCT_CART",payload:{singleProduct,quantity}})
   }

   const handleRemoveCart=(id)=>{
      dispatch({type:"DELETE_CART",payload:id})
   }

    return <CartContext.Provider value={{AddToCart,...state,handleRemoveCart}}>
                {children}
           </CartContext.Provider>
}

export {CartContext,Cart};