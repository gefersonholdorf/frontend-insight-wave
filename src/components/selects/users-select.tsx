"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const users = [
    { value: "1", label: "Luan Almeida" },
    { value: "2", label: "Felipe Sthepan" },
    { value: "3", label: "Maxiliano Fernandés" },
    { value: "4", label: "José Indiam" },
    { value: "5", label: "André Fagundes" },
]

export interface UsersSelectProps {
    value?: string
    onChange?: (value: string) => void
    disable?: boolean
}

export function UsersSelect({ value, onChange, disable }: UsersSelectProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    disabled={disable}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between items-center p-6"
                >
                    {value ? (
                        <>
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                                <img
                                    src="https://github.com/gefersonholdorf.png"
                                    alt="Foto de perfil"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            {users.find((user) => user.value === value)?.label}
                        </>
                    ) : (
                        <p className="h-9 text-gray-500 text-sm text-center py-2">Selecione um usuário...</p>
                    )}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Selecione um usuário..." className="h-9 text-gray-700" />
                    <CommandList>
                        <CommandEmpty>Nenhum usuário encontrado...</CommandEmpty>
                        <CommandGroup>
                            {users.map((user) => (
                                <CommandItem
                                    key={user.value}
                                    value={user.label}
                                    onSelect={(currentLabel) => {
                                        const selected = users.find((u) => u.label === currentLabel)
                                        if (selected) {
                                            onChange!(selected.value)
                                            setOpen(false)
                                        }
                                    }}
                                >
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                                        <img
                                            src="https://github.com/gefersonholdorf.png"
                                            alt="Foto de perfil"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    {user.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === user.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover >
    )
}
