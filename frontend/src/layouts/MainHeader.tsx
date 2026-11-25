import { Link } from "react-router"
import { MainNav } from "./MainNav"

export const MainHeader = () => {
    return (
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <Link to="/galeria" className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-amber-600"></div>
                    <span className="text-2xl font-bold tracking-tight">Pastelería de Álvaro</span>
                </Link>
                <MainNav />
            </div>
        </header>
    )
}
