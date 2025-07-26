import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export interface CardInsightContentProps {
    priority: 'Baixa' | 'Média' | 'Alta' | 'Crítica'
    type: 'Bug' | 'Ideia' | 'Sugestão' | 'Incidente'
    description: string
}

export function CardInsightContent({ priority, type, description }: CardInsightContentProps) {
    return (
        <>
            <div className="flex gap-1">
                <Badge className='bg-gray-500'>{priority}</Badge>
                <Badge className='bg-gray-500'>{type}</Badge>
            </div>
            <Separator />
            <div>
                <p className="font-medium text-sm text-gray-600">{description}</p>
            </div>
            <Separator />
        </>
    )
}