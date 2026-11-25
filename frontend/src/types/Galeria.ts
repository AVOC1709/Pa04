export interface Galeria {
    idgaleria: number;
    titulo: string;
    descripcion: string;
    foto: string;
}

export interface RespuestaGaleria {
  succes: boolean;
  data: Galeria[];
}
