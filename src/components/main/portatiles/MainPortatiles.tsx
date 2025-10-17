import StarRating from '../star/StarRating';
// img
import img from '../../../assets/Gemini_Generated_Image_aedt7waedt7waedt.png'

const MainPortatiles = ({ product }) => {
    return (
        <section className="w-full bg-gray-800 flex flex-col justify-between px-3 py-5 rounded-lg lg:px-6">
            <h1 className="tex-lg font-bold md:text-2xl lg:text-3xl">Portatiles</h1>
            <hr className="w-28 border-gray-500 md:w-38" />
            <section className="w-full grid grid-cols-2 gap-3 mt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <article className="w-full cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl focus:-translate-y-2 hover:-translate-y-2 hover:scale-105">
                    <div className='w-[85%]'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <StarRating score={product} />
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Acer</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$800.000</span></p>
                    </div>
                </article>
                <article className="w-full cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl hover:-translate-y-2 hover:scale-105">
                    <div className='w-[85%]'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <StarRating score={product} />
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Lenovo</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$800.000</span></p>
                    </div>
                </article>
                <article className="w-full cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl hover:-translate-y-2 hover:scale-105">
                    <div className='w-[85%]'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <StarRating score={product} />
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Hp</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$800.000</span></p>
                    </div>
                </article>
                <article className="w-full cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl hover:-translate-y-2 hover:scale-105">
                    <div className='w-[85%]'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <StarRating score={product} />
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Asus</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$800.000</span></p>
                    </div>
                </article>                
            </section>
        </section>
    );
};
export default MainPortatiles;