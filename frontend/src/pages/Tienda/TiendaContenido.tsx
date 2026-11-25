import { EstadoError } from "../../components/EstadoError"
import { ProductosCategoria } from "./productos"
import { useCategorias } from "./useCategorias"

export const TiendaContenido = () => {
    const { categorias, cargando, error, hasCategorias, refetch, seleccionarCategoria,
        idcategoriaSeleccionada, nombreCategoriaSeleccionada, descripcionCategoriaSeleccionada, totalCategoriaSeleccionada
    } = useCategorias()
    if (cargando) {
        return <p className="text-gray-400">Cargando catálogo...</p>
    }
    if (error) {
        return <EstadoError mensaje={error} onReintentar={() => refetch()} />
    }
    if (!hasCategorias) {
        return <p className="text-gray-400">No hay Categorias registradas</p>
    }
    return (
        <div className="flex flex-col gap-10 md:flex-row">
            <aside className="w-full md:w-1/3 lg:w-1/4">
                <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-amber-500">
                    Categorías
                </h2>
                <ul className="list-none space-y-2">
                    {
                        categorias.map(({ idcategoria, nombre, descripcion, total }) => {
                            const activa = idcategoria === idcategoriaSeleccionada
                            return (
                                <li key={idcategoria}>
                                    <button
                                        type="button"
                                        title={descripcion}
                                        onClick={() => seleccionarCategoria(idcategoria)}
                                        className={`flex w-full cursor-pointer items-center justify-between rounded-lg border px-4 py-3 text-left font-medium transition ${activa ? "border-amber-500 bg-neutral-900 text-amber-500" : "border-neutral-800 bg-neutral-900 text-gray-300 hover:border-amber-500 hover:text-amber-500"}`}>
                                        <span>{nombre}</span>
                                        <span className="text-sm">({total})</span>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
            <div className="w-full md:w-2/3 lg:w-3/4">
                <h3 className="mb-2 text-3xl font-bold tracking-tight text-white">{nombreCategoriaSeleccionada}</h3>
                <p className="mb-8 text-gray-400">{descripcionCategoriaSeleccionada}. Hay {totalCategoriaSeleccionada} productos en total.</p>
                <ProductosCategoria codigoCategoria={idcategoriaSeleccionada} />
            </div>
        </div>
    )
}
