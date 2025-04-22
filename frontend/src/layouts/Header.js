import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import apihandle from "../API/apihandle";
import { useEffect, useState } from "react";

export default function Header() {
  var token = sessionStorage.getItem("token")
  var nav = useNavigate();

  var [propertyTypes, setpropertyTypes] = useState([])
  const logout = () => {
    sessionStorage.clear();
    toast.success("Logged out successfully");
    setTimeout(() => {
      nav('/login');
    }, 1000)
  }


  useEffect(() => {

    let data = { status: "Approved" }
    apihandle.allpropertyType(data, { headers: { authorization: sessionStorage.getItem("token") } })
      .then((res) => {
        // console.log(res.data);
        if (res.data.success === true) {
          setpropertyTypes(res.data.data);
        }
        else {
          toast.error("Error in cities, " + res.data.message);
        }
      })
  }, [])



  return (

    <>

      <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
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
          <Link
            className="navbar-brand text-brand" to="/">
            Home<span className="color-b">Harbour</span>
          </Link>
          <div
            className="navbar-collapse collapse justify-content-center"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/customerProperties">
                  Property
                </Link>
              </li>
              

              {/* <li className="nav-item">
                <Link className="nav-link " to="/Contact">
                  Contact
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li> */}
              {token == null ?
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Register
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item " to="/customerRegister">
                      As Customer
                    </Link>
                    <Link className="dropdown-item " to="/dealerRegister">
                      As Property Dealer
                    </Link>
                  </div>
                </li>
                :
                <>
                <li className="nav-item">
                  <Link className="nav-link " to="/customer/bookings">
                    My Bookings
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link " to="/changePassword">
                  Password
                </Link>
              </li>
                </>
              }
            </ul>
          </div>
          {token == null ?
            <Link to="/login">
              <button
                type="button"
                className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
              >
                <i className="bi bi-person fs-4" />
              </button>
            </Link>
            :
            <button onClick={logout}
              type="button"
              className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
            >
              <i className="bi bi-box-arrow-right fs-4" />
            </button>
          }


        </div>
      </nav>


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