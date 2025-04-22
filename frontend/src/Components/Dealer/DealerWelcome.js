import { Link, useNavigate } from "react-router-dom"
import Apihandle from "../../API/apihandle";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
export default function () {
  var[properties,setproperties]=useState('')
  var[pendingbookings,setpendingbookings]=useState('')
  var[pendingproperties,setpendingproperties] = useState('')
  var[completebooking,setcompletebooking] = useState('')
  const nav = useNavigate();
  let authenticate = sessionStorage.getItem('token')

  useEffect(() => {
    if (!authenticate) {
      toast.error("Please Login First")
      nav("/login")
    }
    else {
    Apihandle.dealerDashboard({propertyAdvisorId:sessionStorage.getItem('_id')},{headers:{authorization:sessionStorage.getItem("token")}})
    .then((res)=>{ 
       setpendingbookings(res.data.data.totalpendingbooking)    
       setproperties(res.data.data.totalproperty)    
       setcompletebooking(res.data.data.totalcompletebooking)    
       setpendingproperties(res.data.data.totalpendingproperty)    
    })
  }
},[])

  return (

    <>
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">
                  Property Advisor
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
            <div class="col-md-6">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-house-dash"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h4 class="">Pending Properties - {pendingproperties}</h4>
                  </div>
                </div>

               
              </div>
            </div>
            <div class="col-md-6">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-house-check"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h4 class="">Properties - {properties}</h4>
                  </div>
                </div>

               
              </div>
            </div>
            <div class="col-md-6">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-bookmark-dash"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h4 class="">Pending Bookings - {pendingbookings}</h4>
                  </div>
                </div>

               
              </div>
            </div>
            <div class="col-md-6">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-bookmark-check"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h4 class="">My Deals - {completebooking}</h4>
                  </div>
                </div>

               
              </div>
            </div>
         
          </div>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"


      />
    </>
  )
}