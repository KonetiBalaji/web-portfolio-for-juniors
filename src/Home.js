import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

export default function Home(){

    return(
        <>
  
  {/* End Header/Navbar */}
  {/* ======= Intro Section ======= */}
  <div className="intro intro-carousel swiper position-relative">
    <div className="swiper-wrapper">
      <div
        className="swiper-slide carousel-item-a intro-item bg-image"
        style={{ backgroundImage: "url(assets/img/slide-1.jpg)" }}
      >
        <div className="overlay overlay-a" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">
                      Doral, Florida
                      <br /> 78345
                    </p>
                    <h1 className="intro-title mb-4 ">
                      <span className="color-b">204 </span> Mount
                      <br /> Olive Road Two
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#">
                        <span className="price-a">rent | &#8377; 12000</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="swiper-slide carousel-item-a intro-item bg-image"
        style={{ backgroundImage: "url(assets/img/slide-2.jpg)" }}
      >
        <div className="overlay overlay-a" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">
                      Doral, Florida
                      <br /> 78345
                    </p>
                    <h1 className="intro-title mb-4">
                      <span className="color-b">204 </span> Rino
                      <br /> Venda Road Five
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#">
                        <span className="price-a">rent | $ 12.000</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="swiper-slide carousel-item-a intro-item bg-image"
        style={{ backgroundImage: "url(assets/img/slide-3.jpg)" }}
      >
        <div className="overlay overlay-a" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">
                      Doral, Florida
                      <br /> 78345
                    </p>
                    <h1 className="intro-title mb-4">
                      <span className="color-b">204 </span> Alira
                      <br /> Roan Road One
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#">
                        <span className="price-a">rent | $ 12.000</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-pagination" />
  </div>
  {/* End Intro Section */}
  <main id="main">
    {/* ======= Services Section ======= */}
    <section className="section-services section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Our Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="bi bi-cart" />
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Lifestyle</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c">
                  Better place for a better line, find your dream home.
                </p>
              </div>
              {/* <div className="card-footer-c">
                <a href="#" className="link-c link-icon">
                  Read more
                  <span className="bi bi-chevron-right" />
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="bi bi-calendar4-week" />
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Rent</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c">
                  Don't have money? You can rent also..
                </p>
              </div>
              {/* <div className="card-footer-c">
                <a href="#" className="link-c link-icon">
                  Read more
                  <span className="bi bi-calendar4-week" />
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="bi bi-card-checklist" />
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Commercial</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c">
                  Go for a Commercial Property and boost you business.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}

    {/* ======= Agents Section ======= */}
    {/* <section className="section-agents section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Best Agents</h2>
              </div>
              <div className="title-link">
                <a href="agents-grid.html">
                  All Agents
                  <span className="bi bi-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img
                  src="assets/img/agent-4.jpg"
                  alt=""
                  className="img-d img-fluid"
                />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">
                        Margaret Sotillo
                        <br /> Escala
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                    dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img
                  src="assets/img/agent-1.jpg"
                  alt=""
                  className="img-d img-fluid"
                />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">
                        Stiven Spilver
                        <br /> Darw
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                    dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img
                  src="assets/img/agent-5.jpg"
                  alt=""
                  className="img-d img-fluid"
                />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">
                        Emma Toledo
                        <br /> Cascada
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                    dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* End Agents Section */}
    <section className="section-property section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest Properties</h2>
              </div>
              <div className="title-link">
                <a href="property-grid.html">
                  All Property
                  <span className="bi bi-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <div className="card-box-a card-shadow">
            <div className="img-box-a">
              <img
                src="assets/img/property-3.jpg"
                alt=""
                className="img-a img-fluid"
              />
            </div>
            <div className="card-overlay">
              <div className="card-overlay-a-content">
                <div className="card-header-a">
                  <h2 className="card-title-a">
                    <a href="#">
                      204 Mount
                      <br /> Olive Road Two
                    </a>
                  </h2>
                </div>
                <div className="card-body-a">
                  <div className="price-box d-flex">
                    <span className="price-a">rent | $ 12.000</span>
                  </div>
                  <a href="property-single.html" className="link-a">
                    Click here to view
                    <span className="bi bi-chevron-right" />
                  </a>
                </div>
                <div className="card-footer-a">
                  <ul className="card-info d-flex justify-content-around">
                    <li>
                      <h4 className="card-info-title">Area</h4>
                      <span>
                        340m
                        <sup>2</sup>
                      </span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Beds</h4>
                      <span>2</span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Baths</h4>
                      <span>4</span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Garages</h4>
                      <span>1</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-box-a card-shadow">
            <div className="img-box-a">
              <img
                src="assets/img/property-6.jpg"
                alt=""
                className="img-a img-fluid"
              />
            </div>
            <div className="card-overlay">
              <div className="card-overlay-a-content">
                <div className="card-header-a">
                  <h2 className="card-title-a">
                    <a href="#">
                      204 Mount
                      <br /> Olive Road Two
                    </a>
                  </h2>
                </div>
                <div className="card-body-a">
                  <div className="price-box d-flex">
                    <span className="price-a">rent | $ 12.000</span>
                  </div>
                  <a href="property-single.html" className="link-a">
                    Click here to view
                    <span className="bi bi-chevron-right" />
                  </a>
                </div>
                <div className="card-footer-a">
                  <ul className="card-info d-flex justify-content-around">
                    <li>
                      <h4 className="card-info-title">Area</h4>
                      <span>
                        340m
                        <sup>2</sup>
                      </span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Beds</h4>
                      <span>2</span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Baths</h4>
                      <span>4</span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Garages</h4>
                      <span>1</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-box-a card-shadow">
            <div className="img-box-a">
              <img
                src="assets/img/property-7.jpg"
                alt=""
                className="img-a img-fluid"
              />
            </div>
            <div className="card-overlay">
              <div className="card-overlay-a-content">
                <div className="card-header-a">
                  <h2 className="card-title-a">
                    <a href="#">
                      204 Mount
                      <br /> Olive Road Two
                    </a>
                  </h2>
                </div>
                <div className="card-body-a">
                  <div className="price-box d-flex">
                    <span className="price-a">rent | $ 12.000</span>
                  </div>
                  <a href="property-single.html" className="link-a">
                    Click here to view
                    <span className="bi bi-chevron-right" />
                  </a>
                </div>
                <div className="card-footer-a">
                  <ul className="card-info d-flex justify-content-around">
                    <li>
                      <h4 className="card-info-title">Area</h4>
                      <span>
                        340m
                        <sup>2</sup>
                      </span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Beds</h4>
                      <span>2</span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Baths</h4>
                      <span>4</span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Garages</h4>
                      <span>1</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="propery-carousel-pagination carousel-pagination" />
      </div>
    </section>
    {/* End Latest Properties Section */}
    {/* ======= Testimonials Section ======= */}
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          
        </div>
        <div className="carousel-inner " style={{color:'black',marginTop:'80px',marginLeft:'100px',marginRight:'100px'}}>
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src="\assets\img\testimonial-2.jpg" className="d-block "  style={{width:'700px',height:'500px'}}/>
            <div className="carousel-caption d-none d-md-block">
              
              <p className="fs-5" style={{marginLeft:'470px',marginBottom:'100px'}}> <i>"As a recent client, I was impressed by the professionalism and expertise demonstrated by their team throughout the entire process. From the initial consultation to the final closing, they provided invaluable guidance and support, ensuring a smooth and successful transaction.
              "</i></p>
              <h5 className="" style={{marginBottom:'70px',marginLeft:'500px'}}>Albert &amp; Erika</h5>

            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000} >
            <img src="\assets\img\testimonial-1.jpg" className="d-block " style={{width:'600px',height:'500px',marginTop:'3px',marginLeft:'50px',marginRight:'100px'}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
            

              <p style={{marginLeft:'450px',marginBottom:'100px'}} className='fs-5'><i>"As a recent client, I was impressed by the professionalism and expertise demonstrated by their team throughout the entire process. From the initial consultation to the final closing, they provided invaluable guidance and support, ensuring a smooth and successful transaction."
              </i></p>
              <h5 className="testimonial-author" style={{marginBottom:'70px',marginLeft:'500px'}}>Pablo &amp; Emma</h5>

            </div>
          </div>
         
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    {/* End Testimonials Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}

</>

   
    )
}