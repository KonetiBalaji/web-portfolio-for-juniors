import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Apihandle, { BASE_URL } from "../../API/apihandle"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners";

export default function ManageCity() {
  var [city, setcities] = useState()
  var [cityId, setcityId] = useState()
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
  useEffect(() => {
    if (!authenticate) {
      toast.error("Please Login First")
      nav("/login")
    }
    else {
      Apihandle.allcity(null, { headers: { authorization: sessionStorage.getItem("token") } })
        .then((res) => {
          // console.log(res.data);
          setLoading(false)
          if (res.data.success === true) {
            setcities(res.data.data);
          }
          else {
            toast.error("Error in cities, " + res.data.message);
          }
        })
    }
  }, [])
  var nav = useNavigate();
  const handleDelete = (_id) => {
    setLoading(true)
    window.confirm("Are you sure to delete city?");
    // console.log(_id);
    Apihandle.deletecity({ _id: _id, status: "false" }, { headers: { authorization: sessionStorage.getItem("token") } })
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
                      Manage City
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="d-flex justify-content-between">
                <h4 className="text-center ">Manage City</h4>
                <Link to="/admin/addCity" className="btn btn-dark btn-sm"> Add New  </Link>
              </div>

              <table className="table table-bordered text-center  ">

                <thead>
                  <tr>
                    <th scope="col">Sr no.</th>
                    <th scope="col">City Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {city?.map((el, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{el?.name}</td>
                      <td width={"100px"}>
                        <img src={BASE_URL + el?.image} className="w-100" />
                      </td>
                      <td>
                        <Link to={"/admin/editCity/" + `${el?._id}`}>
                          <button type="button" className='btn btn-success mx-2'>Update</button>
                        </Link>
                        <button className="btn btn-danger mx-2" onClick={() => { handleDelete(el?._id) }}>Delete</button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}