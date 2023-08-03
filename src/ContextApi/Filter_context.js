import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ContextApi";
import Filter_reducer from "./Filter_reducer";

const FilterContext = createContext({});//creating global context for filter section

const FilterContextProvider = ({ children }) => {
    const  {product}  = useContext(AppContext);
    const initialState = {
        filter_products: [],
        all_products: [],
        gridview:true,
        sorting_val:"lowest",
        filters:{
            text: "",
        },
    }

    const [state, dispatch] = useReducer(Filter_reducer, initialState);
    //for grid or list view
    const SetGridView=()=>{
         return dispatch({
            type:"SET_GRIDVIEW"
         })
    }
   //for sorting low ,high,a-z,z-a and it will update sort_val
    const sorting=(getval)=>{
         return dispatch({
             type:"GET_SORT_VALUE",
             payload:getval

         })
    }

    //update the filter_value when user search anything in the search bar that value will get updated to text section of initial state

    const upDateFilter=(event)=>{
             let name=event.target.name;//mind why you are using name here????
             let value=event.target.value;
           //  console.log(name)
             return dispatch({
                type:"RETURN_FILTER_VALUE",
                payload:{name,value}
             })
    }

    //Categorywise sort function
    const CategorySort=(products)=>{
         dispatch({
            type:"CATEGORY_SORT",
            payload:products

         })
    }
     //for clear filter

    const clearfilter=()=>{
     return  dispatch({type:"CLEAR_FILTER",payload:state.all_products})
    } 

    //only be called when state.sroting_val it will get
    useEffect(()=>{
       
         dispatch({type:"START_SORT",payload:state.filter_products})
    },[state.sorting_val])

    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"})
    },[state.filters])

  //for loading the products
    useEffect(() => {
        dispatch(
           { type:"LOAD_FILTER_PRODUCTS",
            payload:product}
        )
    },[product])

    return (
        <FilterContext.Provider value={{...state,SetGridView,sorting,upDateFilter,CategorySort,clearfilter}}>
            {children}
        </FilterContext.Provider>
    )
}

export { FilterContext, FilterContextProvider }