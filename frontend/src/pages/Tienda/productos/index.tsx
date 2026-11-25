import { EstadoError } from "../../../components/EstadoError"
import { CONFIG } from "../../../config"
import { useProductos } from "./useProductos"

interface ProductosProps {
    codigoCategoria: number
}

export const ProductosCategoria = ({ codigoCategoria }: ProductosProps) => {
    const { productos, cargando, error, hasProductos, refetch } = useProductos(codigoCategoria)
    if (cargando) {
        return <p className="text-gray-400">Cargando catálogo...</p>
    }
    if (error) {
        return <EstadoError mensaje={error} onReintentar={() => refetch()} />
    }
    if (!hasProductos) {
        return <p className="text-gray-400">No hay Productos registrados</p>
    }
    return (
        <div className="grid grid-cols-1 content-start gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {
                productos.map(({ idproducto, nombre, precio, preciorebajado, imagenchica }, index) => {
                    const imageURL = imagenchica ? CONFIG.API_URL + "/" + imagenchica : `${CONFIG.API_URL}/imagenes/nofoto.jpg`
                    const tieneDescuento = preciorebajado > 0
                    const precioFinal = tieneDescuento ? preciorebajado : precio
                    return (
                        <article key={idproducto} className="group flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 transition hover:border-amber-500">
                            <figure className="relative h-56 w-full overflow-hidden bg-neutral-800">
                                <img src={imageURL}
                                    alt={nombre}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async" />
                            </figure>
                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div>
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="font-mono text-sm font-bold text-amber-500">0{index + 1}</span>
                                        {tieneDescuento && (
                                            <span className="rounded bg-neutral-800 px-2 py-1 text-xs text-amber-400">Oferta</span>
                                        )}
                                    </div>
                                    <h3 className="mb-2 text-2xl font-bold text-white transition group-hover:text-amber-500">{nombre}</h3>
                                </div>
                                <div className="mt-2 flex items-center justify-between border-t border-neutral-800 pt-4">
                                    <span className="text-xl font-bold text-amber-400">S/ {Number(precioFinal).toFixed(2)}</span>
                                    {tieneDescuento && (
                                        <span className="text-sm text-gray-500 line-through">S/ {Number(precio).toFixed(2)}</span>
                                    )}
                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}
