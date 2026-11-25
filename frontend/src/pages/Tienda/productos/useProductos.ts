import { useQuery } from "@tanstack/react-query"
import { fetchProductos } from "../../../services/productos.service"

export const useProductos = (idcategoria: number) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['productos', idcategoria],
        queryFn: ({ signal }) => fetchProductos(idcategoria, signal),
        enabled: idcategoria > 0
    })
    const productos = Array.isArray(data) ? data : []
    const hasProductos = productos.length > 0

    return {
        productos,
        cargando: isLoading,
        error: error ? error.message : null,
        hasProductos,
        refetch
    }
}
