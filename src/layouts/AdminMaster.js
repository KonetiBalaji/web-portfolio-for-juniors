import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "./Footer";

export default function AdminMaster() {

    return (

        <>
            <AdminHeader />
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}