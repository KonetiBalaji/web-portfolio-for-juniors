import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Apihandle, { BASE_URL } from "../../API/apihandle"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners";

export default function DealerRequestList() {
    var [customers, setcustomers] = useState()
    var [customersId, setcustomersId] = useState()
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
            Apihandle.allDealers({ status: false }, { headers: { authorization: sessionStorage.getItem("token") } })
                .then((res) => {
                    // console.log(res.data);
                    setLoading(false)
                    setcustomers(res.data.data);
                })
        }
    }, [])
    var nav = useNavigate();
    const handleDelete = (_id) => {
        setLoading(true)
        // window.confirm("Are you sure to delete customers?");
        // console.log(_id);
        Apihandle.dealerChangeStatus({ _id: _id, status: "true" }, { headers: { authorization: sessionStorage.getItem("token") } })
            .then((res) => {
                // console.log(res);
                setLoading(false)
                toast.success(res.data.message);
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
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
                                            Manage active dealers
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between">
                                <h4 className="text-center ">Manage active dealers</h4>
                                {/* <Link to="/admin/addcustomers" className="btn btn-dark btn-sm"> Add New  </Link> */}
                            </div>

                            <table className="table table-bordered text-center  ">

                                <thead>
                                    <tr>
                                        <th scope="col">Sr no.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Information</th>
                                        <th scope="col">Adhar No.</th>
                                        <th scope="col">License No.</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Properties</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers?.map((el, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{el?.name}</td>
                                            <td>
                                                <i className="bi bi-envelope"></i> {el?.email} <br />
                                                <i className="bi bi-phone"></i> {el?.contact} <br />
                                                <i className="bi bi-geo"></i> {el?.address}

                                            </td>
                                            <td>{el?.adharCardNo}</td>
                                            <td>{el?.licenseNo}</td>
                                            <td width={"100px"}>
                                                <img src={BASE_URL + el?.profile} className="w-100" />
                                            </td>
                                            <td>
                                                <Link to={"/admin/viewProperties/" + `${el?._id}`}>
                                                    <button className="btn btn-primary">
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                </Link>
                                            </td>
                                            <td>

                                                <button className="btn btn-success mx-2" onClick={() => { handleDelete(el?._id, "true") }} >Active</button>




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