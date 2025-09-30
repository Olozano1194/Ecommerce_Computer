import { Link } from "react-router-dom";
//form
import { useForm } from "react-hook-form";
//ui
import Section from '../../components/ui/Section';
import Form from "../../components/ui/Form";
import Title from "../../components/ui/Title";
import Span from "../../components/ui/Span";
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import ErrorSpan from "../../components/ui/ErrorSpan";
//Icons
import { RiLoginBoxLine, RiMailFill, RiLockFill } from "react-icons/ri";
//img
import icons from '../../assets/Gemini_Generated_Image_aedt7waedt7waedt.png'

const Login = () => {
    const {  register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);        
    });
    

    return (
       <Section>              
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
                <Button type="submit">
                    <RiLoginBoxLine className='text-secondary-500'/>                    
                    Iniciar Sesión                                    
                </Button>
                <div className="p-2 mt-3 flex gap-3 justify-center text-sm sm:text-base sm:flex-col">
                    <p className="text-center text-gray-200">Olvido la contraseña? <Link to='/' className="text-teal-600 font-bold hover:text-teal-800 transition-colors">Restablecer</Link></p>

                    {/* <p className="text-center text-stone-700">No tienes cuenta? <Link to='/registerUser' className="text-sky-600 font-bold hover:text-sky-700 transition-colors">Registrarse</Link></p> */}
                </div>
            </Form>            
       </Section>
    );
};
export default Login;