import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { tv } from "tailwind-variants";

const priorityVariant = tv({
    base: '',
    variants: {
        priority: {
            'Baixa': 'bg-emerald-500',
            'Média': 'bg-blue-500',
            'Alta': 'bg-orange-500',
            'Crítica': 'bg-red-500',
        }
    }
})

export interface CardInsightContentProps {
    priority: 'Baixa' | 'Média' | 'Alta' | 'Crítica'
    type: 'Bug' | 'Ideia' | 'Sugestão' | 'Incidente'
    description: string
}

export function CardInsightContent({ priority, type, description }: CardInsightContentProps) {
    return (
        <>
            <div className="flex gap-1">
                <Badge className={priorityVariant({ priority: priority })}>{priority}</Badge>
                <Badge className={priorityVariant({})}>{type}</Badge>
            </div>
            <Separator />
            <div>
                <p className="font-medium text-sm text-gray-600">{description}</p>
            </div>
            <Separator />
        </>
    )
}