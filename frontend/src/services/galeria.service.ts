import { CONFIG } from "../config"
import type { Galeria, RespuestaGaleria } from "../types/Galeria"

const API_URL = CONFIG.API_URL + CONFIG.ENDPOINTS.GALERIA

export const fetchGaleria = async (signal?: AbortSignal): Promise<Galeria[]> => {
    const response = await fetch(API_URL, { signal })
    const jsonData: RespuestaGaleria = await response.json()
    if (!response.ok) {
        throw new Error(`Error al obtener la galería: ${response.status} ${response.statusText}`)
    }
    return jsonData.data
}
