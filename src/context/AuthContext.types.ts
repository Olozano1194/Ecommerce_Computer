import type { UserModel } from "../models/UserModel";
import type { ReactNode } from "react";
import type { LoginUserDto, CreateUserDto } from "../models/dtos/UserDto";


export interface AuthContextType {
    // Estado
    user: UserModel | null;
    token: string | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: string | null;
    //  Funciones
    login: (credentials: LoginUserDto) => Promise<void>;
    register: (userData: CreateUserDto) => Promise<void>;
    logout: () => Promise<void>;
    clearError: () => void;
}

// Proveedor del contexto
export interface AuthProviderProps {
    children: ReactNode;
}