import React from 'react'
import { Carousel } from "flowbite-react";

export default function Home() {
return(
  <>
<div>
<div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div  className="d-block w-100 img3" alt="..." ></div>
    </div>
    <div className="carousel-item">
      <div  className="d-block w-100 img2" alt="..." ></div>
    </div>
    <div className="carousel-item">
      <div  className="d-block w-100 img1" alt="..."></div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
  </>
)
}
