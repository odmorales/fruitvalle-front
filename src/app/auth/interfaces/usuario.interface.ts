export interface Usuario {
    username: string;
    password: string;
    userType: string;
    email: string;
    name: string;
    position?: string;
    phone?: string;
    lastname: string;
}

export interface UsuarioResponse {
  username: string;
  userType: string;
  email: string;
}
