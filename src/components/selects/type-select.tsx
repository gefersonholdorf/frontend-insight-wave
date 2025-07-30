import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from "react"

export interface TypeSelectProps extends Omit<React.ComponentPropsWithoutRef<typeof Select>, "onValueChange"> {
    defaultValue?: 'Bug' | 'Ideia' | 'Sugestão' | 'Incidente'
    onValueChange?: (value: 'Bug' | 'Ideia' | 'Sugestão' | 'Incidente') => void
}

export function TypeSelect({ defaultValue, onValueChange, ...rest }: TypeSelectProps) {
    const [value, setValue] = React.useState<'Bug' | 'Ideia' | 'Sugestão' | 'Incidente' | undefined>(defaultValue ?? undefined)

    function handleChange(newValue: string) {
        const type = newValue as 'Bug' | 'Ideia' | 'Sugestão' | 'Incidente'
        setValue(type)
        onValueChange?.(type)
    }

    return (
        <Select value={value} onValueChange={handleChange} {...rest}>
            <SelectTrigger className={`w-full`}>
                <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Bug">Bug</SelectItem>
                <SelectItem value="Ideia">Ideia</SelectItem>
                <SelectItem value="Sugestão">Sugestão</SelectItem>
                <SelectItem value="Incidente">Incidente</SelectItem>
            </SelectContent>
        </Select>
    )
}
