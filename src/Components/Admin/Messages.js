export default function Messages(){

    return(

        <>
<section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">
                Messages
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
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  City
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
         <div className="col-sm-12 section-t8 text-center">
  <div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-6">
        
      <form
    
      >
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control form-control-lg form-control-a"
                placeholder="Email"
                required=""
              />
            </div>
          
          
          </div>
          <div className="col-md-12 mb-3">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control form-control-lg form-control-a"
                placeholder="Password"
                required=""
              />
            </div>
          </div>
          
          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-a">
              Login 
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    )
}