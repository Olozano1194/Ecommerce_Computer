export interface UserModel {
    id: number;
    nombre: string;
    apellido: string;
    nombre_completo?: string;
    correo: string;
    roles: string[];
    password: string;
    password_confirmacion?: string;
};