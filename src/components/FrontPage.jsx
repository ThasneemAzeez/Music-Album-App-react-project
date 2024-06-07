import React from 'react'
import Navigation from './Navigation'

const FrontPage = () => {
  return (
    <div>
        <Navigation/>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1><center>Album App</center></h1>
                <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rock-album-cover-design-template-d269849d70ee3c41453c3dc4df91092e_screen.jpg?ts=1678604265"  class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/funk-album-cover-design-template-cfe40bf36d058b12140bb35e04e8a5bf_screen.jpg?ts=1711333825" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-design-template-13921c50027d936bfb09ff95a5288150_screen.jpg?ts=1711047726" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>

            </div>
        </div>
    </div></div>
  )
}

export default FrontPage