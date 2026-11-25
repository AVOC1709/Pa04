import { Link, useNavigate } from "react-router"

export const Pagina404 = () => {
    const navigate = useNavigate()

    return (
        <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 py-20">
            <span className="mb-6 block text-sm font-semibold uppercase tracking-widest text-amber-600">
                Recurso no encontrado
            </span>
            <p className="mb-8 text-8xl font-black leading-none tracking-tighter md:text-9xl">
                404
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Esta página se salió del horno
            </h1>
            <p className="mb-10 max-w-2xl text-xl font-light text-gray-600">
                No encontramos la página que buscas. Es posible que haya cambiado de dirección o que el enlace no sea correcto.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                    to="/galeria"
                    className="rounded bg-black px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-amber-600">
                    Ir a la galería
                </Link>
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="cursor-pointer rounded border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:border-amber-600 hover:text-amber-600">
                    Volver atrás
                </button>
            </div>
        </section>
    )
}
