import { Outlet } from "react-router-dom"; 
import Header from "../components/Header";

function LayoutAdmin() {
    return (
        <div className="min-h-screen grid grid-cols-1">                        
            <Header />
            <Outlet />             
        </div>
    );
}
export default LayoutAdmin;