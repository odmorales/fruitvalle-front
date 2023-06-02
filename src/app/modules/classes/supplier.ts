export interface Supplier {
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
  lugar_origen?:string;
  estado?: boolean;
  fecha_desvinculacion?: Date;
  fecha_vinculacion?: Date;
}
