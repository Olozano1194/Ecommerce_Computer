import axios, { type AxiosInstance, type AxiosResponse } from "axios";
// Models
import type { UserModel } from '../models/UserModel';
// Dtos
import type { CreateUserDto, LoginUserDto, RegisterResponseDto, LoginResponseDto, ChangePasswordDto } from "../models/dtos/UserDto";

export const ecommerceApi: AxiosInstance = axios.create({
    //baseURL: 'http://localhost:8000/gym/api/v1/',
    baseURL: import.meta.env.MODE === 'development' 
    ? 'http://localhost:8000/ecommerce/api/v1'
    : 'https://gimnasioreactdjango.onrender.com/gym/api/v1',
    headers: {
        'Content-Type': 'application/json',
      },
});

// Interceptor - agrega token automanticamente
ecommerceApi.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token && !config.url?.includes('/login/')&& 
        !config.url?.includes('/registro/') && 
        !config.url?.includes('/logout/')) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
});

// Interceptor - manejo de errores
ecommerceApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // Si el token expiró o no es válido (401), limpia localStorage
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      // Aquí podrías redirigir a login si lo deseas
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

type ApiErrorData = Record<string, string | string[] | undefined>;

export const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    // Intenta obtener el mensaje de error del servidor
    const errorData = error.response?.data as ApiErrorData;    
    let errorMessage = error.message;    
    // Busca el primer mensaje de error disponible
    if (errorData) {
      if (typeof errorData.error === 'string') {
        errorMessage = errorData.error;
      } else if (typeof errorData.message === 'string') {
        errorMessage = errorData.message;
      } else if (errorData.detail) {
        errorMessage = Array.isArray(errorData.detail)
        ? errorData.detail[0]
        : errorData.detail;
      } else {
        // Si hay múltiples errores, toma el primero
        const firstErrorKey = Object.keys(errorData)[0];
        if (firstErrorKey) {
          const errorValue = errorData[firstErrorKey];
          errorMessage = Array.isArray(errorValue)
            ? errorValue[0]
            : (errorValue || 'Error desconocido');
        }
      }
    }
    console.error('API Error:', {
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
    });

    throw new Error(errorMessage);
  }
  console.error('Unknown error:', error);
  throw new Error('Ocurrió un error desconocido');
};

// Creamos un usuario
export const registerUsers = async (user: CreateUserDto): Promise<RegisterResponseDto> => {
    try {
        const response: AxiosResponse<RegisterResponseDto>  = await ecommerceApi.post('/registro/', user);
        const { token, usuario } = response.data;

        //Almacenamos el token en el localstorage para las futuras solicitudes
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(usuario));
        return response.data;        
    } catch (error) {
        throw handleApiError(error);  
    }  
};

// Inicio de sesión
export const loginUser = async (credentials: LoginUserDto): Promise<LoginResponseDto> => {
  try {
    const response: AxiosResponse<LoginResponseDto> = await ecommerceApi.post('/login/', credentials);
      
    const { token, usuario } = response.data;

    // Almacena el token y datos del usuario
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(usuario));

    return response.data;      
  } catch (error) {      
      throw handleApiError(error);      
  }
  
}

// Cerrar Sesión
export const logoutUser = async (): Promise<void> => {
  try {
      await ecommerceApi.post('/logout/');     
  } catch (error) {      
      console.error('Error al cerrar sesión:', error);
  } finally {
    // Limpia el almacenamiento local independientemente del resultado
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }  
};

// function profile
export const getUserProfile = async (): Promise<UserModel> => {
    // const token = localStorage.getItem('token');
    try {
        const response: AxiosResponse<UserModel> = await ecommerceApi.get(`/usuarios/me/`);
        //console.log('User profile response:', response.data);
        
        return response.data;        
    } catch (error) {
        throw handleApiError(error);        
    }
};

// Lista de usuarios
export const getAllUsers = async (): Promise<UserModel[]> => {
    // const token = localStorage.getItem('token');
    try {
        const response: AxiosResponse<UserModel[]> = await ecommerceApi.get('/Usuarios/');
        //console.log('Users response:', response.data);        
        return response.data;        
    } catch (error) {
        throw handleApiError(error);        
    }
};

// Actualizar Usuario
export const updateUserProfile = async (userData: Partial<CreateUserDto>): Promise<UserModel> => {
    // const token = localStorage.getItem('token');
    try {
        const response: AxiosResponse<UserModel> = await ecommerceApi.patch(`/Usuarios/me/`, userData);
        // Actualiza los datos en localStorage
        localStorage.setItem('user', JSON.stringify(response.data));
   
        return response.data;        
    } catch (error) {
        throw handleApiError(error);             
    }    
}

// Cambio de contraseña
export const changePassword = async (passwordData: ChangePasswordDto): Promise<{ mensaje: string }> => {
  try {
    const response: AxiosResponse<{ mensaje: string }> = await ecommerceApi.post(
      '/usuarios/cambiar_password/',
      passwordData
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// Obtener un usuario por ID, solo para ADMIN
export const getUserById = async (userId: number): Promise<UserModel> => {
  try {
    const response: AxiosResponse<UserModel> = await ecommerceApi.get(
      `/usuarios/${userId}/`
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// Obtiene el token almacenado
export const getStoredToken = (): string | null => {
  return localStorage.getItem('authToken');
};

// Obtiene el usuario almacenado
export const getStoredUser = (): UserModel | null => {
  const userJson = localStorage.getItem('user');
  return userJson ? JSON.parse(userJson) : null;
};

// Verifica si hay un usuario autenticado
export const isAuthenticated = (): boolean => {
  return !!getStoredToken();
};

// Cerifica si el usuario actual es admin
export const isAdmin = (): boolean => {
  const user = getStoredUser();
return user?.roles.includes('ADMIN') || false;
};

