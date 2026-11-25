import { PageHeader } from "../../components/PageHeader"
import { GaleriaLista } from "./GaleriaLista"

export const Galeria = () => {
    return (
        <>
            <PageHeader etiqueta="Lo que hacemos" titulo="Galería" subtitulo="Un recorrido por nuestras creaciones, elaboradas con ingredientes selectos y una presentación impecable." />
            <section className="bg-black py-24 text-white">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="mb-12 text-sm font-semibold uppercase tracking-widest text-amber-500">
                        Nuestras creaciones
                    </h2>
                    <GaleriaLista />
                </div>
            </section>
        </>
    )
}
