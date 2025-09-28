import img from '../../../assets/Gemini_Generated_Image_aedt7waedt7waedt.png'

const MainEscritorio = () => {
    return (
        <section className="w-full flex flex-col justify-between">
            <h1 className="tex-lg font-bold mt-5 md:text-2xl lg:text-3xl">Escritorio</h1>
            <hr className="w-28 border-gray-500 md:w-38" />
            <section className="w-full grid grid-cols-2 gap-4 mt-5 md:grid-cols-4 lg:grid-cols-6">
                <article className="w-full border border-solid border-gray-500 cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl focus:-translate-y-2 hover:-translate-y-2 hover:scale-105">
                    <div className='w-full'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Acer</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$1.800.000</span></p>
                    </div>
                </article>
                <article className="w-full border border-solid border-gray-500 cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl hover:-translate-y-2 hover:scale-105">
                    <div className='w-full'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Lenovo</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$2.300.000</span></p>
                    </div>
                </article>
                <article className="w-full border border-solid border-gray-500 cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl hover:-translate-y-2 hover:scale-105">
                    <div className='w-full'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Hp</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$8.000.000</span></p>
                    </div>
                </article>
                <article className="w-full border border-solid border-gray-500 cursor-pointer flex flex-col justify-center items-center transform transition-all duration-300 pb-2 rounded-lg shadow-2xl hover:-translate-y-2 hover:scale-105">
                    <div className='w-full'>
                        <img src={img} alt="img-portatiles" className='w-full h-24 rounded-t-lg' />
                    </div>
                    <div className='w-full px-2'>
                        <p className="text-lg font-bold md:text-xl">Asus</p>
                        <p>Especificaciones</p>
                        <p><span className='font-bold md:text-lg'>$3.800.000</span></p>
                    </div>
                </article>                
            </section>
        </section>
    );
};
export default MainEscritorio;