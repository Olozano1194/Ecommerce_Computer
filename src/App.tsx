import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Context
import AuthProvider  from './context/AuthContext';
// Components
import Main from './components/main/Main';
// Layout
import LayoutAdmin from './layout/LayoutAdmin';
// pages
// categorias
import Portatiles from './pages/categorias/Portatiles';
import PcEscritorio from './pages/categorias/PcEscritorio';
import PcGamer from './pages/categorias/PcGamer';
// User
import RegistroUser from './pages/user/RegistroUser';
import Login from './pages/user/Login';
import MisCompras from './pages/user/MisCompras';
import Carrito from './pages/user/Carrito';
// Errors
import Error404 from './pages/Error404';
//Notificaciones
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to='/layoutAdmin' />} />
          <Route path="layoutAdmin" element={<LayoutAdmin />}>
            <Route index element={<Main />} /> 
            {/* Categorias */}
            <Route path="portatiles" element={<Portatiles />} /> 
            <Route path="pcEscritorio" element={<PcEscritorio />} /> 
            <Route path="pcGamer" element={<PcGamer />} />
            {/* User */}
            <Route path='registrarUsuario' element={<RegistroUser />} />
            <Route path='login' element={<Login />} />
            <Route path='misCompras' element={<MisCompras />} />
            <Route path='carrito' element={<Carrito />} />
          </Route>
          <Route path="*" element={<Error404 />} />        
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }} 
        />
      </Router>
    </AuthProvider>       
  )
}
export default App
