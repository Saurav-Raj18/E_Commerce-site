import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../ContextApi/ContextApi";
import { useContext } from "react";
import '../Pages/SingleProduct.css'
import { CartContext } from "../ContextApi/CartContext";
const SingleProduct = () => {
  const { id } = useParams();
  //console.log(id)
  const url = "https://api.pujakaitem.com/api/products";
  const { getSingleProduct, isSingleLoading, singleProduct } = useContext(AppContext);
  const { category, company, description, price, stars, stock, reviews, name, image } = singleProduct
  const {AddToCart,option}=useContext(CartContext)
  console.log(option)
  const [quantity,setquantity]=useState(1)
  useEffect(() => {
    getSingleProduct(`${url}?id=${id}`);
  }, []);

  if (isSingleLoading || !singleProduct) {
    return <h1>......Loading</h1>
  }
  return (
    <section className="single-product py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6 bg-white mr-2">
            <div className="mt-3 text-center">
              {
                image && image.length > 0 ? (
                  <img
                    src={singleProduct.image[0].url}
                    style={{ width: "550px", height: "600px" }}
                  />
                ) : (
                  <h1>...loading</h1>
                )
              }
            </div>
            <div className="d-flex  gap-15 mt-3 other-product-image flex-wrap">

              {
                image && image.length > 0 ? (
                  image.map((i, key) => {
                    return (
                      <div key={key}>
                        <img
                          src={i.url}
                          className="img-fluid"
                          style={{ height: "160px", width: "244px" }}
                        />
                      </div>
                    );
                  })
                ) : (<h1>...loading</h1>)
              }
            </div>
          </div>
          <div className="col-6  with-margin" style={{ backgroundColor: "white" }}>
            <h3 className="text-center mt-1">
              {name}
            </h3>
            <ul>
              <li>company: {company}</li>
              <li>category: {category}</li>
              <li>price: {price}</li>
              <li>stars: {stars}</li>
              <li>reviews: {reviews}</li>
            </ul>
            <p className="fs-5 ml-2">write a review :__________________________________</p>

            <div class="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
              <h3 class="product-heading">Quantity :</h3>
              <div class="">
                <input type="number" name="" min="1" max="10" class="form-control" style={{ width: "70px" }} onChange={(e)=>setquantity(e.target.value)}/>
                </div><div class="d-flex align-items-center gap-30 ms-5">
                <button class="button border-0" type="button" onClick={()=>AddToCart(singleProduct,quantity)}>Add to Cart</button>
                <button class="button signup">Buy It Now</button>
              </div>
            </div>

          </div>
        </div>

        <div className="p-3 mt-2 bg-white"><p>description: {description}</p></div>
      </div>


    </section>
  );
};

export default SingleProduct;
