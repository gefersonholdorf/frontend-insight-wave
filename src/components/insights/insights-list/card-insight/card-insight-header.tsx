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
}

export function CardInsightHeader({ status, title }: CardInsightHeaderProps) {
    return (
        <>
            <Badge className={statusVariant({ status: status })}>
                {status === 'Aberto' && <ShieldQuestionMark />}
                {status === 'Em Progresso' && <Clock9 />}
                {status === 'Resolvido' && <Check />}
                {status === 'Encerrado' && <X />}
                {status}
            </Badge>
            <div className="">
                <h3 className="text-lg font-semibold ">{title}</h3>
            </div>
        </>
    )
}