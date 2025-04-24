import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Apihandle from "../API/apihandle";
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setLoad(true);
    let data = {
      email: email,
      password: password,
    };
    Apihandle.login(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        }
        else if (res.data.success === true) {
          const userType = res.data.data.userType;
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("userType", res.data.data.userType);
          sessionStorage.setItem("userId", res.data.data._id);
          
          sessionStorage.setItem("email", res.data.data.email);
          if (userType === 1) {
            toast.success("Login successfully");
            sessionStorage.setItem("_id", res.data.data._id);
            setTimeout(() => {
              nav("/admin/dashboard");
            }, 2000);
          } else if (userType === 2) {
            toast.success("Login successfully");
            sessionStorage.setItem("_id", res.data.data.propertyAdvisorId);
            setTimeout(() => {
              nav("/dealer/dashboard");
            }, 2000);

          } else if (userType === 3) {
            toast.success("Login successfully");
            sessionStorage.setItem("_id", res.data.data.customerId);
            setTimeout(() => {
              nav("/");
            }, 2000);
          }
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
                  Login
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
                    Login
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
                      type="email"
                      name="name"
                      className="form-control form-control-lg form-control-a"
                      placeholder="Email"
                      required="" value={email} onChange={(e) => { setEmail(e.target.value) }}
                    />
                  </div>


                </div>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                      type="password"
                      name="subject"
                      className="form-control form-control-lg form-control-a"
                      placeholder="Password"
                      required="" value={password} onChange={(e) => { setPassword(e.target.value) }}
                    />
                  </div>
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-a">
                    Login
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