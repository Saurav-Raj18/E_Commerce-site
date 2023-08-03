import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { FilterContext } from '../ContextApi/Filter_context'


const Header = () => {
   const {filters:{text},upDateFilter}=useContext(FilterContext)
  // console.log(text)
  return (
    <>
      <header className='header-top-strp py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>Hotline: <a className="text-white" href='+91 9608331246'> +91 9608331246</a></p>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-3'>
        <div className='container'>
          <div className='row align-items-center justify-content-between '>
            <div className='col-2  text-center'>
              <h2><Link className='text-white'>DevCorner</Link></h2>
            </div>
            <div className='col-5'>
              <div class="input-group">

                <input type="text" class="form-control py-2" placeholder="Search product here" aria-label="Product details" aria-describedby="basic-addon2"    name="text" value={text}onChange={(e)=>upDateFilter(e)}/>

                <  span class="input-group-text p-2"  id="basic-addon2" >{<BiSearch className='search-icon' />}</span>
              </div>
            </div>

            <div className='col-5'>

              <div className='header-upper-links d-flex justify-content-between align-items-center'>
                <div>
                  <Link className='d-flex align-items-center justify-content-between gap-2'>
                    <img src="http://localhost:3001/static/media/compare.1c839d87cb27f1e45f1a3bc4a9e300ea.svg " />
                    <p className='mb-0 text-white mb-0'>Compare <br />Products</p>

                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center justify-content-between gap-2'>
                    <img src="http://localhost:3001/static/media/wishlist.e2b76316c68ed8ae4128cca85f622430.svg" />
                    <p className='mb-0 text-white mb-0'>Favourite <br />whislist</p>

                  </Link>
                </div>

                <div>
                  <Link to="/login" className='d-flex align-items-center justify-content-between gap-2'>
                    <img src="http://localhost:3001/static/media/user.cd86e0566bbf017c8167249084d368e3.svg" />
                    <p className='mb-0 text-white mb-0'>Log in <br />My Account</p>
                  </Link>
                </div>
                <div>
                  <Link to="/addcart" className='d-flex align-items-center justify-content-between gap-2'>
                    <img src="http://localhost:3001/static/media/cart.abfdf752dc482f1a9627d3f76562131d.svg " />
                    <div className='d-flex flex-column gap-2.5 '>
                      <span className='badge text-dark bg-white text-center mb-2'>0</span>
                      <p className='text-white mb-0'>$500</p>
                    </div>


                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
      
      <header className='header-bottom py-3'>
        <div className='container'>
          <div className='row'>

            <div className='col-12'>

              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-2 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                     <img src="images/menu.svg"/><span className='me-5 d-inline-block '>SHOP CATEGORIES</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link class="dropdown-item" to="">Action</Link></li>
                      <li><Link class="dropdown-item" to="">Another action</Link></li>
                      <li><Link class="dropdown-item" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>

                <div className='menu-links d-flex gap-3'>
                  <NavLink to="/">HOME</NavLink>
                  <NavLink to="/ourstore">OUR STORE</NavLink>
                  <NavLink to="/">OUR BLOGS</NavLink>
                  <NavLink to="/contact">CONTACT</NavLink>
                </div>

              </div>


            </div>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header