import React from 'react'
import fires from "../img/fries.png"
import burger from "../img/burger.png"
import zinger from "../img/zinger.png"
import roll from "../img/roll.png"


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
<div className="col-lg-5 col-12 ps-lg-4 d-flex flex-column align-items-lg-start align-items-center ">
    <h5 className='col-yellow fw-bold '>FAST FOOD BURGERS</h5>
    <h1 className='display-1 text-white fw-bold head1'>BEST  BURGERS</h1>
<p className='text-white text-capitalize fs-5 text-lg-start text-center'>secret family recipes are the stuff of legends and stack <br /> burger blend is no exception</p>
<button className='btn1  col-lg-3' >Order Now
<i className="fas fa-shipping-fast span-hov d-flex flex-row align-items-center justify-content-center"></i>
</button>
</div>
<div className="col-lg-7 col-md-7 col-sm-8 col-10  mx-lg-0 mx-auto i3">

</div>

        </div>

    </div>
    <div className="carousel-item">
    <div className="i1 d-flex flex-lg-row flex-column justify-content-center align-items-center">

<div className="col-lg-5 col-12 ps-lg-4 d-flex flex-column align-items-lg-start align-items-center">
    <h5 className='col-yellow fw-bold '>FAST FOOD BURGERS</h5>
    <h1 className='display-2 text-white fw-bold head1'>BEEF BURGERS</h1>
<p className='text-white text-capitalize fs-5 text-lg-start text-center'>secret family recipes are the stuff of legends and stack <br /> burger blend is no exception</p>
<button className='btn1  col-lg-3' >Order Now
<i className="fas fa-shipping-fast span-hov d-flex flex-row align-items-center justify-content-center"></i>
</button>
</div>
<div className="col-lg-7 col-md-7 col-sm-8 col-10  mx-lg-0 mx-auto  i4">

</div>
    </div>
    </div>

  </div>

</div>
    {/* CAROUSEL END */}
<div className="container-fluid  d-flex flex-lg-row flex-column m-0 p-0 divhov">
    <div className="col-lg-3  hdiv py-5 col-md-6 col-md-6 col-12 mx-lg-0 mx-auto  ">
        <img src={fires} alt="" className='img-fluid ' />
        <div className="hover1">
        </div>
  
          <h2 className='text-center display-6 text-white fw-bolder  '>Fries</h2>
 <h5 className='text-center  text-white fw-bolder'>4 Products Available</h5>

    </div>
    <div className="col-lg-3 hdiv  py-5 col-md-6 col-md-6 col-12 mx-lg-0 mx-auto">
    <img src={burger} alt=""  className='img-fluid'/>
      <div className="hover1">
        </div>
          <h2 className='text-center display-6 text-white fw-bolder'>Fries</h2>
 <h5 className='text-center  text-white fw-bolder'>4 Products Available</h5>
    </div>
    <div className="col-lg-3  hdiv py-5 col-md-6 col-md-6 col-12 mx-lg-0 mx-auto">
    <img src={zinger} alt=""  className='img-fluid'/>
      <div className="hover1">
        </div>
          <h2 className='text-center display-6 text-white fw-bolder'>Fries</h2>
 <h5 className='text-center  text-white fw-bolder'>4 Products Available</h5>

    </div>
    <div className="col-lg-3 hdiv  py-5 col-md-6 col-md-6 col-12 mx-lg-0 mx-auto">
    <img src={roll} alt=""  className='img-fluid'/>
      <div className="hover1">
        </div>
          <h2 className='text-center display-6 text-white fw-bolder'>Fries</h2>
 <h5 className='text-center  text-white fw-bolder'>4 Products Available</h5>
    </div>

</div>
<div className="container my-5 py-5"></div>
    </>
  )
}
