import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import apihandle from "../../API/apihandle";
import 'react-toastify/dist/ReactToastify.css';



export default function ChangePassword() {
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [load, setLoad] = useState(false);
  const nav = useNavigate();
  let authenticate = sessionStorage.getItem('token')



  useEffect(() => {
      if (!authenticate) {
        toast.error("Please Login First")
        nav("/login")
      }
    })

  const handleForm = (e) => {
    e.preventDefault();
    setLoad(true);
    let data = {
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
      _id: sessionStorage.getItem('userId'),
    };
    apihandle.changePassword(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        }
        else {
          toast.success(res.data.message);
          setcurrentPassword("")
          setnewPassword("")
          setconfirmPassword("")
        }
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid email and password");
        setLoad(false);
      });
   
    
  }

  return (
    <>
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">
                  ChangePassword
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
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    ChangePassword
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">

            <form
              onSubmit={handleForm} method="post"
            >
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                      type="password"
                      name="subject"
                      className="form-control form-control-lg form-control-a"
                      placeholder="Current Password"
                      required="" value={currentPassword} onChange={(e) => { setcurrentPassword(e.target.value) }}
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                      type="password"
                      name="subject"
                      className="form-control form-control-lg form-control-a"
                      placeholder="New Password"
                      required="" value={newPassword} onChange={(e) => { setnewPassword(e.target.value) }}
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                      type="password"
                      name="subject"
                      className="form-control form-control-lg form-control-a"
                      placeholder="Confirm Password"
                      required="" value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                    />
                  </div>
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-a">
                    ChangePassword
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
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