import { NavLink } from "react-router"

const NAV_ITEMS = [
    { id: "galeria", etiqueta: "Galería", ruta: "/galeria" },
    { id: "tienda", etiqueta: "Tienda", ruta: "/tienda" },
]

const estiloLink = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition hover:text-black ${isActive ? "text-amber-600" : "text-gray-700"}`

export const MainNav = () => {
    return (
        <nav aria-label="Principal" className="flex items-center space-x-8">
            {NAV_ITEMS.map(item => (
                <NavLink key={item.id} to={item.ruta} className={estiloLink}>{item.etiqueta}</NavLink>
            ))}
        </nav>
    )
}
