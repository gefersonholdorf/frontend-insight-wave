import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

export interface CardInsightWrapperProps {
    children: ReactNode
}

export function CardInsightWrapper({ children }: CardInsightWrapperProps) {
    return (
        <Card className="flex hover:bg-blue-50 hover:border-blue-500 flex-col gap-2 p-2 justify-between transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl">
            {children}
        </Card>
    )
}