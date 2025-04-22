import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Apihandle, { BASE_URL } from "../../API/apihandle"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners";

export default function CustomerBookings() {
    var [bookings, setbookings] = useState()
    var [userType, setuserType] = useState()
    var [cityId, setcityId] = useState()
    const [loading, setLoading] = useState(true)
    const override = {
        "display": "block",
        "margin": "0 auto",
        "position": "absolute",
        "top": "55%",
        "zIndex": "1",
    }
    const nav = useNavigate();
    let authenticate = sessionStorage.getItem('token')

    useEffect(() => {
        if (!authenticate) {
            toast.error("Please Login First")
            nav("/login")
        }
        else {
            let data = {}
            setuserType(sessionStorage.getItem('userType'))
            if (userType == "3") {
                data = { customerId: sessionStorage.getItem('_id') }
            }
            else if (userType == "2") {
                data = { propertyAdvisorId: sessionStorage.getItem('_id') }
            }
            else {
                data = {}
            }
            Apihandle.allbooking(data, { headers: { authorization: sessionStorage.getItem("token") } })
                .then((res) => {
                    // console.log(res.data);
                    setLoading(false)
                    if (res.data.success === true) {
                        setbookings(res.data.data);
                    }
                    else {
                        toast.error("Error in bookings, " + res.data.message);
                    }
                })
        }

    }, [])

    const handleDelete = (_id, status) => {
        setLoading(true)
        // window.confirm("Are you sure to delete city?");
        // console.log(_id);
        Apihandle.updatebooking({ _id: _id, status: status }, { headers: { authorization: sessionStorage.getItem("token") } })
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
                                        Bookings
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
                                            My Bookings
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between">
                                <h4 className="text-center ">Manage Bookings</h4>
                                {/* <Link to="/admin/addCity" className="btn btn-dark btn-sm"> Add New  </Link> */}
                            </div>

                            <table className="table table-bordered text-center  ">

                                <thead>
                                    <tr>
                                        <th scope="col">Sr no.</th>
                                        {userType != 2 ? <th scope="col">Property Advisor</th> : <></>}
                                        <th scope="col">Property </th>
                                        {userType != 3 ? <th scope="col">Customer </th> : <></>}

                                        <th scope="col">Picture</th>
                                        <th scope="col">Status</th>
                                        {userType != 1 ?
                                            <th scope="col">Action</th>
                                            :
                                            <></>
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings?.map((el, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            {userType != 2 ?
                                                <td width={"200px"}>
                                                    <img src={BASE_URL + el?.propertyAdvisorId?.profile} className="w-50" /> <br />
                                                    {el?.propertyAdvisorId?.name} <br />
                                                    {el?.propertyAdvisorId?.email} <br />
                                                    {el?.propertyAdvisorId?.contact} <br />
                                                </td> : <></>}
                                            <td width={"200px"}>
                                                {el?.propertyId?.title} <br />
                                                {el?.propertyId?.location} <br />
                                                {el?.propertyId?.cityId?.name} <br />
                                                &#8377;{el?.propertyId?.price} <br />

                                            </td>
                                            {userType != 3 ?
                                                <td width={"200px"}>
                                                    <img src={BASE_URL + el?.customerId?.profile} className="w-50" /> <br />
                                                    {el?.customerId?.name} <br />
                                                    {el?.customerId?.email} <br />
                                                    {el?.customerId?.contact} <br />
                                                </td>
                                                : <></>}
                                            <td width={"200px"}>
                                                <img src={BASE_URL + el?.propertyId?.image} className="w-100" />
                                            </td>
                                            <td>{el?.status}</td>
                                            {userType == 3 ?
                                                <td>
                                                    {el?.status == "Pending" ?
                                                        <button className="btn btn-danger mx-2" onClick={() => { handleDelete(el?._id, "Canceled") }}>Cancel</button>
                                                        : <></>
                                                    }
                                                </td> : <></>}
                                            {userType == 2 ?
                                                <td>
                                                    {el?.status == "Pending" ?
                                                        <>
                                                            <button className="btn btn-success mx-2" onClick={() => { handleDelete(el?._id, "Approved") }}>Approve</button>
                                                            <button className="btn btn-danger mx-2" onClick={() => { handleDelete(el?._id, "Declined") }}>Decline</button>
                                                        </>
                                                        : el?.status == "Approved" ?
                                                            <button className="btn btn-success mx-2" onClick={() => { handleDelete(el?._id, "Completed") }}>Close Deal</button>
                                                            : <></>
                                                    }
                                                </td> : <></>}
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