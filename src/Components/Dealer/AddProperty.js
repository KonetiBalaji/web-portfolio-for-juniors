import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Apihandle from "../../API/apihandle";
import { ClipLoader } from "react-spinners";
import apihandle from "../../API/apihandle";


export default function AddProperty() {
  const nav = useNavigate()
  const [cityId, setcityId] = useState("")
  const [propertyTypeId, setPropertyTypeId] = useState("")
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [imageName, setImageName] = useState("")
  const [cities, setcities] = useState()
  const [propertyTypes, setpropertyTypes] = useState()
  const [loading, setLoading] = useState(true)
  const override = {
    "display": "block",
    "margin": "0 auto",
    "position": "absolute",
    "top": "55%",
    "zIndex": "1",
  }
    let authenticate = sessionStorage.getItem('token')
    if (!authenticate) {
        toast.error("Please Login First")
        nav("/login")
    }
  useEffect(() => {
    Apihandle.allcity({ status: true }, { headers: { authorization: sessionStorage.getItem("token") } })
      .then((res) => {
        // console.log(res.data);
        setLoading(false)
        setcities(res.data.data);
      })

    Apihandle.allpropertyType({ status: true }, { headers: { authorization: sessionStorage.getItem("token") } })
      .then((res) => {
        // console.log(res.data);
        setLoading(false)
        setpropertyTypes(res.data.data);
      })
  }, [])
  const handleForm = (e) => {
    e.preventDefault(); // Corrected method name
    setLoading(true)
    let data = new FormData();
    data.append("cityId", cityId);
    data.append("propertyTypeId", propertyTypeId);
    data.append("propertyAdvisorId", sessionStorage.getItem('_id'));
    data.append("title", title);
    data.append("description", description);
    data.append("type", type);
    data.append("location", location);
    data.append("price", price);
    data.append("image", image);


    apihandle.addproperty(data, { headers: { authorization: sessionStorage.getItem("token") } })
      .then((res) => {
        
        setLoading(false)

        if (res.data.success === true) {
          toast.success("Property added successfully");
          setTimeout(() => {
            // window.location.reload();
            nav("/dealer/manageProperty")
          }, 500)
        }
        else{
          toast.error("Error adding property, "+ res.data.message);
        }
      })
      .catch((error) => {
        setLoading(false)
        console.error("Error adding property:", error);
        toast.error("Error adding property");
      });
  }
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
                      <Link to="/dealer/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add Property
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

              <h1 className="text-center m-2">Add Property</h1>
              <form className="form-control " onSubmit={handleForm}>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Choose City
                  </label>
                  <div className="col-sm-10">
                    <select className="form-control" value={cityId} onChange={(e) => { setcityId(e.target.value) }}>
                      <option value="" disabled selected>Choose City</option>
                      {cities?.map((el, index) => (
                        <option value={el?._id}>{el?.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Choose Property Type
                  </label>
                  <div className="col-sm-10">
                    <select className="form-control" value={propertyTypeId} onChange={(e) => { setPropertyTypeId(e.target.value) }}>
                      <option value="" disabled selected>Choose Property Type</option>
                      {propertyTypes?.map((el, index) => (
                        <option value={el?._id}>{el?.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Add Title
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control  " id="inputEmail3" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Description
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control  " id="inputEmail3" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Price
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control  " id="inputEmail3" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Location
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control  " id="inputEmail3" value={location} onChange={(e) => { setLocation(e.target.value) }} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Choose Type
                  </label>
                  <div className="col-sm-10">
                    <input type="radio" className="form-check-input  " name="type" id="typeSale" value={"Sale"} onChange={(e) => { setType(e.target.value) }} /> Sale &nbsp;&nbsp;&nbsp;
                    <input type="radio" className="form-check-input  " name="type" id="typeRent" value={"Rent"} onChange={(e) => { setType(e.target.value) }} /> Rent
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Image
                  </label>
                  <div className="col-sm-10">
                    <input type="file" className="form-control  " id="inputEmail3" value={imageName} onChange={(e) => { setImageName(e.target.value); setImage(e.target.files[0]) }} />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary d-flex m-auto mb-2 mt-3">
                  Submit
                </button>
              </form>


            </div>

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

    </>
  )
}