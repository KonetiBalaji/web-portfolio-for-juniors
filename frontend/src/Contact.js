import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

export default function Contact(){
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
              <a className="dropdown-item " href="agent-single.html">
                Agent Single
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="contact.html">
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
              <h1 className="title-single">Contact US</h1>
              <span className="color-text-a">
                Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut
                natus officia corrupti qui autem fugit consectetur quo. Et ipsum
                eveniet laboriosam voluptas beatae possimus qui ducimus. Et
                voluptatem deleniti. Voluptatum voluptatibus amet. Et esse sed
                omnis inventore hic culpa.
              </span>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-box d-flex justify-content-lg-end"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    {/* End Intro Single*/}
    {/* ======= Contact Single ======= */}
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-map box">
              <div id="map" className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
                  width="100%"
                  height={450}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 section-t8">
            <div className="row">
              <div className="col-md-7">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Your Email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Subject"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          cols={45}
                          rows={8}
                          placeholder="Message"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 my-3">
                      <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-a">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5 section-md-t3">
                <div className="icon-box section-b2">
                  <div className="icon-box-icon">
                    <span className="bi bi-envelope" />
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Say Hello</h4>
                    </div>
                    <div className="icon-box-content">
                      <p className="mb-1">
                        Email.
                        <span className="color-a">contact@example.com</span>
                      </p>
                      <p className="mb-1">
                        Phone.
                        <span className="color-a">+54 356 945234</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="icon-box section-b2">
                  <div className="icon-box-icon">
                    <span className="bi bi-geo-alt" />
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Find us in</h4>
                    </div>
                    <div className="icon-box-content">
                      <p className="mb-1">
                        Manhattan, Nueva York 10036,
                        <br /> EE. UU.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box-icon">
                    <span className="bi bi-share" />
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Social networks</h4>
                    </div>
                    <div className="icon-box-content">
                      <div className="socials-footer">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-instagram"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-linkedin"
                                aria-hidden="true"
                              />
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
        </div>
      </div>
    </section>
    {/* End Contact Single*/}
  </main>
  {/* End #main */}
 <Footer/>


        </>
    )
}