import { CONFIG } from "../config"
import type { Producto, RespuestaProductos } from "../types/Producto"

const API_URL = CONFIG.API_URL + CONFIG.ENDPOINTS.PRODUCTOS

export const fetchProductos = async (
    idcategoria: number,
    signal?: AbortSignal
): Promise<Producto[]> => {
    const url = new URL(API_URL)
    url.searchParams.append("categoria", idcategoria.toString())

    const response = await fetch(url, { signal })
    const jsonData: RespuestaProductos = await response.json()
    if (!response.ok) {
        throw new Error(`Error al obtener productos: ${response.status} ${response.statusText}`)
    }
    return jsonData.data
}
