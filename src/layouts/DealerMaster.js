import { Outlet } from "react-router-dom";
import DealerHeader from "./DealerHeader";
import Footer from "./Footer";

export default function DealerMaster() {

    return (

        <>
            <DealerHeader />
            <main id="main" >
                <Outlet />
            </main>
            <Footer />
        </>
    )
}