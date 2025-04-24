export default function Bookings(){

    return(
        <>
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
        
    <div className="row m-7">
  <div className="col-md-1"></div>
  <div className="col-md-10">
  <h1 className="text-center m-3">Bookings</h1>
  <table className="table table-bordered  text-center  ">
    
  <thead>
    <tr>
      <th scope="col">Property ID</th>
      <th scope="col">Dealer Details</th>
      <th scope="col">Booking Status</th>
      <th scope="col">Customer Details</th>
      <th  scope="col">Booking Date</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">< input type="text"/></th>
      <td>
        <input type="text"/>
      </td>
      <td>
        < input/>
      </td>
      <td>
      <input type="text"></input>
      </td>
      <td>
      <input type="text"></input>
      </td>
      
    </tr>
    <tr>
      <th scope="row">< input type="text"/></th>
      <td>
        <input type="text"/>
      </td>
      <td>
        < input type="email"/>
      </td>
      <td>
      <input type="text"></input>
      </td>
      <td>
      <input type="text"></input>
      </td>
      
    </tr>
    <tr>
      <th scope="row">< input type="text"/></th>
      <td>
        <input type="text"/>
      </td>
      <td>
        < input type="email"/>
      </td>
      <td>
      <input type="text"></input>
      </td>
      <td>
      <input type="text"></input>
      </td>
      
    </tr>
  </tbody>
</table>
  </div>

</div>
        </>
    )
}