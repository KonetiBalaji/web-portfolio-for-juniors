import { Link, useNavigate } from "react-router-dom"
import Apihandle from "../../API/apihandle";
import { useEffect, useState } from "react";
import { toast } from "react-toastify"
export default function () {
  var [cities, setcities] = useState('');
  var [propertytypes, setpropertytypes] = useState('')
  var [properties, setproperties] = useState('')
  var [pendingbookings, setpendingbookings] = useState('')
  var [activepropertydealers, setactivepropertydealers] = useState('')
  var [activecustomers, setactivecustomers] = useState('')
  const [toggle, setToggle] = useState(false);
  var [customers, setcustomers] = useState('')

  var nav = useNavigate();
  let authenticate = sessionStorage.getItem('token')

  useEffect(() => {
    if (!authenticate) {
      toast.error("Please Login First")
      nav("/login")
    }
    else {
      Apihandle.adminDashboard(null, { headers: { authorization: sessionStorage.getItem("token") } })
        .then((res) => {
          setcities(res.data.data.totalcity)
          setactivecustomers(res.data.data.totalcustomer)
          setpendingbookings(res.data.data.totalpendingbooking)
          setproperties(res.data.data.totalproperty)
          setpropertytypes(res.data.data.totalpropertyType)
          setactivepropertydealers(res.data.data.totalpropertydealer)
        })
    }

  }, [])

  return (

    <>
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">
                  Admin
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
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="section-services section-t8 pt-0">
        <div class="container">

          <div class="row">
            <div class="col-md-4">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-geo-alt"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h3 class="">Cities - {cities}</h3>
                  </div>
                </div>


              </div>
            </div>
            <div class="col-md-4">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-shop"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h3 class="">Property Types - {propertytypes}</h3>
                  </div>
                </div>


              </div>
            </div>
            <div class="col-md-4">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-house"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h3 class="">Properties - {properties}</h3>
                  </div>
                </div>


              </div>
            </div>
            <div class="col-md-4">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-bookmark-dash"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h3 class="">Pending Bookings - {pendingbookings}</h3>
                  </div>
                </div>


              </div>
            </div>
            <div class="col-md-4">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-person-check"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h3 class="">Total Dealers - {activepropertydealers}</h3>
                  </div>
                </div>


              </div>
            </div>
            <div class="col-md-4">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-person-check"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h3 class="">Total Customers - {activecustomers}</h3>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}