import { Outlet } from "react-router-dom"; 
import Header from "../components/Header";

function LayoutAdmin() {
    return (
        <section className="min-h-screen grid grid-cols-1">                        
            <Header />
            <div className="w-full">
                <Outlet /> 
            </div>                        
        </section>
    );
}
export default LayoutAdmin;