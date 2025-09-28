import MainPortatiles from "./portatiles/MainPortatiles";
import MainEscritorio from "./escritorio/MainEscritorio";


const Main = () => {
    return (
        <main className="w-full flex flex-col px-4 md:px-7">
            <MainPortatiles />
            <MainEscritorio />            
        </main>
        
    );
};
export default Main;