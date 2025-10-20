import axios from 'axios';
import { createContext, useState, useEffect, useContext } from "react";
import type { UserModel } from "../models/UserModel";
import type { AuthContextType, AuthProviderProps, AuthTokens } from "./AuthContext.types";
// import {
//     loginUser,
//     logoutUser,
//     registerUsers,
//     // getUserProfile,
//     getStoredToken,
//     getStoredUser,
// } from "../api/users.api";
import type { LoginUserDto, CreateUserDto } from "../models/dtos/UserDto";


//  Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
    // Estado
    const [user, setUser] = useState<UserModel | null>(null);
    const [tokens, setTokens] = useState<AuthTokens | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const interceptor = axios.interceptors.request.use(
            (config) => {
                if (tokens?.access) {
                    config.headers.Authorization = `Bearer ${tokens.access}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(interceptor);
        };
    }, [tokens]);

    // Verifica si el usuario ya está autenticado al cargar la app
    // useEffect(() => {
    //     const storedToken = getStoredToken();
    //     const storedUser = getStoredUser();

    //     if (storedToken && storedUser) {
    //     setToken(storedToken);
    //     setUser(storedUser);
    //     }

    //     setIsLoading(false);
    // }, []);

    const login = async (credentials: LoginUserDto) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:8000/ecommerce/api/v1/login/', credentials);
            const { user: userData, access, refresh } = response.data;

            setTokens({ access, refresh });
            setUser(userData);
            setIsAuthenticated(true);

            // Guardar tokens en localStorage
            localStorage.setItem('tokens', JSON.stringify({ access, refresh }));
            localStorage.setItem('user', JSON.stringify(userData));
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error al iniciar sesión';
            setError(errorMessage);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (userData: CreateUserDto) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:8000/ecommerce/api/v1/registro/', userData);
            const { user: newUser, access, refresh } = response.data;

            setTokens({ access, refresh });
            setUser(newUser);
            setIsAuthenticated(true);
            
            localStorage.setItem('tokens', JSON.stringify({ access, refresh }));
            localStorage.setItem('user', JSON.stringify(newUser));
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error al registrarse';
            setError(errorMessage);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        // setIsLoading(true);
        // setError(null);

        try {
            if (tokens?.refresh) {
                await axios.post('http://localhost:8000/ecommerce/api/v1/logout/', {
                    refresh: tokens.refresh
                });
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error al cerrar sesión';
            setError(errorMessage);
            throw err;
        } finally {
            setUser(null);
            setTokens(null);
            setIsAuthenticated(false);
            localStorage.removeItem('tokens');
            localStorage.removeItem('user');
        }
    };

    const clearError = () => setError(null);

    // Recuperar sesión al recargar
    useEffect(() => {
        const storedTokens = localStorage.getItem('tokens');
        const storedUser = localStorage.getItem('user');
        
        if (storedTokens && storedUser) {
            setTokens(JSON.parse(storedTokens));
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);

     return (
        <AuthContext.Provider value={{
            user,
            tokens,
            isLoading,
            isAuthenticated,
            error,
            login,
            register,
            logout,
            clearError
        }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;

export { AuthContext };