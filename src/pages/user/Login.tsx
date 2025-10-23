import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// Hooks
import { useAuth } from '../../hooks/useAuth';
//form
import { useForm } from "react-hook-form";
//ui
import Section from '../../components/ui/Section';
import Form from '../../components/ui/Form';
import Title from '../../components/ui/Title';
import Span from '../../components/ui/Span';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import ErrorSpan from "../../components/ui/ErrorSpan";
//Mensajes
import { toast } from 'react-hot-toast';
//Icons
import { RiLoginBoxLine, RiMailFill, RiLockFill } from 'react-icons/ri';
//img
import icons from '../../assets/Gemini_Generated_Image_aedt7waedt7waedt.png';
// Models
// Dto
import type { LoginUserDto } from '../../models/dtos/UserDto';


const LoginPage = () => {
    const {  register, handleSubmit, formState: {errors} } = useForm<LoginUserDto>();
    const { login, isLoading } = useAuth();
    const navigate = useNavigate();
    const [_, setIsRedirecting] = useState(false);

    const onSubmit = handleSubmit( async (formData: LoginUserDto) => {       
        try {            
            setIsRedirecting(false);
            
            await login({
            email: formData.email, 
            password: formData.password
        });
            
            toast.success('¡Inicio de sesión exitoso!');             
            navigate('/layoutAdmin');
                                   
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error al iniciar sesión';
            toast.error(errorMessage);
            console.error('Login error:', error);                        
        }
    });    
    

    return (        
       <Section className='w-full flex flex-col justify-center items-center'>        
        <Form onSubmit={onSubmit}>            
            <div className='w-full grid grid-cols-1 content-center'>
                <Title><img className="w-10 h-10 rounded-lg" src={icons} alt="logo del desarrollador" /><span>E-<span className="text-teal-800">Commerce</span></span></Title>
            </div>
            {/* Email */}
            <label htmlFor="email">
                    <Span><RiMailFill className='lg:text-2xl' />Correo</Span>
                    <Input type="email" placeholder="Escribir correo electrónico"
                        {...register('email',{
                            required: {
                                value: true,
                                message: 'Correo requerido'
                                },
                                setValueAs: e => e.toLowerCase(),                                            
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Correo invalido'
                                },
                        })}                                                
                    />
            </label>
            {
                errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>
            }
            {/* Password */}
            <label htmlFor="password">
                    <Span><RiLockFill className='lg:text-2xl xl:text-xl' />Contraseña</Span>
                    <Input type="password" placeholder="Escriba su contraseña"
                        {...register('password',{
                            required: {
                                value: true,
                                message: 'Contraseña requerida'
                            },
                            minLength: {
                                value: 5,
                                message: 'La contraseña debe tener minimo 5 carácteres'
                            },
                            maxLength: {
                                value: 20,
                                message: 'La contraseña debe tener como máximo 20 carácteres'
                            },                            
                        })}  
                    />
            </label>
            {
                errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>
            }
            {/* Btn */}
            <Button type="submit" disabled={isLoading}>
                <RiLoginBoxLine className='text-secondary-500'/>                    
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}                                    
            </Button>
            <div className="p-2 mt-3 flex gap-3 justify-center text-sm sm:text-base sm:flex-col">
                <p className="text-center text-gray-200">Olvido la contraseña? <Link to='/' className="text-teal-600 font-bold hover:text-teal-800 transition-colors">Restablecer</Link></p>

                {/* <p className="text-center text-stone-700">No tienes cuenta? <Link to='/registerUser' className="text-sky-600 font-bold hover:text-sky-700 transition-colors">Registrarse</Link></p> */}
            </div>
        </Form>            
       </Section>
    );
};
export default LoginPage;