import axios from "axios"
export const BASE_URL = "https://web-portfolio-for-juniors.onrender.com/";

class Apihandle{
    getToken(){
        let obj={
            authorization:sessionStorage.getItem("token")
        }
        return obj
    } 

    customerRegister(data){
        return axios.post(BASE_URL+"customer/register", data)
    }
    dealerRegister(data){
        return axios.post(BASE_URL+"propertyadvisor/register", data)
    }

    login(data){
        return axios.post(BASE_URL+"admin/login", data)
    }

    adminDashboard(data){
        return axios.post(BASE_URL+"admin/dashboard", data, {headers:this.getToken()})
    }
    dealerDashboard(data){
        return axios.post(BASE_URL+"propertyadvisor/dashboard", data, {headers:this.getToken()})
    }
    allCustomers(data){
        return axios.post(BASE_URL+"admin/customer/all", data, {headers:this.getToken()})
    }
    customerChangeStatus(data){
        return axios.post(BASE_URL+"admin/customer/block", data, {headers:this.getToken()})
    }
    allDealers(data){
        return axios.post(BASE_URL+"admin/propertAdvisor/all", data, {headers:this.getToken()})
    }
    dealerChangeStatus(data){
        return axios.post(BASE_URL+"admin/propertAdvisor/block", data, {headers:this.getToken()})
    }

    // city

    addcity(data){
        return axios.post(BASE_URL+"admin/city/add",data,{headers:this.getToken()})
    }
    allcity(data){
        return axios.post(BASE_URL+"admin/city/all",data)
    }
    singlecity(data){
        return axios.post(BASE_URL+"admin/city/single",data)
    }
    updatecity(data){
        return axios.post(BASE_URL+"admin/city/update",data,{headers:this.getToken()})
    }
    deletecity(data){
        return axios.post(BASE_URL+"admin/city/status",data,{headers:this.getToken()})
    }


    // property type

    addpropertyType(data){
        return axios.post(BASE_URL+"admin/propertyType/add",data,{headers:this.getToken()})
    }
    allpropertyType(data){
        return axios.post(BASE_URL+"admin/propertyType/all",data)
    }
    singlepropertyType(data){
        return axios.post(BASE_URL+"admin/propertyType/single",data)
    }
    updatepropertyType(data){
        return axios.post(BASE_URL+"admin/propertyType/update",data,{headers:this.getToken()})
    }
    deletepropertyType(data){
        return axios.post(BASE_URL+"admin/propertyType/status",data,{headers:this.getToken()})
    }



    // property 

    addproperty(data){
        return axios.post(BASE_URL+"propertyadvisor/property/add",data,{headers:this.getToken()})
    }
    allproperty(data){
        return axios.post(BASE_URL+"propertyadvisor/property/all",data)
    }
    singleproperty(data){
        return axios.post(BASE_URL+"propertyadvisor/property/single",data)
    }
    updateproperty(data){
        return axios.post(BASE_URL+"propertyadvisor/property/update",data,{headers:this.getToken()})
    }
    deleteproperty(data){
        return axios.post(BASE_URL+"propertyadvisor/property/status",data,{headers:this.getToken()})
    }

    // booking

    addbooking(data){
        return axios.post(BASE_URL+"customer/property/book",data,{headers:this.getToken()})
    }
    allbooking(data){
        return axios.post(BASE_URL+"customer/booking/all",data, {headers:this.getToken()})
    }

    updatebooking(data){
        return axios.post(BASE_URL+"customer/booking/update",data,{headers:this.getToken()})
    }

    changePassword(data){
        return axios.post(BASE_URL+"customer/changePassword",data,{headers:this.getToken()})
    }


}

const api = new Apihandle();
export default api;