import { Card, CardContent } from "../ui/card";
import type { ReactNode } from "react";

export interface HomeShortcutProps {
    title: string
    icon: ReactNode
}

export function HomeShortcut({ title, icon }: HomeShortcutProps) {
    return (
        <Card className="transition-all duration-100 transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500 border-1 border-transparent hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-200 cursor-pointer">
            <CardContent className="flex flex-col gap-2 items-center">
                {icon}
                <span className="font-semibold text-lg text-gray-700">{title}</span>
            </CardContent>
        </Card>
    )
}