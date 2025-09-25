import { Link } from 'react-router-dom';
import imgHeader from '../../assets/Gemini_Generated_Image_aedt7waedt7waedt.png';
import { BiSearchAlt } from 'react-icons/bi';

const HeaderSearch = () => {
    return (
        <section className='w-full flex justify-between'>
            <Link to="/">
                <img 
                    src={imgHeader} 
                    alt="Logotipo del E-commerce"
                    className='w-12 rounded-xl lg:w-24' 
                />
            </Link>           
            <search className='w-sm'>
                <form action="">
                    <label htmlFor="" className="border border-solid border-gray-500 flex items-center gap-x-1 p-2 rounded-lg focus-within:border-green-600">
                        <BiSearchAlt /> |
                        <input 
                            type="search"
                            className="border-none outline-none"
                            placeholder="Buscar Producto" 
                        />
                    </label>
                </form>                    
            </search>
            
        </section>
    );
};
export default HeaderSearch;