import { createContext, useState, useEffect } from "react";
import type { UserModel } from "../models/UserModel";
import type { AuthContextType, AuthProviderProps } from "./AuthContext.types";
import {
    loginUser,
    logoutUser,
    registerUsers,
    // getUserProfile,
    getStoredToken,
    getStoredUser,
} from "../api/users.api";
import type { LoginUserDto, CreateUserDto } from "../models/dtos/UserDto";


//  Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
    // Estado
    const [user, setUser] = useState<UserModel | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Verifica si el usuario ya está autenticado al cargar la app
    useEffect(() => {
        const storedToken = getStoredToken();
        const storedUser = getStoredUser();

        if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(storedUser);
        }

        setIsLoading(false);
    }, []);

    const login = async (credentials: LoginUserDto) => {
        setIsLoading(true);
        setError(null);

        try {
        const response = await loginUser(credentials);
        setToken(response.token);
        setUser(response.usuario);
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
        const response = await registerUsers(userData);
        setToken(response.token);
        setUser(response.usuario);
        } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al registrarse';
        setError(errorMessage);
        throw err;
        } finally {
        setIsLoading(false);
        }
    };

    const logout = async () => {
        setIsLoading(true);
        setError(null);

        try {
        await logoutUser();
        setToken(null);
        setUser(null);
        } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al cerrar sesión';
        setError(errorMessage);
        throw err;
        } finally {
        setIsLoading(false);
        }
    };

    const clearError = () => setError(null);

    // Valor que se proporciona al contexto
    const value: AuthContextType = {
        user,
        token,
        isLoading,
        isAuthenticated: !!token,
        error,
        login,
        register,
        logout,
        clearError,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

export { AuthContext };