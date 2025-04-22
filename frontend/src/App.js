import './App.css';
import About from './About';
import Contact from './Contact';
import Agentsingle from './Agentsingle';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './Error';
import Master from './layouts/Master';
import Home from './Home';
import CustomerRegister from './layouts/CustomerRegister';
import AdminMaster from './layouts/AdminMaster';
import Welcome from './Components/Admin/Welcome';
import AddCity from './Components/Admin/AddCity';
import VerifyProperty from './Components/Admin/VerifyProperty';
import CustomerList from './Components/Admin/CustomerList';
import Messages from './Components/Admin/Messages';
import Bookings from './Components/Admin/Bookings';
import DealerMaster from './layouts/DealerMaster';
import DealerWelcome from './Components/Dealer/DealerWelcome';
import Login from './layouts/Login';
import DealerRegister from './layouts/DealerRegister';
import ManageCity from './Components/Admin/ManageCity';
import EditCity from './Components/Admin/EditCity';
import AddPropertyType from './Components/Admin/AddPropertyType';
import ManagePropertyType from './Components/Admin/ManagePropertyType';
import EditPropertyType from './Components/Admin/EditPropertyType';
import DealerList from './Components/Admin/DealerList';
import DealerRequestList from './Components/Admin/DealerRequestList';
import ManageProperty from './Components/Dealer/ManageProperties';
import AddProperty from './Components/Dealer/AddProperty';
import DealerBookings from './Components/Dealer/DealerBookings';
import EditProperty from './Components/Dealer/EditProperty';
import CustomerProperties from './Components/Customer/CustomerProperties';
import SingleProperty from './Components/Customer/SingleProperty';
import CustomerBookings from './Components/Customer/CustomerBookings';
import ChangePassword from './Components/Customer/ChangePassword';



function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Error />} />

          <Route path="/" element={<Master />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/customerProperties" element={<CustomerProperties />} />
            <Route path="/property/single/:id" element={<SingleProperty />} />
            <Route path="/customer/bookings" element={<CustomerBookings />} />
            <Route path="/agentsingle" element={<Agentsingle />} />
            <Route path="/login" element={<Login />} />
            <Route path='contact' element={<Contact/>}/>
            <Route path="/customerRegister" element={<CustomerRegister />} />
            <Route path="/dealerRegister" element={<DealerRegister />} />
            <Route path="/changePassword" element={<ChangePassword />} />
          </Route>

          <Route path="/admin" element={<AdminMaster />}>
            <Route path="/admin/dashboard" element={<Welcome />} />

            <Route path="/admin/customerList" element={<CustomerList />} />
            <Route path="/admin/dealerList/approved" element={<DealerList />} />
            <Route path="/admin/dealerList/requests" element={<DealerRequestList />} />
            <Route path="/admin/viewProperties/:id" element={<ManageProperty />} />


            <Route path="/admin/addCity" element={<AddCity />} />
            <Route path="/admin/manageCity" element={<ManageCity />} />
            <Route path="/admin/editCity/:id" element={<EditCity />} />

            <Route path="/admin/addPropertyType" element={<AddPropertyType />} />
            <Route path="/admin/managePropertyType" element={<ManagePropertyType />} />
            <Route path="/admin/editPropertyType/:id" element={<EditPropertyType />} />

            <Route path="/admin/verifyProperty" element={<VerifyProperty />} />

            <Route path="/admin/chats" element={<Messages />} />
            <Route path="/admin/Bookings" element={<CustomerBookings />} />
            <Route path="/admin/changePassword" element={<ChangePassword />} />
          </Route>


          <Route path="/dealer" element={<DealerMaster />} >
            <Route path="/dealer/dashboard" element={<DealerWelcome />} />

            <Route path="/dealer/addProperty" element={<AddProperty />} />
            <Route path="/dealer/editProperty/:id" element={<EditProperty />} />
            <Route path="/dealer/manageProperty" element={<ManageProperty />} />

            <Route path="/dealer/chat" element={<Messages />} />
            <Route path="/dealer/bookings" element={<CustomerBookings />} />
            <Route path="/dealer/changePassword" element={<ChangePassword />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
