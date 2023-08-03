import React from 'react'


const Cartreducer = (state, action) => {
    // switch (action.type) {
    //     case 'ADD_PRODUCT_CART':
    //         return {
    //             ...state,
    //             option: [...state.option, action.payload]
    //         }
    // }

    switch (action.type) {
        case "ADD_PRODUCT_CART":
            const { singleProduct, quantity } = action.payload;
            //  console.log(singleProduct)
            // console.log(action.payload)
            const itemexist = state.option.findIndex((item) => {
                return item.singleProduct.id === singleProduct.id
            })

            if (itemexist === -1) {
                const newprodct = {
                    singleProduct,
                    quantity
                }
                return {
                    option: [...state.option, newprodct]
                }
            }
        case 'DELETE_CART':
            const updatedOption = state.option.filter(
                (item) => item.singleProduct.id !== action.payload
            );

            return {
                ...state,
                option: updatedOption,
            };
        //   var prd=state.option
        //   var getprdctremoved=prd.map(item=>{
        //        const {singleProduct,quantity}=item;
        //        return singleProduct.id!==action.payload
        //   })
        //   const newprodct={
        //     getprdctremoved,
        //     quantity
        //   }
        //   return {
        //     option:[...state.option,newprodct]

        //   }

        default:
            return state;
    }
}

export default Cartreducer
