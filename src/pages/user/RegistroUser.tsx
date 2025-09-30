import {useForm} from 'react-hook-form';
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
import { RiLockPasswordLine, RiLoginBoxLine } from "react-icons/ri";

const RegistroUser = () => {
    const { register, handleSubmit, formState: {errors}, watch } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);        
    });
    return (
        <Section>
            <Form onSubmit={onSubmit}>
                <div className='w-full flex justify-center'>
                    <Title><img className="w-8 h-6 rounded-lg" src={icons} alt="logo del desarrollador" />Crear <span className="pl-2 text-teal-300">Usuario</span></Title>
                </div>
                <label htmlFor="name"><Span>Nombre</Span>
                    <Input type="text" placeholder="Escribe su nombre"
                        {...register('name',{
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
                    errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>
                }
                <label htmlFor="lastname"><Span>Apellido</Span>
                    <Input type="text" placeholder="Escribe su apellido"
                        {...register('lastname',{
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
                    errors.lastname && <ErrorSpan>{errors.lastname.message}</ErrorSpan>
                }
                <label htmlFor="email">
                    <Span><CiMail />Correo</Span>
                    <Input type="email" placeholder="Escribe su correo"
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
                <label htmlFor="password">
                    <Span><RiLockPasswordLine />Contraseña</Span>
                    <Input type="password" placeholder="Escribe su contraseña"
                        {...register('password',{
                            required: {
                                value: true,
                                message: 'Contraseña requerido'
                            },
                            minLength: {
                                value: 5,
                                message: 'La contraseña debe tener al menos 5 caracteres'
                            },
                            maxLength: {
                                value: 20,
                                message: 'La contraseña debe tener como maximo 20 caracteres'
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
                        {...register('repeatPassword',{
                            required: {
                                value: true,
                                message: 'confirmar Contraseña requerida'
                            },
                            validate: (value) => value === watch('password') || 'Las contraseñas no coinciden',
                        })}   
                    />
                </label>
                {
                    errors.repeatPassword && <ErrorSpan>{errors.repeatPassword.message}</ErrorSpan>
                }
                <Button type='submit'>
                    <RiLoginBoxLine className=''/>                    
                        Registrar
                </Button>
                
            </Form>
        </Section>        
    );
};
export default RegistroUser;