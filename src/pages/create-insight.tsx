import { CreateInsightWrapper } from "@/components/insights/create-insight/create-insight-wrapper";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Newspaper, Plus, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export function CreateInsight() {
    return (
        <div className="w-full">
            <NavLink to={"/insights"}>
                <div className="flex gap-1 items-center text-center pl-10 lg:pl-0">
                    <ArrowLeft size={15} />
                    <span className="text-sm text-gray-600">Voltar</span>
                </div>
            </NavLink>
            <Card className="p-4 mt-2">
                <div className="flex gap-2 flex-col lg:flex-row items-center">
                    <div className="w-full flex gap-2 items-center justify-center lg:justify-start">
                        <Newspaper />
                        <h1 className="text-center lg:text-start text-[1.2rem] font-bold text-gray-800">Criar Insight</h1>
                    </div>
                </div>
            </Card>

            <div className="mt-10 grid grid-cols-1 gap-4">
                <CreateInsightWrapper />
            </div>
        </div>
    )
}