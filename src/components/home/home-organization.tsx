import { Calculator, Laptop, Users2 } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export function HomeOrganization() {
    return (
        <Card className="flex flex-col p-4 transition-all duration-300 transform hover:scale-[1.00] hover:shadow-xl">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                    <Badge className="text-sm px-8"><Laptop />Frontend</Badge>
                </div>
                <div className="flex items-center gap-1">
                    <Users2 size={15} />
                    <span className="text-sm text-gray-600 font-medium">Participantes: </span>
                    <span className="text-md text-gray-900 font-medium">5</span>
                </div>
                <div className="flex items-center gap-1">
                    <Calculator size={15} />
                    <span className="text-sm text-gray-600 font-medium">Total Insights: </span>
                    <span className="text-md text-gray-900 font-medium">16</span>
                </div>
            </div>
        </Card>
    )
}