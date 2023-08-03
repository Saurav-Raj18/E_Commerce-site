import React, { useContext } from 'react'
import { CartContext } from '../ContextApi/CartContext'
import './AddCart.css'
import { Link } from 'react-router-dom'
const AddCart = () => {
    const { option,handleRemoveCart } = useContext(CartContext)
    console.log(option)
    // Calculate total price reduce funtion to calculate total
    const totalPrice = option.reduce((total, item) => {
        const { singleProduct, quantity } = item;
        return total + singleProduct.price * quantity;
    }, 0);
    return (
        <section className='cart py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        {option.length > 0 && option.map((item, index) => {
                            const { singleProduct, quantity } = item;
                            return (
                                <div key={index} className='bg-white mt-3 p-2'>
                                    <img src={singleProduct.image[0].url} style={{ height: "160px", width: "244px" }}></img>
                                    <h1>{singleProduct.name}</h1>
                                    <p>Quantity: {quantity}</p>
                                    <p>Price: {singleProduct.price*quantity}</p>
                                    <p>description:{singleProduct.description}</p>
                                    <button className='btn btn-primary' onClick={()=>handleRemoveCart(singleProduct.id)}>Remove From Cart</button>
                                </div>
                            );
                        })}
                       {totalPrice>0?(
                       
                       <div className='d-flex align-items-center justify-content-between mt-5 bg-white p-4'>
                       <p className=' fs-5'>Total Price:{totalPrice}</p>
                      <Link to="payment"> <button className='btn btn-primary' >BUY NOW</button></Link>
                       </div>
                       
                       
                       ):(<h3 className='text-center pt-5 pb-5'>Your Cart Empty</h3>)} 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddCart
