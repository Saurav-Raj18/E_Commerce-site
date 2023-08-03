import React from 'react'

const Reducer = (state,action) => {

    switch (action.type) {
        case 'isLoading': {
          return {
             ...state,
             isLoading:true,
          };
        }

        case 'API_ALL_DATA': {
            return {
               ...state,
               isLoading:false,
               product:action.payload,
               featureProduct:action.payload.filter((i)=>{
                  return i.featured===true
                }),
            };
          }
        case 'isSingleLoading' :{
           return {
              ...state,
              isSingleLoading:true,
           }
        } 

       case 'Get_SINGLE_PRODUCT' :{
           return {
             ...state,
             isSingleLoading:false,
             singleProduct:action.payload
           }
       }

       default :
       return state
}
}

export default Reducer;