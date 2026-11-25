export const MainFooter = () => {
    return (
        <footer className="border-t border-neutral-800 bg-neutral-950 py-16 text-gray-400">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
                <div>
                    <h3 className="mb-4 text-lg font-bold text-white">Pastelería de Álvaro</h3>
                    <p className="text-sm text-gray-400">
                        Postres artesanales elaborados con insumos de alta calidad.
                    </p>
                </div>
                <div>
                    <h3 className="mb-4 text-lg font-bold text-white">Contacto</h3>
                    <p className="mb-1 text-sm">Atención: Lunes a Sábado 9:00 - 10:00</p>
                    <p className="mb-0 text-sm">telefono/whatsapp: 962096025</p>
                </div>
                <div>
                    <h3 className="mb-4 text-lg font-bold text-white">Ubicación</h3>
                    <p className="text-sm">Jesus Maria, huiracocha 2287,Lima, Perú</p>
                </div>
            </div>
        </footer>
    )
}
