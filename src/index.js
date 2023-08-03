import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AppProvider} from './ContextApi/ContextApi';
import { FilterContextProvider } from './ContextApi/Filter_context';
import { Cart } from './ContextApi/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <AppProvider>
   <FilterContextProvider>
    <Cart>
    <App />
    </Cart>
    </FilterContextProvider>
  </AppProvider>
  </>
);

