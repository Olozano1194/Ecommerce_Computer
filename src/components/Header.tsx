import HeaderSearch from "./header/HeaderSearch";
import HeaderNavBar from "./header/HeaderNavBar";
import HeaderNavBarUser from "./header/HeaderNavBarUser";

const Header = () => {
    return (
        <header className="w-full flex flex-col items-center px-5 py-7">
            <HeaderSearch />
            <section className="w-full cursor-pointer grid grid-cols-1 items-center mt-7 md:grid-cols-2">
                <HeaderNavBar />
                <HeaderNavBarUser />
            </section>         
        </header>              
    );
};
export default Header; 