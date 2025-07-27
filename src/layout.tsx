import { Outlet, Link, useLocation } from "react-router-dom";
import { ChevronLeft, House, LayoutDashboard, LogOut, Menu, Newspaper, Users } from "lucide-react";
import { useState } from "react";
import Logo from './assets/logo.png';
import { NavComponent } from "./components/menu/nav-component";
import { ProfileMenu } from "./components/menu/profile-menu";

export function Layout() {
    const [open, setOpen] = useState(false);
    const location = useLocation()

    function handleToggleMenu() {
        setOpen(!open);
    }

    return (
        <div className="relative w-full min-h-screen flex bg-gray-100">
            <aside
                className={`
                    fixed top-0 left-0 z-40
                    h-screen w-64 bg-white shadow-2xs border-r
                    flex flex-col justify-between
                    transition-transform duration-300 ease-in-out
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0 lg:sticky lg:top-0
                `}
            >
                <div className="flex flex-col justify-between items-center mb-6 p-6">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <img src={Logo} alt="Logo" width={40} />
                            <h2 className="text-blue-950 text-xl font-bold">InsightWave</h2>
                        </div>
                        <ChevronLeft
                            size={28}
                            className="cursor-pointer text-gray-950 lg:hidden"
                            onClick={handleToggleMenu}
                        />
                    </div>
                    <div className="mt-3">
                        <span className="text-sm font-semibold text-gray-600">Centralize. Aprenda. Evolua.</span>
                    </div>
                </div>

                <nav className="flex flex-col gap-1 w-full p-2">
                    <Link to="/home"><NavComponent active={location.pathname === '/home' ? 'select' : 'default'} title="Home" icon={<House size={15} />} /></Link>
                    <Link to="/dashboard"><NavComponent active={location.pathname === '/dashboard' ? 'select' : 'default'} title="Dashboard" icon={<LayoutDashboard size={15} />} /></Link>
                    <Link to="/insights"><NavComponent active={location.pathname === '/insights' ? 'select' : 'default'} title="Feedbacks/Incidentes" icon={<Newspaper size={15} />} /></Link>
                    <Link to="/users"><NavComponent active={location.pathname === '/users' ? 'select' : 'default'} title="Usuários" icon={<Users size={15} />} /></Link>
                </nav>

                <div>

                </div>
                <div>
                </div>

                <div className="p-4 flex flex-col gap-2 mb-6">
                    <ProfileMenu />
                    <Link to="/login" className="pl-1 flex gap-2 tex-gray-500 items-center text-[0.9rem] hover:text-red-600">
                        <LogOut size={15} />
                        Sair
                    </Link>
                </div>
            </aside>

            {!open && (
                <div className="absolute top-6 left-4 z-30 lg:hidden">
                    <Menu size={32} className="text-blue-950 cursor-pointer" onClick={handleToggleMenu} />
                </div>
            )}

            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
}
