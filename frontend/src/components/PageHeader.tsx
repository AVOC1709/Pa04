import Heading from "./Headings"

interface PageHeaderProps {
    titulo: string,
    etiqueta: string,
    subtitulo: string
}

export const PageHeader = ({ titulo, etiqueta, subtitulo }: PageHeaderProps) => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <span className="mb-6 block text-sm font-semibold uppercase tracking-widest text-amber-600">
                {etiqueta}
            </span>
            <Heading level={1} className="uppercase">{titulo}</Heading>
            <p className="mb-0 max-w-2xl text-xl font-light text-gray-600 md:text-2xl">
                {subtitulo}
            </p>
        </section>
    )
}
