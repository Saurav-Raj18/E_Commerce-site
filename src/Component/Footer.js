import React from 'react'
import { Link } from 'react-router-dom';
import {BsLinkedin,BsInstagram,BsGithub,BsYoutube} from 'react-icons/bs';

const Footer = () => {
  return (
   <>
   <footer className='py-4'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-5 '>
            <div className='footer-top-data d-flex align-items-center gap-4'>
              <img src="images/newsletter.png" />
              <h2 className='text-white mb-0'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="basic-addon2"/>
                <span class="input-group-text p-2 mb-0" id="basic-addon2">suscribe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
       <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
            <address className='text-white fs-6'>
            Hno : 277 Near Vill chopal,
            <br/>
            Sonipat, Haryana 
            <br/>
            PinCode: 131103 
            </address>
            <Link className='d-block mt-3'>+96 987654123</Link>
            <Link className='d-block mt-2 mb-0'>sauravrajbitu95@gmail.com</Link>
            <div className='social-icon d-flex gap-4 align-items-center mt-4'>
               <Link >{<BsLinkedin fontSize="24px"/>}</Link>
               <Link >{<BsInstagram fontSize="24px"/>}</Link>
               <Link >{<BsGithub fontSize="24px"/>}</Link>
               <Link >{<BsYoutube fontSize="24px"/>}</Link>
            </div>
            </div>
          </div>
          <div className='col-3'>
           <h4 className='text-white mb-4'>Information</h4>
           <div className='d-flex flex-column gap-3'>
            <Link>Privacy Policy</Link>
            <Link>Refund Policy</Link>
            <Link>Shipping Policy</Link>
            <Link>Terms & conditions</Link>
            <Link>Blogs</Link>
          </div>
          </div>

          <div className='col-3'>
          <h4 className='text-white mb-4'>Account</h4>
          <div className='d-flex flex-column gap-3'>
            <Link>About Us</Link>
            <Link>Contact</Link>
            <Link>Faq</Link>
          </div>
          </div>

          <div className='col-2'>
          <h4 className='text-white mb-4'>Quick Links</h4>
          <div className='d-flex flex-column gap-3'>
            <Link>Laptops</Link>
            <Link>Headphones</Link>
            <Link>Tablet</Link>
            <Link>Watch</Link>
          </div>
          </div>
        </div>
       </div>
    </footer>
    <footer className='py-4'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12'>
              <p className='mb-0 text-white text-center'>&copy:{new Date().getFullYear()}:Powered by Devloper's Corner</p>
            </div>
          </div>
        </div>
    </footer>
    </> 
  );
}

export default Footer
