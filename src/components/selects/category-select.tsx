import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from "react"

export interface CategorySelectProps extends Omit<React.ComponentPropsWithoutRef<typeof Select>, "onValueChange"> {
    defaultValue?: 'Frontend' | 'Backend' | 'Produto' | 'UX' | 'Infra'
    onValueChange?: (value: 'Frontend' | 'Backend' | 'Produto' | 'UX' | 'Infra') => void
}

export function CategorySelect({ defaultValue, onValueChange, ...rest }: CategorySelectProps) {
    const [value, setValue] = React.useState<'Frontend' | 'Backend' | 'Produto' | 'UX' | 'Infra' | undefined>(defaultValue ?? undefined)

    function handleChange(newValue: string) {
        const category = newValue as 'Frontend' | 'Backend' | 'Produto' | 'UX' | 'Infra'
        setValue(category)
        onValueChange?.(category)
    }

    return (
        <Select value={value} onValueChange={handleChange} {...rest}>
            <SelectTrigger className={`w-full`}>
                <SelectValue className="text-white" placeholder="Selecione a categoria" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Produto">Produto</SelectItem>
                <SelectItem value="UX">UX</SelectItem>
                <SelectItem value="Infra">Infra</SelectItem>
            </SelectContent >
        </Select >
    )
}
