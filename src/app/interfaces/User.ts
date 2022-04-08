export interface User {
  activo: number;
  id:       number;
  nombre:     string;
  apellido: string;
  direccion   :  Address;
  telefono:    string;
  rut: number;
  fechaNacimiento: string;
}

export interface Address {
  calle:  string;
  comuna:   string;
  numero:    string;
}
