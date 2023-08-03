import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import { AppContext } from "../ContextApi/ContextApi.js";

const Home = () => {
  const apiData = useContext(AppContext);
  //  console.log(apiData);
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row ">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className="img-fluid rounded"
                  src="images/main-banner-1.jpg"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link>BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-4 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-01.jpg"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded"
                    src="images/catbanner-02.jpg"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded"
                    src="images/catbanner-03.jpg"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded w-5"
                    src="images/catbanner-04.jpg"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='home-wrapper-2 py-5'>
        <div className='containet'>
          <div className='row'>
            <div className='col-12'></div>
          </div>
        </div>
      </section> */}

      {/* <section className='home-wrapper-2 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col'>

              <div className='categories d-flex flex-wrap justify-content-between rounded p-4'>

                <div className='d-flex align-items-center gap-5'>
                  <div className='list-'>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>

                <div className='d-flex align-items-center gap-5'>
                  <div className='list-'>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>

                <div className='d-flex align-items-center gap-5'>
                  <div className='list-'>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>

                <div className='d-flex align-items-center gap-5'>
                  <div className='list-'>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>

                <div className='d-flex align-items-center gap-5'>
                  <div className='-'>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>

                <div className='d-flex align-items-center gap-5'>
                  <div className='list-'>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>


                <div className='d-flex align-items-center gap-5'>
                  <div className='list-'>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>


                <div className='d-flex align-items-center gap-5'>
                  <div className='list-'>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg"/>
                </div>

              </div>


            </div>
          </div>
        </div>
      </section> */}

      {/* <section className='home-wrapper-2 py-5'>
         <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>Our Latest Blogs</h2>
            </div>
          </div>
         </div>
      </section> */}

      {/* 
      <section className='home-wrapper-2 py-3 '>
          <div className='container'>
            <div className='row'>
              <div className='col-3 bg-white rounded'>
                <Card/>
              </div>
              <div className='col-3 bg-white'>
              <Card/>
             </div>
             <div className='col-3 bg-white'>
              <Card/>
             </div>
             <div className='col-3 bg-white'>
              <Card/>
             </div>

            </div>
          </div>
      </section> */}
      <section className="home-wrapeer-3 py-3">
        <h1 className="text-center mt-2 mb-3">Our Products</h1>
      <div className="container">
       <div className="row">
      {apiData.product.length > 0 ? (
      apiData.product.map((i, index) => {
        return (
          <div key={i.id} className="col-md-4 ml-1 mt-3 position-relative">
            <div className="d-flex flex-column align-items-center justify-content-between">
              <h5>{i.category}</h5>
              <img className="img-fluid product" src={i.image} alt={i.category} />
              <div className="position-absolute product-details">
                
               <p>₹{i.price}</p>
               <p>{i.company}</p>
               <p>{i.name}</p>
               
               <Link to={`/singleproduct/${i.id}`} className="btn btn-primary">Buy Now</Link>
              
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h1>...Loading</h1>
    )}
  </div>
  </div>
      </section>

      <section className="filter-product py-5">
          <h2 className="text-center">Our Featured Product</h2>
          <div className="feature-product d-flex gap-2 ">
            { apiData.featureProduct.map((i,key)=>{
               return(
                  <div className="p-2"><img src={i.image} className="img-fluid"/></div>
               )
            })}
          </div>
      </section>
    </>
  );
};

export default Home;
