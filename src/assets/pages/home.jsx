import React from 'react'

export default function Home() {
  return (
    <>
    {/* CAROUSEL START */}
      <div
  id="carouselExampleIndicators"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active dd"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
      className='dd'
    />

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="i2 d-flex flex-lg-row flex-column justify-content-center align-items-center">
<div className="col-lg-5 col-12 ps-4 d-flex flex-column align-items-lg-start align-items-center ">
    <h5 className='col-yellow fw-bold '>FAST FOOD BURGERS</h5>
    <h1 className='display-1 text-white fw-bold head1'>BEST  BURGERS</h1>
<p className='text-white text-capitalize fs-5 text-lg-start text-center'>secret family recipes are the stuff of legends and stack <br /> burger blend is no exception</p>
<button className='btn1  col-lg-3' >Order Now
<i className="fas fa-shipping-fast span-hov d-flex flex-row align-items-center justify-content-center"></i>
</button>
</div>
<div className="col-lg-7 col-8 mx-lg-0 mx-auto i3">

</div>

        </div>

    </div>
    <div className="carousel-item">
    <div className="i1 d-flex flex-lg-row flex-column justify-content-center align-items-center">

<div className="col-lg-5 col-12 ps-4 d-flex flex-column align-items-lg-start align-items-center">
    <h5 className='col-yellow fw-bold '>FAST FOOD BURGERS</h5>
    <h1 className='display-2 text-white fw-bold head1'>BEEF BURGERS</h1>
<p className='text-white text-capitalize fs-5 text-lg-start text-center'>secret family recipes are the stuff of legends and stack <br /> burger blend is no exception</p>
<button className='btn1  col-lg-3' >Order Now
<i className="fas fa-shipping-fast span-hov d-flex flex-row align-items-center justify-content-center"></i>
</button>
</div>
<div className="col-lg-7 col-8 mx-lg-0 mx-auto  i4">

</div>
    </div>
    </div>

  </div>
  {/* <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
    {/* CAROUSEL END */}
<div className="container-fluid">
    <div className="col-lg-3  col-md-6 col-12">
        
    </div>
    <div className="col-lg-3 col-md-6 col-12"></div>
    <div className="col-lg-3 col-md-6 col-12"></div>
    <div className="col-lg-3 col-md-6 col-12"></div>
</div>
    </>
  )
}
