import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import Reducer from "./Reducer";

const AppContext = createContext();//all comes under Appcontext
const initialstate=
  {
     isLoading:false,
     isError:false,
     product:[],
     featureProduct:[],
     isSingleLoading:false,
     singleProduct:{},
  }


 const AppProvider = ({ children }) => {
  //const [GetProduct,SetGetProduct]=useState([])
  const [state,dispatch]=useReducer(Reducer,initialstate);
  
  
  useEffect(() => {
    dispatch({type:"isLoading"})
    const FetchApi = async () => {
      const response = await axios.get(
        "https://api.pujakaitem.com/api/products"
      );
      // console.log(response);
      //SetGetProduct(response.data)
      dispatch({
        type:"API_ALL_DATA",
        payload:response.data,
    })
  
    };
     FetchApi();
  },[]);


  const getSingleProduct=async(url)=>{
      dispatch(
        {type:"isSingleLoading"}
      )
       try {
          const result=await axios.get(url);
          // console.log(result)
          dispatch({type:"Get_SINGLE_PRODUCT" ,payload:result.data})
       } 
       catch (error) {
          console.log(error)
       }    
  }


   //console.log(state.product)
   //same key not reuqired ...imp {Mystate:state,Myproduct:state.product}

  return (<AppContext.Provider value={{...state,getSingleProduct}}> 
           {children}
         </AppContext.Provider>)
};
export {AppProvider,AppContext}

//  const API="https://api.pujakaitem.com/api/products"
// var response={};
// const [arr,setarr]=useState([]);
// const fetchAPI=async(url)=>{
//      response=await axios.get(url);
//      setarr(response.data)
// }

// useEffect(()=>{
//     fetchAPI(API);
//  },[])
