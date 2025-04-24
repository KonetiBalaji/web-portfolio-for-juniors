export default function About(){
  return(
  <>
    <main id="main">
      {/* ======= Intro Single ======= */}
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">
                  We Do Great Design For Creative Folks
                </h1>
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
                  <li className="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* End Intro Single*/}
      {/* ======= About Section ======= */}
      <section className="section-about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 position-relative">
              <div className="about-img-box">
                <img
                  src="assets/img/slide-about-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="sinse-box">
                <h3 className="sinse-title">
                  EstateAgency
                  <span />
                  <br /> Sinse 2017
                </h3>
                <p>Art &amp; Creative</p>
              </div>
            </div>
            <div className="col-md-12 section-t8 position-relative">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <img
                    src="assets/img/about-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2  d-none d-lg-block position-relative">
                  <div className="title-vertical d-flex justify-content-start">
                    <span>EstateAgency Exclusive Property</span>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 section-md-t3">
                  <div className="title-box-d">
                    <h3 className="title-d">
                      Effortless
                      <span className="color-d">and</span>enjoyable
                      <br /> journey
                    </h3>
                  </div>
                  <p className="color-text-a">
                  Welcome to our premier estate agency, where exclusivity meets luxury in every property we offer. As you navigate through our meticulously curated selection, you'll discover a world of opulence and refinement. Each property showcased on our real estate website is handpicked for its unique charm, architectural brilliance, and unparalleled amenities. From sprawling estates nestled amidst picturesque landscapes to sleek urban penthouses boasting panoramic city views, we pride ourselves on presenting only the most exceptional residences.
                  </p>
                  <p className="color-text-a">
                  With a focus on personalized service and attention to detail, our team of expert agents is dedicated to guiding you through every step of your real estate journey. Whether you're searching for a tranquil retreat or a cosmopolitan oasis, trust us to connect you with the exclusive property of your dreams. Explore our listings today and embark on the path to luxury living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======Team Section ======= */}
      <section className="section-agents section-t8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Meet Our Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  <img
                    src="assets/img/agent-7.jpg"
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
                    src="assets/img/agent-6.jpg"
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
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-dribbble" aria-hidden="true" />
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
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-dribbble" aria-hidden="true" />
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
      </section>
      {/* End About Section*/}
    </main>
    {/* End #main */}
  </>
  )
  }