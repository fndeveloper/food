import React from 'react'
import logo from "../img/removelogo.png"
export default function Navbar() {
  return (
    <div>
    {/* TOP */}
    <div className="animate__fadeIn container-fluid d-flex flex-row d-lg-flex d-none justify-content-center align-items-center tophead m-0 px-4  py-2 top">

   <div className="col-4 d-flex  align-items-center">
   <i className="fa-solid span-head fa-location-dot pe-2"></i>
    <span className='span-head1'>Find a Store</span>
    <i className="fa-solid span-head fa-cart-shopping ps-3"></i>
  
    <span className='span-head ps-2 span-head1'> Order tracking</span>
   </div>
   <div className="col-4 d-flex  align-items-center justify-content-center">
 
    <span className='span-head1'>100% Secure delivery without contacting the courier    </span>

  

   </div>
   <div className="col-4 d-flex justify-content-end  align-items-center">

          <a href="#" class="text-white mx-2"><i class="fab fa-twitter fs-6"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-facebook  fs-6"></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-instagram fs-6" ></i></a>
          <a href="#" class="text-white mx-2"><i class="fab fa-linkedin  fs-6"></i></a>

   </div>
   
 
</div>
    {/* TOP */}
{/* NAV */}
    <nav>
    <div className="animate__fadeIn container-fluid d-flex flex-row d-lg-flex  justify-content-center align-items-center tophead m-0 px-lg-4   shadow-lg top1">

   <div className="col-4 d-flex  align-items-center">
   <i class="fa-solid fa-bars span-head fs-4 fgf" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></i>
   
   </div>
   <div className="col-4 d-flex  align-items-center justify-content-center">
 
  
        <img src={logo} className='img-fluid col-lg-4 col-7' alt="" />
     

  

   </div>
   <div className="col-4 d-flex justify-content-end  align-items-center">
<button className='btn1 me-2 col-lg-4  d-lg-flex d-none justify-content-center align-items-center text-center'>Order Now
<i className="fas fa-shipping-fast span-hov d-flex flex-row align-items-center justify-content-center"></i>
</button>

<button className='btn1'>
<i className="fa-solid fa-cart-shopping fs-6 p-1  d-flex flex-row align-items-center justify-content-center"></i>


<i className="fa-solid fa-cart-shopping span-hov d-flex flex-row align-items-center justify-content-center"></i>
</button>



   </div>
   
 
</div>
    </nav>
{/* NAV */}
{/* offcanvas */}
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
{/* offcanvas */}
    </div>
  )
}
