import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
//react-menu
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';


const HeaderNavBar = () => {
    return (
        <nav className="w-full flex items-center gap-x-3">
            <Menu>
                <MenuButton className="flex items-center cursor-pointer ap-x-2 hover:bg-gray-500 p-2 rounded-lg transition-colors">
                    Categorias<RiArrowDownSLine />
                </MenuButton>
                <MenuItems anchor='bottom' className="cursor-pointer mt-3 bg-primary outline-none p-4 rounded-lg">
                    <MenuItem as='div' className="p-0">
                        <Link to="/layoutAdmin/portatiles" className="rounded-lg transition-colors text-white hover:bg-gray-500 flex items-center gap-x-3 py-2 px-2 flex-1">Portatiles</Link>
                    </MenuItem>
                    <hr className="my-4 border-gray-500" />
                    <MenuItem as='div' className="p-0">
                        <Link to="/layoutAdmin/pcEscritorio" className="rounded-lg transition-colors text-white hover:bg-gray-500 flex items-center gap-x-3 py-2 px-2 flex-1">Pc Escritorio</Link>
                    </MenuItem>
                    <hr className="my-4 border-gray-500" />
                    <MenuItem as='div' className="p-0">
                        <Link to="/layoutAdmin/pcGamer" className="rounded-lg transition-colors text-white hover:bg-gray-500 flex items-center gap-x-3 py-2 px-2 flex-1">Pc Gamer</Link>
                    </MenuItem>                   
                </MenuItems>
            </Menu>
            <Menu>
                <MenuButton>
                    <Link to="/">
                        Ofertas
                    </Link>                   
                </MenuButton>
            </Menu>
            <Menu>
                <MenuButton>
                    <Link
                        to="/"
                        className=""
                    >
                        Mas vendidos
                    </Link>
                </MenuButton>
            </Menu>
        </nav>       
    );
};
export default HeaderNavBar;