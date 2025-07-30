import { Newspaper, Plus } from "lucide-react";
import { Button } from "../../ui/button";
import { Card } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

export function InsightHeader() {
    return (
        <Card className="p-4">
            <div className="flex gap-2 flex-col lg:flex-row items-center">
                <div className="w-full flex gap-2 items-center justify-center lg:justify-start">
                    <Newspaper />
                    <h1 className="text-center lg:text-start text-2xl font-bold text-gray-800">Feedbacks/Incidentes</h1>
                </div>
                <div>
                    <NavLink to={'/create-insight'}>
                        <Button>
                            <Plus size={15} className="text-white" />
                            Novo Feedback/Incidente
                        </Button>
                    </NavLink>
                </div>
            </div>
        </Card>
    )
}