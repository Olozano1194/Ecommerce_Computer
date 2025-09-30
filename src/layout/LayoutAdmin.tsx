import { Outlet } from "react-router-dom"; 
import Header from "../components/Header";

function LayoutAdmin() {
    return (
        <section className="min-h-screen grid grid-cols-1">                        
            <Header />
            <main className="w-full">
                <Outlet /> 
            </main>                        
        </section>
    );
}
export default LayoutAdmin;