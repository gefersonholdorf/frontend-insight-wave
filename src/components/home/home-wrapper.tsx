import { LayoutDashboard, Newspaper, User } from "lucide-react";
import { HomeCalendar } from "./home-calendar";
import { HomeOrganization } from "./home-organization";
import { HomePresentation } from "./home-presentation";
import { HomeShortcut } from "./home-shortcut";
import { HomeSummary } from "./home-summary";

export function HomeWrapper() {
    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-4">
                <HomePresentation />
                <HomeCalendar />
            </div>
            <div className="mt-6">
                <h3 className="font-semibold text-gray-800 text-lg">
                    Você Possui:
                </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <HomeSummary title="Total Insights" quantity={13} />
                <HomeSummary title="Insights Em Aberto" quantity={2} />
                <HomeSummary title="Insights Em Andamento" quantity={3} />
                <HomeSummary title="Insights Resolvidos" quantity={2} />
                <HomeSummary title="Insights Encerrados" quantity={6} />
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
                <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                        Seu atalho diário:
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <HomeShortcut title="Criar Insight" icon={<Newspaper size={40} className="text-gray-700" />} />
                        <HomeShortcut title="Alterar Usuário" icon={<User size={40} className="text-gray-700" />} />
                        <HomeShortcut title="Acessar Dashboard" icon={<LayoutDashboard size={40} className="text-gray-700" />} />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                        Organização:
                    </h3>
                    <HomeOrganization />
                </div>

            </div>
        </div>
    )
}