import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Apihandle, { BASE_URL } from "../../API/apihandle";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";


export default function CustomerProperties() {

    
    var [propertyTypeId, setpropertyTypeId] = useState("")
    var [cityId, setcityId] = useState("")
    var [type, settype] = useState("")
    var [cities, setcities] = useState([])
    var [propertyTypes, setpropertyTypes] = useState([])
    var [data, setData] = useState({ status: "Approved" })
    var [properties, setproperties] = useState([])
    const [loading, setLoading] = useState(true)
    const override = {
        "display": "block",
        "margin": "0 auto",
        "position": "absolute",
        "top": "55%",
        "zIndex": "1",
    }

    useEffect(() => {
        Apihandle.allcity({ status: true }, { headers: { authorization: sessionStorage.getItem("token") } })
            .then((res) => {
                // console.log(res.data);
                setcities(res.data.data);
            })

        Apihandle.allpropertyType({ status: true }, { headers: { authorization: sessionStorage.getItem("token") } })
            .then((res) => {
                // console.log(res.data);
                setpropertyTypes(res.data.data);
            })
        
        getProperties()

        // Apihandle.allproperty(data, { headers: { authorization: sessionStorage.getItem("token") } })
        //     .then((res) => {
        //         // console.log(res.data);
        //         setLoading(false)
        //         if (res.data.success === true) {


        //             setproperties(res.data.data);
        //         }
        //         else {
        //             toast.error("Error in properties, " + res.data.message);
        //         }
        //     })
    }, [])
    
    const getProperties = ()=>{
        Apihandle.allproperty(data, { headers: { authorization: sessionStorage.getItem("token") } })
            .then((res) => {
                // console.log(res.data);
                setLoading(false)
                if (res.data.success === true) {

                    console.log(res.data.data);
                    setproperties(res.data.data);
                }
                else {
                    toast.error("Error in properties, " + res.data.message);
                }
            })
    }

    const changePropertyType = (e)=>{
        console.log("yes");
        setpropertyTypeId(e.target.value)
        if(!e.target.value){
            delete data.propertyTypeId
        }
        else{
            data.propertyTypeId = e.target.value
        }
        getProperties()
    }

    const changeCity = (e)=>{
        setcityId(e.target.value)
        if(!e.target.value){
            delete data.cityId
        }
        else{
            data.cityId = e.target.value
        }
        getProperties()
    }

    const changeType = (e)=>{
        settype(e.target.value)
        if(!e.target.value){
            delete data.type
        }
        else{
            data.type = e.target.value
        }
        getProperties()
    }

    var nav = useNavigate();
    return (

        <>
            <section class="intro-single">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-8">
                            <div class="title-single-box">
                                <h1 class="title-single">Our Amazing Properties</h1>
                                <span class="color-text-a">Grid Properties</span>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Properties Grid
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="property-grid grid">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-2">
                                    <div class="grid-option">
                                        <form>
                                            <select class="custom-select"  onChange={changePropertyType}>
                                                <option selected value="">Choose By Category</option>
                                                {propertyTypes.map((el, index)=>(
                                                    <option value={el?._id}>{el?.name}</option>
                                                ))}
                                                
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <div class="grid-option">
                                        <form>
                                        <select class="custom-select" onChange={changeCity}>
                                                <option selected  value="">Choose By City</option>
                                                {cities.map((el, index)=>(
                                                    <option value={el?._id}>{el?.name}</option>
                                                ))}
                                                
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <div class="grid-option">
                                        <form>
                                            <select class="custom-select" onChange={changeType}>
                                                <option selected value="">Choose By Type</option>
                                                <option value="Sale">On Sale</option>
                                                <option value="Rent">On Rent</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>


                            </div>

                        </div>
                        {properties.map((el, index) => (
                            <div class="col-md-4">
                                <div class="card-box-a card-shadow">
                                    <div class="img-box-a">
                                        <img src={BASE_URL + el?.image} width="450px" height={400} alt=""  />
                                    </div>
                                    <div class="card-overlay">
                                        <div class="card-overlay-a-content">
                                            <div class="card-header-a">
                                                <h2 class="card-title-a">
                                                    <Link to={"/property/single/" + el?._id}>
                                                        {el?.propertyTypeId?.name} in
                                                        <br /> {el?.cityId?.name}</Link>
                                                </h2>
                                            </div>
                                            <div class="card-body-a">
                                                <div class="price-box d-flex">
                                                    <span class="price-a">{el?.type} | &#8377; {el?.price}</span>
                                                </div>
                                                <Link to={"/property/single/" + el?._id} class="link-a">Click here to view
                                                    <span class="bi bi-chevron-right"></span>
                                                </Link>
                                            </div>
                                            <div class="card-footer-a">
                                                {el?.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}