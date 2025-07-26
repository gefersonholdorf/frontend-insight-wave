import { Calculator, Check, Clock9, ShieldQuestionMark, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

export interface HomeSummaryProps {
    title: string
    quantity: number
}

export function HomeSummary({ title, quantity }: HomeSummaryProps) {
    return (
        <Card className="transition-all duration-300 transform hover:scale-[1.00] hover:shadow-xl">
            <CardHeader>
                <CardDescription>{title}</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2 items-center justify-start">
                {title === 'Insights Em Aberto' && <ShieldQuestionMark className="text-red-500" size={25} />}
                {title === 'Insights Em Andamento' && <Clock9 className="text-blue-500" size={25} />}
                {title === 'Insights Resolvidos' && <Check className="text-emerald-500" size={25} />}
                {title === 'Insights Encerrados' && <X className="text-gray-900" size={25} />}
                {title === 'Total Insights' && <Calculator className="text-gray-900" size={25} />}
                <span className="font-bold text-gray-950 text-2xl text-shadow-2xs">{quantity}</span>
            </CardContent>
        </Card>
    )
}