import { useQuery } from "@tanstack/react-query"
import { fetchGaleria } from "../../services/galeria.service"

export const useGaleria = () => useQuery({
    queryKey: ['galeria'],
    queryFn: ({ signal }) => fetchGaleria(signal)
})
