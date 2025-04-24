import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";
import apihandle from "../API/apihandle";

export default function () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [profile, setProfile] = useState({});
  const [profileName, setProfileName] = useState('');
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const override = {
    "display": "block",
    "margin": "0 auto",
    "position": "absolute",
    "top": "55%",
    "zIndex": "1",
  }

  const nav = useNavigate()
  const handleForm = (e) => {
    e.preventDefault(); // Corrected method name

    if(!/^\d{10}$/.test(contact)){
      toast.error("Contact number must be 10 digits",{
        position:'top-center'
      });
      return;
    }
    setLoading(true)
    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("contact", contact);
    data.append("address", address);
    data.append("gender", gender);
    data.append("profile", profile);

    apihandle.customerRegister(data, { headers: { authorization: sessionStorage.getItem("token") } })
      .then((res) => {
        setLoading(false)
        toast.success("Customer Account Registered");
        setTimeout(() => {
          // window.location.reload();
    
          nav("/login")
        }, 500)
      })
      .catch((error) => {
        setLoading(false)
        console.error("Error adding new customer:", error);
        toast.error("Error adding new customer");
      });
  };
  return (

    <>
      <div className="d-flex justify-content-center">
        <ClipLoader loading={loading} cssOverride={override} size={120} />
      </div>
      <div className={loading ? "disabled-screen-full" : ""}>
        <section className="intro-single">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <h1 className="title-single">
                    Customer
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
                      Customer Register
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <div className="container mt-4">
          <div className="row ">
            <div className="col-md-2"></div>
            <div className="col-md-8">

              <h1 className="text-center m-2">Register</h1>
              <form className="form-control " onSubmit={handleForm}>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control  " id="inputEmail3" value={name} onChange={(e) => { setName(e.target.value) }} required/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control  " id="inputEmail3" value={email} onChange={(e) => { setEmail(e.target.value) }} required/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control  " id="inputEmail3" value={password} onChange={(e) => { setPassword(e.target.value) }} required/>
                  </div>
                </div>
                <div className="row mb-3 my-2">
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    Phone No.
                  </label>
                  <div className="col-sm-10">
                    <input type="number" className="form-control" id="inputPassword3" value={contact} onChange={(e) => { setContact(e.target.value) }} required />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Set Address
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control  " id="inputEmail3" value={address} onChange={(e) => { setAddress(e.target.value) }} required/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" >
                    Choose Gender
                  </label>
                  <div className="col-sm-10">
                    <input type="radio" className="form-check-input  " name="gender" id="genderMale" value={"Male"} onChange={(e) => { setGender(e.target.value) }} /> Male &nbsp;&nbsp;&nbsp;
                    <input type="radio" className="form-check-input  " name="gender" id="genderFemale" value={"Female"} onChange={(e) => { setGender(e.target.value) }} /> Female
                  </div>
                </div>
                <div className="row mb-3 my-2">
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    Profile Picture
                  </label>
                  <div className="col-sm-10">
                    <input type="file" className="form-control" id="inputPassword3" value={profileName} onChange={(e) => { setProfileName(e.target.value); setProfile(e.target.files[0]); }} required/>
                  </div>
                </div>

                <button type="submit" className="btn btn-a  d-flex m-auto ">
                  Register
                </button>
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
          theme="dark" />
      </div>
    </>
  )
}