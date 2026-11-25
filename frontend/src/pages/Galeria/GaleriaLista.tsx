import { EstadoError } from "../../components/EstadoError"
import { CONFIG } from "../../config"
import { useGaleria } from "./useGaleria"

export const GaleriaLista = () => {
    const query = useGaleria()
    if (query.isPending) {
        return <p className="text-gray-400">Cargando galería...</p>
    }
    if (query.isError) {
        return <EstadoError mensaje={query.error.message} onReintentar={() => query.refetch()} />
    }
    const items = query.data
    if (!items || items.length === 0) {
        return <p className="text-gray-400">No hay imágenes registradas</p>
    }
    return (
        <div className="grid grid-cols-1 content-start gap-6 md:grid-cols-3">
            {
                items.map(({ idgaleria, titulo, descripcion, foto }, index) => (
                    <article key={idgaleria} className="group flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 transition hover:border-amber-500">
                        <figure className="relative h-72 w-full overflow-hidden bg-neutral-800">
                            <img src={CONFIG.API_URL + "/" + foto}
                                alt={titulo}
                                className="h-full w-full object-cover duration-500 group-hover:scale-105 transition"
                                loading="lazy"
                                decoding="async" />
                        </figure>
                        <div className="p-6">
                            <span className="mb-4 block font-mono text-sm font-bold text-amber-500">0{index + 1}</span>
                            <h3 className="mb-2 text-2xl font-bold text-white transition group-hover:text-amber-500">{titulo}</h3>
                            <p className="mb-0 text-sm text-gray-400">{descripcion}</p>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}
