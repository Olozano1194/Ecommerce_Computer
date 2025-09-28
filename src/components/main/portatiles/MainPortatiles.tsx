import img from '../../../assets/Gemini_Generated_Image_aedt7waedt7waedt.png'

const MainPortatiles = () => {
    return (
        <section className="w-full flex flex-col justify-between">
            <h1 className="tex-lg font-bold md:text-2xl lg:text-3xl">Portatiles</h1>
            <hr className="w-38 border-gray-500" />
            <section className="w-full grid grid-cols-2 gap-4 mt-5 md:grid-cols-4 lg:grid-cols-6">
                <article className="w-full border border-solid border-gray-500 cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl focus:-translate-y-2 hover:-translate-y-2 hover:scale-105">
                    <div className='w-full'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Acer</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$800.000</span></p>
                    </div>
                </article>
                <article className="w-full border border-solid border-gray-500 cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl hover:-translate-y-2 hover:scale-105">
                    <div className='w-full'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Lenovo</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$800.000</span></p>
                    </div>
                </article>
                <article className="w-full border border-solid border-gray-500 cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl hover:-translate-y-2 hover:scale-105">
                    <div className='w-full'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Hp</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$800.000</span></p>
                    </div>
                </article>
                <article className="w-full border border-solid border-gray-500 cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl hover:-translate-y-2 hover:scale-105">
                    <div className='w-full'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
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