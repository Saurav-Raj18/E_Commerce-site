import React from 'react'

const Filter_reducer = (state, action) => {
    
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
               ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload,]
            };

        case "SET_GRIDVIEW":
             return {
                ...state,
                gridview: !state.gridview,
             }    

        case "GET_SORT_VALUE":
          
            console.log(action.payload)
            return{
                ...state,
                  sorting_val:action.payload,
            } 
            
        case "START_SORT":
            let sortNewData;
            let tempNewProduct=[...action.payload];

        if (state.sorting_val === "a-z") {
            sortNewData = tempNewProduct.sort((a, b) => {
              const nameA = String(a.name).toLowerCase();
              const nameB = String(b.name).toLowerCase();
              return nameA.localeCompare(nameB);
            });
          }

          if (state.sorting_val === "z-a") {
            sortNewData = tempNewProduct.sort((a, b) => {
              const nameA = String(a.name).toLowerCase();
              const nameB = String(b.name).toLowerCase();
              return nameB.localeCompare(nameA);
            });
          }

          if(state.sorting_val==="lowest"){
             const compareprdct=(a,b)=>{
              return   a.price-b.price;
             }
             sortNewData=tempNewProduct.sort(compareprdct)
          }

          if(state.sorting_val==="highest"){
            const compareprdct=(a,b)=>{
             return   b.price-a.price;
            }
            sortNewData=tempNewProduct.sort(compareprdct)
         }
            return{
                ...state,
                filter_products:sortNewData
            }
            
        case 'RETURN_FILTER_VALUE' :
            const {name,value}=action.payload
            //  console.log(value)
            //  console.log(name)
            return {
                 
               ...state,
                 filters: {
                    ...state.filters,
                     text: value,
                  },
            }  
            
        case 'FILTER_PRODUCTS' :
            let {all_products}=state
            //console.log(all_products)
            let tempFilterProduct=[...all_products]
           const {text}=state.filters
                
           if (text) {
            tempFilterProduct = tempFilterProduct.filter((currEle) =>
               currEle.name.toLowerCase().includes(text.toLowerCase())
            );
           }          
            console.log(tempFilterProduct)
        return{
            ...state,
            filter_products:tempFilterProduct
        }
        

        case 'CATEGORY_SORT':
             var prdcts=state.all_products
             //const filteredProducts = state.all_products.filter(product => product.category.includes(action.payload));
             var filtereprdt=prdcts.filter(product => product.category.includes(action.payload));
              

             return {
                ...state,
                filter_products:filtereprdt
             }
    
        case "CLEAR_FILTER" :
          
          return {
            ...state,
            filter_products:action.payload
         }

        default:
            return state;
    }
}

export default Filter_reducer
