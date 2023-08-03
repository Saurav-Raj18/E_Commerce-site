import React from "react";
import "./OurStore.css";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { AppContext } from "../ContextApi/ContextApi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FilterContext } from "../ContextApi/Filter_context";

const OurStore = () => {
  const {
    filter_products,
    SetGridView,
    gridview,
    sorting,
    all_products,
    CategorySort,
    clearfilter,
  } = useContext(FilterContext);

  //for getting category of all products making fucntion
  //onst uniqueArray = [...new Set(array)];
  const getCategory = (all_products) => {
    return all_products.map((currInd) => currInd.category);
  };

  var allUniqueCategory = getCategory(all_products);
  allUniqueCategory = ["All", ...new Set(allUniqueCategory)]; //for getting unique value form array

  return (
    <section className="our-products py-5">
      <div className="container">
        <div className="row gap-5">
          <div className="col-3 left">
            <div>
              <p>Category</p>
              {allUniqueCategory.map((currEle, id) => {
                return (
                  <p>
                    <button
                      style={{ backgroundColor: "none" }}
                      type="button"
                      onClick={() => CategorySort(currEle)}
                    >
                      {currEle}
                    </button>
                  </p> //callback function for currEle
                );
              })}
              <p>
                <button className="btn btn-primary" onClick={clearfilter}>
                  Clear_filter
                </button>
              </p>

              {/* <p>Mobile</p>
                            <p>Laptop</p>
                            <p>Computer</p>
                            <p>Accesories</p>
                            <p>watch</p> */}
            </div>
          </div>

          <div className="col-8 ml-3">
            <div className="row align-items-center bg-white justify-content-between">
              <div className="col-4 d-flex justify-content-center">
                <select
                  className="text-center"
                  name="sort"
                  id="sort"
                  onClick={(event) => sorting(event.target.value)}
                >
                  <option value="a-z">price (a-z)</option>
                  <option value="z-a">price (z-a)</option>
                  <option value="lowest">price (lowest)</option>
                  <option value="highest">price (highest)</option>
                </select>
              </div>
              <div className="col-5">
                <h2 className="text-center">Our Products</h2>
              </div>
              <div className="col-3 d-flex gap-4 justify-content-center">
                <BsFillGrid1X2Fill
                  fontSize="24px"
                  cursor="pointer"
                  onClick={SetGridView}
                />
                <FaListAlt
                  fontSize="24px"
                  cursor="pointer"
                  onClick={SetGridView}
                />
              </div>
            </div>

            {gridview ? (
              <div className="row bg-white mt-5">
                {filter_products && filter_products.length > 0 ? (
                  filter_products.map((i, index) => {
                    return (
                      <div
                        key={i.id}
                        className="col-md-4 ml-1 mt-3 position-relative"
                      >
                        <div className="d-flex flex-column align-items-center justify-content-between">
                          <h5>{i.category}</h5>
                          <img
                            className="img-fluid product"
                            src={i.image}
                            alt={i.category}
                          />
                          <div className="position-absolute product-details">
                            <p>₹{i.price}</p>
                            <p>{i.company}</p>
                            <p>{i.name}</p>

                            <Link
                              to={`/singleproduct/${i.id}`}
                              className="btn btn-primary"
                            >
                              Buy Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1>...Loading</h1>
                )}
              </div>
            ) : (
              <>
                <div className="row bg-white mt-5">
                  <div className="list-view d-flex flex-column justify-content-center">
                    {filter_products.map((i, key) => {
                      return (
                        <div className="d-flex justify-content-center mt-5 gap-5">
                          <img
                            src={i.image}
                            className="img-fluid"
                            style={{ height: "160px", width: "244px" }}
                          ></img>
                          <div>
                            <p>₹{i.price}</p>
                            <p>{i.company}</p>
                            <p>{i.name}</p>
                            <p>{i.description}</p>
                            <Link to={`/singleProduct/${i.id}`}>
                              <button className="btn btn-primary">
                                Read more
                              </button>
                            </Link>
                          </div>
                        </div>
                      );

                      //  return <img src={i.image}></img>
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStore;
