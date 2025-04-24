export default function Footer(){
  return(
      <>
{/* ======= Footer ======= */}
<section className="section-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <div className="widget-a">
          <div className="w-header-a">
            <h3 className="w-title-a text-brand">EstateAgency</h3>
          </div>
          <div className="w-body-a">
            <p className="w-text-a color-text-a">
            At our estate agency, your satisfaction is our top priority, and we look forward to helping you navigate the exciting world of real estate.
            </p>
          </div>
          <div className="w-footer-a">
            <ul className="list-unstyled">
              <li className="color-a">
                <span className="color-text-a">Phone .</span>{" "}
                +54 356 945234
              </li>
              <li className="color-a">
                <span className="color-text-a">Email .</span>  contact@example.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 section-md-t3">
        <div className="widget-a">
          <div className="w-header-a">
            <h3 className="w-title-a text-brand">The Company</h3>
          </div>
          <div className="w-body-a">
            <div className="w-body-a">
              <ul className="list-unstyled">
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Site Map</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" /> <a href="#">Legal</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Agent Admin</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Careers</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Affiliate</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 section-md-t3">
        <div className="widget-a">
          <div className="w-header-a">
            <h3 className="w-title-a text-brand">International sites</h3>
          </div>
          <div className="w-body-a">
            <ul className="list-unstyled">
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />{" "}
                <a href="#">Venezuela</a>
              </li>
              <li className="item-list-a">
                <i className="bi bi-chevron-right" /> <a href="#">China</a>
              </li>
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />{" "}
                <a href="#">Hong Kong</a>
              </li>
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />{" "}
                <a href="#">Argentina</a>
              </li>
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />{" "}
                <a href="#">Singapore</a>
              </li>
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />{" "}
                <a href="#">Philippines</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <nav className="nav-footer">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Property</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Blog</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="socials-a">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="bi bi-twitter" aria-hidden="true" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright-footer">
          <p className="copyright color-text-a">
            © Copyright
            <span className="color-a">EstateAgency</span> All Rights Reserved.
          </p>
        </div>
        <div className="credits">
          {/*
    All the links in the footer should remain intact.
    You can delete the links only if you purchased the pro version.
    Licensing information: https://bootstrapmade.com/license/
    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=EstateAgency
  */}
         
        </div>
      </div>
    </div>
  </div>
</footer>
{/* End  Footer */}
</>

  );
}