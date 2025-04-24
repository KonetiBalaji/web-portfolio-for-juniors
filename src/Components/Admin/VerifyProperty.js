import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Apihandle, { BASE_URL } from "../../API/apihandle"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners";


export default function VerifyProperty() {
  const params = useParams()
  let userType = sessionStorage.getItem('userType')
  var [properties, setproperties] = useState()
  const [loading, setLoading] = useState(true)
  const override = {
    "display": "block",
    "margin": "0 auto",
    "position": "absolute",
    "top": "55%",
    "zIndex": "1",
  }
  
  var nav = useNavigate();
  let authenticate = sessionStorage.getItem('token')
    if (!authenticate) {
        toast.error("Please Login First")
        nav("/login")
    }
  useEffect(() => {
    let data = {}
    data.status = "Pending"
    Apihandle.allproperty(data, { headers: { authorization: sessionStorage.getItem("token") } })
      .then((res) => {
        // console.log(res.data);
        setLoading(false)
        if (res.data.success === true) {
          setproperties(res.data.data);
        }
        else {
          toast.error("Error in cities, " + res.data.message);
        }
      })
  }, [])
  const handleDelete = (_id, status) => {
    setLoading(true)
    // window.confirm("Are you sure to delete city?");
    // console.log(_id);
    Apihandle.deleteproperty({ _id: _id, status: status }, { headers: { authorization: sessionStorage.getItem("token") } })
      .then((res) => {
        // console.log(res);
        setLoading(false)
        if (res.data.success === true) {
          toast.success(res.data.message);
          setTimeout(() => {
            window.location.reload()
          }, 2000);

        }
        else {
          toast.error("Error " + res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
        toast.error("Something went wrong");

      })
  }
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
                    <Link to="/admin/dashboard">Dashboard</Link>

                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    View Pending Property
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>


      <div className="row m-5 ">
        <div className="col-md-12">
          <h1 className="text-center m-3">Verify Properties</h1>
          <table className="table table-bordered text-center  ">

            <thead>
              <tr>
                <th scope="col">Sno.</th>
                <th scope="col">Property Advisor</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Location</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>

              {properties?.map((el, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td scope="row" width={"100px"}>
                    <img src={BASE_URL + el?.propertyAdvisorId?.profile} className="w-50" />  <br/>
                    {el?.propertyAdvisorId.name} <br/>
                    {el?.propertyAdvisorId.email} <br/>
                    {el?.propertyAdvisorId.contact} 
                  </td>
                  <td width="200px">{el?.propertyTypeId?.name} : {el?.title}</td>
                  <td width="100px">&#8377; {el?.price} : <b> On {el?.type}</b></td>
                  <td width="250px">{el?.description}</td>
                  <td width="200px">{el?.location}, <b>{el?.cityId?.name}</b></td>
                  <td width={"100px"}>
                    <img src={BASE_URL + el?.image} className="w-100" />
                  </td>

                  <td>

                    <button className="btn btn-success mx-2" onClick={() => { handleDelete(el?._id, "Approved") }}>
                      <i className="bi bi-check"></i>
                    </button>

                    <button className="btn btn-danger mx-2" onClick={() => { handleDelete(el?._id, "Declined") }}>
                      <i className="bi bi-x"></i>
                    </button>

                  </td>


                </tr>
              ))}    </tbody>
          </table>
        </div>

      </div>

    </>
  )
}