import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import apihandle from "../../API/apihandle";
import { ClipLoader } from "react-spinners"

export default function AddPropertyType() {
    const nav = useNavigate()
    const [propertyType, setPropertyType] = useState("")
    const [propertyTypeImage, setPropertyTypeImage] = useState({})
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
        data.append("name", propertyType);
        data.append("image", propertyTypeImage);

        apihandle.addpropertyType(data, { headers: { authorization: sessionStorage.getItem("token") } })
            .then((res) => {
                setLoading(false)

                if (res.data.success === true) {
                    toast.success("Property Type added successfully");
                    setTimeout(() => {
                        // window.location.reload();
                        setPropertyType('');
                        setPropertyTypeImage('')
                        nav("/admin/managePropertyType")
                    }, 500)

                }
                else {
                    toast.error("Error adding property type, " + res.data.message);
                }
            })
            .catch((error) => {
                setLoading(false)
                console.error("Error adding property type:", error);
                toast.error("Error adding property type");
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
                                            Add Property Type
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

                            <h1 className="text-center m-2">Add Property Type</h1>
                            <form className="form-control " onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                                        Property Type
                                    </label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control  " id="inputEmail3" value={propertyType} onChange={(e) => { setPropertyType(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="row mb-3 my-2">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                                        Property Type Image
                                    </label>
                                    <div className="col-sm-10">
                                        <input type="file" className="form-control" id="inputPassword3" value={imageName} onChange={(e) => { setImageName(e.target.value); setPropertyTypeImage(e.target.files[0]); }} />
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