import type { ReactNode } from "react";
import { tv } from 'tailwind-variants';

export const activeVariant = tv({
    base: 'w-full p-2 pl-6 text-gray-700  flex items-center gap-2',
    variants: {
        active: {
            select: 'bg-blue-500 rounded-sm text-white font-semibold',
            default: 'hover:bg-blue-500 hover:rounded-sm hover:text-white hover:font-semibold'
        }
    },
    defaultVariants: {
        active: 'default'
    }
})

export interface NavComponent {
    icon: ReactNode
    title: string,
    active?: 'select' | 'default'
}

export function NavComponent({ icon, title, active = 'default' }: NavComponent) {
    return (
        <div className={activeVariant({ active })}>
            {icon}
            <span className="text-[0.9rem]">{title}</span>
        </div>
    )
}