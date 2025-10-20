import type { UserModel } from "../UserModel";

export interface CreateUserDto {
    nombre: string;
    apellido: string;
    email?: string;
    // roles: string[];
    password?: string;
    password_confirmacion: string;   
};

export interface LoginUserDto {
    email: string;
    password: string;    
}

export interface RegisterResponseDto {
    mensaje: string;
    usuario: UserModel;
    token: string;   
};

export interface LoginResponseDto {
    token: string;
    usuario: UserModel;  
}

export interface ChangePasswordDto {
  password_actual: string;
  password_nueva: string;
  password_confirmacion: string;
}