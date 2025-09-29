import MainPortatiles from "./portatiles/MainPortatiles";
import MainEscritorio from "./escritorio/MainEscritorio";
import MainTablet from "./tablet/MainTablet";


const Main = () => {
    return (
        <main className="w-full flex flex-col px-4 md:px-7">
            <MainPortatiles />
            <MainEscritorio />
            <MainTablet />            
        </main>
        
    );
};
export default Main;