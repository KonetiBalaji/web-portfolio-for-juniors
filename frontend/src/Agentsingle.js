import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

export default function Agentsingle(){

    return(

        <>
        
  {/* ======= Property Search Section ======= */}
  <div className="click-closed" />
  {/*/ Form Search Star /*/}
  <div className="box-collapse">
    <div className="title-box-d">
      <h3 className="title-d">Search Property</h3>
    </div>
    <span className="close-box-collapse right-boxed bi bi-x" />
    <div className="box-collapse-wrap form">
      <form className="form-a">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="form-group">
              <label className="pb-2" htmlFor="Type">
                Keyword
              </label>
              <input
                type="text"
                className="form-control form-control-lg form-control-a"
                placeholder="Keyword"
              />
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="Type">
                Type
              </label>
              <select
                className="form-control form-select form-control-a"
                id="Type"
              >
                <option>All Type</option>
                <option>For Rent</option>
                <option>For Sale</option>
                <option>Open House</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="city">
                City
              </label>
              <select
                className="form-control form-select form-control-a"
                id="city"
              >
                <option>All City</option>
                <option>Alabama</option>
                <option>Arizona</option>
                <option>California</option>
                <option>Colorado</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="bedrooms">
                Bedrooms
              </label>
              <select
                className="form-control form-select form-control-a"
                id="bedrooms"
              >
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="garages">
                Garages
              </label>
              <select
                className="form-control form-select form-control-a"
                id="garages"
              >
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="bathrooms">
                Bathrooms
              </label>
              <select
                className="form-control form-select form-control-a"
                id="bathrooms"
              >
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="price">
                Min Price
              </label>
              <select
                className="form-control form-select form-control-a"
                id="price"
              >
                <option>Unlimite</option>
                <option>$50,000</option>
                <option>$100,000</option>
                <option>$150,000</option>
                <option>$200,000</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-b">
              Search Property
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/* End Property Search Section */}&gt;
  {/* ======= Header/Navbar ======= */}
  {/* <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div className="container">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarDefault"
        aria-controls="navbarDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
      <a className="navbar-brand text-brand" href="index.html">
        Estate<span className="color-b">Agency</span>
      </a>
      <div
        className="navbar-collapse collapse justify-content-center"
        id="navbarDefault"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="about.html">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="property-grid.html">
              Property
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="blog-grid.html">
              Blog
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item " href="property-single.html">
                Property Single
              </a>
              <a className="dropdown-item " href="blog-single.html">
                Blog Single
              </a>
              <a className="dropdown-item " href="agents-grid.html">
                Agents Grid
              </a>
              <a className="dropdown-item active" href="agent-single.html">
                Agent Single
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
      >
        <i className="bi bi-search" />
      </button>
    </div>
  </nav> */}
  {/* End Header/Navbar */}
  <Header/>
  <main id="main">
    {/* ======= Intro Single ======= */}
    <section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">Margaret Stone</h1>
              <span className="color-text-a">Agent Immobiliari</span>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-box d-flex justify-content-lg-end"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Agents</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Margaret Stone
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    {/* End Intro Single */}
    {/* ======= Agent Single ======= */}
    <section className="agent-single">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-md-6">
                <div className="agent-avatar-box">
                  <img
                    src="assets/img/agent-7.jpg"
                    alt=""
                    className="agent-avatar img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-5 section-md-t3">
                <div className="agent-info-box">
                  <div className="agent-title">
                    <div className="title-box-d">
                      <h3 className="title-d">
                        Margaret Stone
                        <br /> Escala
                      </h3>
                    </div>
                  </div>
                  <div className="agent-content mb-3">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh. Praesent sapien massa,
                      convallis a pellentesque nec, egestas non nisi. Vivamus
                      suscipit tortor eget felis porttitor volutpat. Vivamus
                      suscipit tortor eget felis porttitor volutpat.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong>
                        <span className="color-text-a"> +54 356 945234 </span>
                      </p>
                      <p>
                        <strong>Mobile: </strong>
                        <span className="color-text-a"> 999 123 456 789</span>
                      </p>
                      <p>
                        <strong>Email: </strong>
                        <span className="color-text-a">
                          {" "}
                          agents@example.com
                        </span>
                      </p>
                      <p>
                        <strong>skype: </strong>
                        <span className="color-text-a"> Margaret.Es</span>
                      </p>
                      <p>
                        <strong>Email: </strong>
                        <span className="color-text-a">
                          {" "}
                          agents@example.com
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="socials-footer">
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
          <div className="col-md-12 section-t8">
            <div className="title-box-d">
              <h3 className="title-d">My Properties (6)</h3>
            </div>
          </div>
          <div className="row property-grid grid">
            <div className="col-sm-12">
              <div className="grid-option">
                <form>
                  <select className="custom-select">
                    <option selected="">All</option>
                    <option value={1}>New to Old</option>
                    <option value={2}>For Rent</option>
                    <option value={3}>For Sale</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img
                    src="assets/img/property-1.jpg"
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
                      <a href="#" className="link-a">
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
                      <a href="#" className="link-a">
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
                      <a href="#" className="link-a">
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
                      <a href="#" className="link-a">
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
                    src="assets/img/property-8.jpg"
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
                      <a href="#" className="link-a">
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
                    src="assets/img/property-10.jpg"
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
                      <a href="#" className="link-a">
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
        </div>
      </div>
    </section>
    {/* End Agent Single */}
  </main>
  {/* End #main */}
  <Footer/>

        </>
    )
}