import { Link } from "react-router-dom";
//react-menu
import { Menu, MenuButton } from '@headlessui/react';
import { GiShoppingCart } from "react-icons/gi";


const HeaderNavBarUser = () => {
    return (
        <nav className="w-full flex items-center justify-end gap-x-3">
                <Menu>
                    <MenuButton>
                        <Link to="/layoutAdmin/registrarUsuario">Crear tu Cuenta </Link>
                    </MenuButton>
                    <MenuButton>
                        <Link to="/layoutAdmin/login">Ingresar</Link>
                    </MenuButton>
                    <MenuButton>
                        <Link to="/layoutAdmin/misCompras">Mis compras</Link>
                    </MenuButton>
                    <MenuButton><GiShoppingCart /></MenuButton>
                </Menu>                        
            </nav>
    );
}
export default HeaderNavBarUser;