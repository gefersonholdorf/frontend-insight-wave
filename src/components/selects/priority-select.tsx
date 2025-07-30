import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from "react"
import { tv } from "tailwind-variants"

const priorityVariant = tv({
    base: 'p-1 px-3',
    variants: {
        priority: {
            'Baixa': 'bg-emerald-500',
            'Média': 'bg-blue-500',
            'Alta': 'bg-orange-500',
            'Crítica': 'bg-red-500',
        }
    },
    defaultVariants: {
        priority: 'Média'
    }
})

export interface PrioritySelectProps extends Omit<React.ComponentPropsWithoutRef<typeof Select>, "onValueChange"> {
    defaultValue?: 'Baixa' | 'Média' | 'Alta' | 'Crítica'
    onValueChange?: (value: 'Baixa' | 'Média' | 'Alta' | 'Crítica') => void
}

export function PrioritySelect({ defaultValue = 'Média', onValueChange, ...rest }: PrioritySelectProps) {
    const [value, setValue] = React.useState<'Baixa' | 'Média' | 'Alta' | 'Crítica'>(defaultValue)

    function handleChange(newValue: string) {
        const priority = newValue as 'Baixa' | 'Média' | 'Alta' | 'Crítica'
        setValue(priority)
        onValueChange?.(priority)
    }

    return (
        <Select value={value} onValueChange={handleChange} {...rest}>
            <SelectTrigger className={`w-full text-white ${priorityVariant({ priority: value })}`}>
                <SelectValue placeholder="Selecione a prioridade" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1">Baixa</SelectItem>
                <SelectItem value="2">Média</SelectItem>
                <SelectItem value="3">Alta</SelectItem>
                <SelectItem value="4">Crítica</SelectItem>
            </SelectContent>
        </Select>
    )
}
