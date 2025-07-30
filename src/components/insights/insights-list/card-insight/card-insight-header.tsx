import { Badge } from "@/components/ui/badge";
import { Check, Clock9, ShieldQuestionMark, X } from "lucide-react";
import { tv } from "tailwind-variants";

const statusVariant = tv({
    base: '',
    variants: {
        status: {
            'Aberto': 'bg-red-500',
            'Em Progresso': 'bg-blue-500',
            'Resolvido': 'bg-emerald-500',
            'Encerrado': 'bg-gray-950'
        }
    }
})

export interface CardInsightHeaderProps {
    status: 'Aberto' | 'Em Progresso' | 'Resolvido' | 'Encerrado'
    title: string
    id: number
}

export function CardInsightHeader({ status, title, id }: CardInsightHeaderProps) {
    return (
        <>
            <div className="flex items-center justify-between">
                <Badge className={statusVariant({ status: status })}>
                    {status === 'Aberto' && <ShieldQuestionMark />}
                    {status === 'Em Progresso' && <Clock9 />}
                    {status === 'Resolvido' && <Check />}
                    {status === 'Encerrado' && <X />}
                    {status}
                </Badge>
                <span className="font-medium text-sm text-gray-600">IS000{id}</span>
            </div>
            <div className="">
                <h3 className="text-lg font-semibold ">{title}</h3>
            </div>
        </>
    )
}