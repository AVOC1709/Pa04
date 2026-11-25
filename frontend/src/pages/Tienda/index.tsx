import { PageHeader } from "../../components/PageHeader"
import { TiendaContenido } from "./TiendaContenido"

export const Tienda = () => {
    return (
        <>
            <PageHeader etiqueta="Nuestros productos" titulo="Tienda" subtitulo="Tortas, cupcakes y galletas artesanales a los mejores precios." />
            <section className="bg-black py-24 text-white">
                <div className="mx-auto max-w-7xl px-6">
                    <TiendaContenido />
                </div>
            </section>
        </>
    )
}
