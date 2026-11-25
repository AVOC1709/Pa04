export interface Producto {
    idproducto: number;
    nombre: string;
    precio: number;
    preciorebajado: number;
    imagenchica: string;
    destacado: number;
}

export interface RespuestaProductos {
  succes: boolean;
  data: Producto[];
}
