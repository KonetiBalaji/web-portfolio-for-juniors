import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export default function AdminHeader() {
  var nav = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    toast.success("Logged out successfully");
    setTimeout(() => {
      nav('/login');
    }, 1000)
  }
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
            className="navbar-brand text-brand" To="index.html">
            Home<span className="color-b">Harbor</span>
          </Link>
          <div
            className="navbar-collapse collapse justify-content-center"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " to="/admin/dashboard">
                  Dashboard
                </Link>
              </li>
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
                  Users
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item " to="/admin/customerList">
                    Customers
                  </Link>
                  <Link className="dropdown-item " to="/admin/dealerList/approved">
                    Active Dealers
                  </Link>
                  <Link className="dropdown-item " to="/admin/dealerList/requests">
                    In-active Dealer Requests
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/admin/manageCity">
                  City
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/admin/managePropertyType">
                  Property Type
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/admin/verifyProperty">
                  Property Verification List
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link " to="/admin/chats">
                  Messages
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link " to="/admin/Bookings">
                  Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/admin/changePassword">
                  Password
                </Link>
              </li>

            </ul>
          </div>
          <button onClick={logout}
            type="button"
            className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
          >
            <i className="bi bi-box-arrow-right fs-4" />
          </button>
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