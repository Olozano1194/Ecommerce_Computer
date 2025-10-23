import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
// Hooks
import { useAuth } from '../../hooks/useAuth';
//img
import icons from '../../assets/Gemini_Generated_Image_aedt7waedt7waedt.png';
//ui
import Section from '../../components/ui/Section';
import Form from '../../components/ui/Form';
import Title from '../../components/ui/Title';
import Span from '../../components/ui/Span';
import ErrorSpan from '../../components/ui/ErrorSpan';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
//icons
import { CiMail } from "react-icons/ci";
//Mensajes
import { toast } from 'react-hot-toast';
import { RiLockPasswordLine, RiLoginBoxLine } from "react-icons/ri";
// Models
// Dtos
import type { CreateUserDto, RegisterFormDto } from '../../models/dtos/UserDto';

const RegistroUser = () => {
    const { register: registerField, handleSubmit, formState: {errors}, watch, reset } = useForm<RegisterFormDto>({
        defaultValues: {
            email: '',
            nombre: '',
            apellido: '',
            password: '',
            password_confirmacion: '', 
        },      
    });
    const { register, isLoading, clearError } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit( async (data: RegisterFormDto) => {
        clearError();

        try {
            // Crearmos el objeto omitiendo el password_confirmacion
            const userData: CreateUserDto = {
                email: data.email,
                password: data.password,
                nombre: data.nombre,
                apellido: data.apellido
            };
            console.log('Datos a enviar:', userData);

            await register(userData);
            toast.success('¡Usuario creado exitosamente!');  
            reset();
            navigate('/');
        } catch (error: any) {
            let errorMessage = 'Error al crear el usuario';
            if (error.response?.data?.password) {
                const passwordErrors = error.response.data.password;
                if (Array.isArray(passwordErrors)) {
                    const messages = passwordErrors.map((err: string) => {
                        // Traducir mensajes de error comunes
                        if (err.includes('too short')) {
                            return 'La contraseña debe tener al menos 8 caracteres';
                        }
                        if (err.includes('too common')) {
                            return 'La contraseña es demasiado común';
                        }
                        if (err.includes('entirely numeric')) {
                            return 'La contraseña no puede contener solo números';
                        }
                        return err;
                    });
                    errorMessage = messages.join('\n');
                }
            } else if (error.response?.data) {
                errorMessage = Object.values(error.response.data).flat().join('\n');
            }
            toast.error(errorMessage);
            console.error('Login error:', error); 
        }
                
    });

    
    return (
        <Section>
            <Form onSubmit={onSubmit}>
                <div className='w-full flex justify-center'>
                    <Title><img className="w-8 h-6 rounded-lg" src={icons} alt="logo del desarrollador" />Crear <span className="pl-2 text-teal-300">Usuario</span></Title>
                </div>
                <label htmlFor="name"><Span>Nombre</Span>
                    <Input type="text" placeholder="Escribe su nombre"
                        {...registerField('nombre',{
                            required: {
                                value: true,
                                message: 'Nombre requerido'
                            },
                            minLength: {
                                value: 4,
                                message: 'El nombre debe tener como minimo 4 letras'
                            },
                            maxLength: {
                                value: 20,
                                message: 'El nombre debe tener como maximo 20 letras'
                            },
                            pattern: {
                                value: /^[A-Za-z]+(?:\s[A-Za-z]+)?$/,
                                message: 'Nombre invalido'
                            },
                        })}  
                    />
                </label>
                {
                    errors.nombre && <ErrorSpan>{errors.nombre.message}</ErrorSpan>
                }
                <label htmlFor="lastname"><Span>Apellido</Span>
                    <Input type="text" placeholder="Escribe su apellido"
                        {...registerField('apellido',{
                            required: {
                                value: true,
                                message: 'Apellido requerido'
                            },
                            minLength: {
                                value: 5,
                                message: 'El apellido debe tener como minimo 5 letras'
                            },
                            maxLength: {
                                value: 20,
                                message: 'El apellido debe tener como maximo 20 letras'
                            },
                            pattern: {
                                value: /^[A-Za-z]+(?:\s[A-Za-z]+)?$/,
                                message: 'Apellido invalido'
                            },
                        })} 
                    />
                </label>
                {
                    errors.apellido && <ErrorSpan>{errors.apellido.message}</ErrorSpan>
                }
                <label htmlFor="email">
                    <Span><CiMail />Correo</Span>
                    <Input type="email" placeholder="Escribe su correo"
                        {...registerField('email',{
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
                <label htmlFor="password">
                    <span className='flex flex-col font-bold gap-1 justify-center items-center p-2 text-lg'>
                        <RiLockPasswordLine />Contraseña
                        <div className="w-full text-xs text-gray-400 mt-1 mb-1">
                            La contraseña debe tener:
                            <ul className="list-disc list-inside">
                                <li>Al menos 6 caracteres</li>
                                <li>Al menos una letra</li>
                                <li>Al menos un número</li>
                                <li>No puede ser una contraseña común</li>
                            </ul>
                        </div>
                    </span>
                    <Input type="password" placeholder="Escribe su contraseña"
                        {...registerField('password',{
                            required: {
                                value: true,
                                message: 'Contraseña requerido'
                            },
                            minLength: {
                                value: 6,
                                message: 'La contraseña debe tener al menos 6 caracteres'
                            },
                            maxLength: {
                                value: 20,
                                message: 'La contraseña debe tener como maximo 20 caracteres'
                            },
                            pattern: {
                                value: /[a-zA-Z]/,
                                message: 'La contraseña debe contener al menos una letra'
                            },
                            validate: {
                                number: (value) => /\d/.test(value) || 'La contraseña debe contener al menos 1 número'
                            },
                        })}  
                    />
                </label>
                {
                    errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>
                }
                <label htmlFor="repeatPassword">
                    <Span><RiLockPasswordLine />Confirmar Contraseña</Span>
                    <Input type="password" placeholder="Repetir la contraseña"
                        {...registerField('password_confirmacion',{
                            required: {
                                value: true,
                                message: 'confirmar Contraseña requerida'
                            },
                            validate: (value) => value === watch('password') || 'Las contraseñas no coinciden',
                        })}   
                    />
                </label>
                {
                    errors.password_confirmacion && <ErrorSpan>{errors.password_confirmacion.message}</ErrorSpan>
                }
                <Button type='submit'>
                    <RiLoginBoxLine className=''/>                    
                        {isLoading ? 'Registrando...' : 'Crear Cuenta'}
                </Button>                
            </Form>
        </Section>        
    );
};
export default RegistroUser;