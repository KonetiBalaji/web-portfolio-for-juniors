import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import apihandle, { BASE_URL } from "../../API/apihandle";


export default function SingleProperty() {
    const nav = useNavigate()
    const params = useParams()
    const [propertyId, setPropertyId] = useState(params.id)
    const [property, setproperty] = useState("")
    const [loading, setLoading] = useState(true)
    const override = {
        "display": "block",
        "margin": "0 auto",
        "position": "absolute",
        "top": "55%",
        "zIndex": "1",
    }
    useEffect(() => {

        apihandle.singleproperty({ _id: propertyId }).then(
            (data) => {
                setTimeout(() => {
                    setLoading(false)
                }, 1500)
                if (data.data.success) {
                    // toast.success(data.data.message)
                    setproperty(data.data.data)
                }
                else {
                    toast.error(data.data.message)
                }
            }
        ).catch((error) => {
            console.log(error)
            toast.error("Something went wrong!!")
        })
    }, [])

    const handleSubmit = (e) => {
        let authenticate = sessionStorage.getItem('token')
        if (!!authenticate) {
            e.preventDefault(); // Corrected method name
            setLoading(true)
            let data = {
                propertyId: property._id,
                customerId: sessionStorage.getItem('_id'),
                propertyAdvisorId: property?.propertyAdvisorId?._id
            }

            apihandle.addbooking(data, { headers: { authorization: sessionStorage.getItem("token") } })
                .then((res) => {
                    setLoading(false)
                    if (res.data.success === true) {
                        toast.success("Booking successfully successfully");
                        setTimeout(() => {
                            // window.location.reload();
                            nav("/customer/bookings")
                        }, 500)

                    }
                    else {
                        toast.error("Error adding city, " + res.data.message);
                    }
                })
                .catch((error) => {
                    setLoading(false)
                    console.error("Error adding booking:", error);
                    toast.error("Error adding booking");
                });
        }
        else {
            toast.error("Please Login First")
            nav('/login')
            
        }
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
                                        Property Detail
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
                                            Update Property
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="property-single nav-arrow-b">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <img src={BASE_URL + property?.image} className="w-100" alt="" />
                                <div class="row section-t3">
                                    <div class="col-sm-12">
                                        <div class="title-box-d">
                                            <h3 class="title-d">Contact Agent</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-lg-4">
                                        <img src={BASE_URL + property?.propertyAdvisorId?.profile} alt="" class="img-fluid" />
                                    </div>
                                    <div class="col-md-6 col-lg-4">
                                        <div class="property-agent">
                                            <h4 class="title-agent">{property?.propertyAdvisorId?.name}</h4>
                                            <ul class="list-unstyled">
                                                <li class="d-flex justify-content-between">
                                                    <strong>Phone:</strong>
                                                    <span class="color-text-a">{property?.propertyAdvisorId?.contact}</span>
                                                </li>
                                                <li class="d-flex justify-content-between">
                                                    <strong>Email:</strong>
                                                    <span class="color-text-a">{property?.propertyAdvisorId?.email}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <h1>{property?.title}</h1>

                                <h3>&#8377; {property?.price}</h3>
                                <button className="btn btn-success mt-4" onClick={handleSubmit}> Book Now</button>
                                <div class="property-summary">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="title-box-d section-t4 py-5">
                                                <h3 class="title-d">Quick Summary</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="summary-list">
                                        <ul class="list">
                                            <li class="d-flex justify-content-between">
                                                <strong>City:</strong>
                                                <span>{property?.cityId?.name}</span>
                                            </li>
                                            <li class="d-flex justify-content-between">
                                                <strong>Location:</strong>
                                                <span>{property?.location}</span>
                                            </li>
                                            <li class="d-flex justify-content-between">
                                                <strong>Property Type:</strong>
                                                <span>{property?.propertyTypeId?.name}</span>
                                            </li>
                                            <li class="d-flex justify-content-between">
                                                <strong>Status:</strong>
                                                <span>{property?.type}</span>
                                            </li>
                                            <li class="d-flex justify-content-between">
                                                <strong>Description:</strong>
                                                <span>{property?.description}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

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