import { useQuery } from "@tanstack/react-query"
import { fetchCategorias } from "../../services/categorias.service"
import { useState } from "react"

export const useCategorias = () => {
    const [idSeleccionado, setIdSeleccionado] = useState<number | null>(null)

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['categorias'],
        queryFn: ({ signal }) => fetchCategorias(signal)
    })
    const categorias = Array.isArray(data) ? data : []
    const hasCategorias = categorias.length > 0

    const categoriaSeleccionada = categorias.find(c => c.idcategoria === idSeleccionado) ?? categorias[0]

    return {
        categorias,
        cargando: isLoading,
        error: error ? error.message : null,
        hasCategorias,
        refetch,
        seleccionarCategoria: setIdSeleccionado,
        idcategoriaSeleccionada: categoriaSeleccionada?.idcategoria ?? 0,
        nombreCategoriaSeleccionada: categoriaSeleccionada?.nombre ?? "",
        descripcionCategoriaSeleccionada: categoriaSeleccionada?.descripcion ?? "",
        totalCategoriaSeleccionada: categoriaSeleccionada?.total ?? 0
    }
}
