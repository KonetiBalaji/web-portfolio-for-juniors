import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Contact(){

  const [name,setName]= useState()
  const [email,setEmail]= useState()
  const [subject,setSubject]= useState()
  const [message,setMessage]= useState()
  const nav = useNavigate()

  const handleForm=(e)=>{
    e.preventDefault()
      let Data={
        name:name,
        email:email,
        subject:subject,
        message:message
      }

      axios.post("http://localhost:4000/api/contact/add",Data)
      .then((res)=>{
        toast(res.data.message,{
          position:'top-center'
        })
        setTimeout(()=>{
          nav("")
        },2000)
      })
      .catch((err)=>{
        toast.error(err.message)
        console.log(err)
      })
    
  }

  return(
    <>
    <>
    

  <main id="main">
    {/* ======= Intro Single ======= */}
    <section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">Contact US</h1>
              <span className="color-text-a">
              Whether you're looking to buy, sell, or simply have questions about the real estate market, we're here to help. Contact us today, and one of our experienced agents will be in touch with you shortly.
              </span>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-box d-flex justify-content-lg-end"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    {/* End Intro Single*/}
    {/* ======= Contact Single ======= */}
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-map box">
              <div id="map" className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
                  width="100%"
                  height={450}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 section-t8">
            <div className="row">
              <div className="col-md-7">
                <form
                  action=""
                  method="post"
                  role="form"
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Your Name"
                          required=""
                          value={name} onChange={(e)=>{setName(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Your Email"
                          required=""
                          value={email} onChange={(e)=>{setEmail(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Subject"
                          required=""
                          value={subject} onChange={(e)=>{setSubject(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          cols={45}
                          rows={8}
                          placeholder="Message"
                          required=""
                          defaultValue={""}
                          value={message} onChange={(e)=>{setMessage(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 my-3">
                      <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" onClick={handleForm} className="btn btn-a">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5 section-md-t3">
                <div className="icon-box section-b2">
                  <div className="icon-box-icon">
                    <span className="bi bi-envelope" />
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Say Hello</h4>
                    </div>
                    <div className="icon-box-content">
                      <p className="mb-1">
                        Email.
                        <span className="color-a">contact@example.com</span>
                      </p>
                      <p className="mb-1">
                        Phone.
                        <span className="color-a">+54 356 945234</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="icon-box section-b2">
                  <div className="icon-box-icon">
                    <span className="bi bi-geo-alt" />
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Find us in</h4>
                    </div>
                    <div className="icon-box-content">
                      <p className="mb-1">
                        Manhattan, Nueva York 10036,
                        <br /> EE. UU.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box-icon">
                    <span className="bi bi-share" />
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Social networks</h4>
                    </div>
                    <div className="icon-box-content">
                      <div className="socials-footer">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-instagram"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Single*/}
  </main>
  {/* End #main */}

  <ToastContainer/>

   
</>

    </>
  );
}