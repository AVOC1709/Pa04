interface EstadoErrorProps {
    mensaje: string,
    onReintentar: () => void
}

export const EstadoError = ({ mensaje, onReintentar }: EstadoErrorProps) => {
    return (
        <div className="rounded-lg border border-red-600 bg-red-900/40 p-6 text-center text-red-300">
            <p className="mb-1 font-semibold">Ocurrió un error</p>
            <p className="mb-0 text-sm">{mensaje}</p>
            <button
                onClick={onReintentar}
                className="mt-4 cursor-pointer rounded bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-700">
                Reintentar
            </button>
        </div>
    )
}
