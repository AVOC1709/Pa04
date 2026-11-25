export interface Categoria {
    idcategoria: number;
    nombre: string;
    descripcion: string;
    foto: string;
    total: number;
}

export interface RespuestaCategorias {
  succes: boolean;
  data: Categoria[];
}
