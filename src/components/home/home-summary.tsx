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
                <CardDescription className="text-sm">{title}</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-3 items-center justify-center">
                {title === 'Insights Em Aberto' && <ShieldQuestionMark className="text-red-500" size={35} />}
                {title === 'Insights Em Andamento' && <Clock9 className="text-blue-500" size={35} />}
                {title === 'Insights Resolvidos' && <Check className="text-emerald-500" size={35} />}
                {title === 'Insights Encerrados' && <X className="text-gray-900" size={35} />}
                {title === 'Total Insights' && <Calculator className="text-gray-900" size={35} />}
                <span className="font-bold text-gray-950 text-4xl text-shadow-2xs">{quantity}</span>
            </CardContent>
        </Card>
    )
}