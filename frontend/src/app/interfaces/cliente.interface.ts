export interface Cliente {
  id: number;
  nombre: string;
  apellidos: string;
  direccion: string;
  email: string;
  edad: number;
  genero: string;
  fecha_inscripcion: Date;
  cuota: number;
  fecha_nacimiento: Date;
  dni: string;
  profesor_id: number;
  usuario_id: number;
}