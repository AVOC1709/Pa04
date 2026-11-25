import { Outlet, ScrollRestoration } from "react-router"
import { MainHeader } from "./MainHeader"
import { MainFooter } from "./MainFooter"

export const RootLayout = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-black">
            <MainHeader />
            <main>
                <Outlet />
            </main>
            <MainFooter />
            <ScrollRestoration />
        </div>
    )
}
