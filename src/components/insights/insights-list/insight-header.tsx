import { Newspaper, Plus } from "lucide-react";
import { Button } from "../../ui/button";

export function InsightHeader() {
    return (
        <div className="flex gap-2 flex-col lg:flex-row items-center">
            <div className="w-full flex gap-2 items-center justify-center lg:justify-start">
                <Newspaper />
                <h1 className="text-center lg:text-start text-2xl font-bold text-gray-800">Feedbacks/Incidentes</h1>
            </div>
            <div>
                <Button><Plus size={15} className="text-white" />Novo Feedback/Incidente</Button>
            </div>
        </div>
    )
}