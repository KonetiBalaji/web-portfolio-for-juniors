import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import apihandle from "../../API/apihandle";
import { ClipLoader } from "react-spinners";

export default function AddCity() {
  const nav = useNavigate()
  const [cityName, setCityName] = useState("")
  const [cityImage, setCityImage] = useState({})
  const [imageName, setImageName] = useState("")
  const [loading, setLoading] = useState(false)
  const override = {
    "display": "block",
    "margin": "0 auto",
    "position": "absolute",
    "top": "55%",
    "zIndex": "1",
  }
  let authenticate = sessionStorage.getItem('token')

  useEffect(() => {
    if (!authenticate) {
      toast.error("Please Login First")
      nav("/login")
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected method name
    setLoading(true)
    let data = new FormData();
    data.append("name", cityName);
    data.append("image", cityImage);

    apihandle.addcity(data, { headers: { authorization: sessionStorage.getItem("token") } })
      .then((res) => {
        setLoading(false)
        if (res.data.success === true) {
          toast.success("City added successfully");
          setTimeout(() => {
            // window.location.reload();
            setCityName('');
            setCityImage('')
            nav("/admin/manageCity")
          }, 500)

        }
        else {
          toast.error("Error adding city, " + res.data.message);
        }
      })
      .catch((error) => {
        setLoading(false)
        console.error("Error adding city:", error);
        toast.error("Error adding city");
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
                      Add City
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

              <h1 className="text-center m-2">Add City</h1>
              <form className="form-control " onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    City Name
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control  " id="inputEmail3" value={cityName} onChange={(e) => { setCityName(e.target.value) }} />
                  </div>
                </div>
                <div className="row mb-3 my-2">
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    City Image
                  </label>
                  <div className="col-sm-10">
                    <input type="file" className="form-control" id="inputPassword3" value={imageName} onChange={(e) => { setImageName(e.target.value); setCityImage(e.target.files[0]); }} />
                  </div>
                </div>
                <button type="submit" className="btn btn-a  d-flex m-auto ">
                  Submit
                </button>
              </form>


            </div>

          </div>
        </div>

        <ToastContainer />

      </div>
    </>
  )
}