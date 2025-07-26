import { HomeWrapper } from "@/components/home/home-wrapper";
import { Card } from "@/components/ui/card";
import { House } from "lucide-react";

export function Home() {
    return (
        <div className="w-full">
            <Card className="p-4 mt-2">
                <div className="flex gap-2 flex-col lg:flex-row items-center justify-between">
                    <div className="w-full flex gap-2 items-center justify-center lg:justify-start">
                        <House />
                        <h1 className="text-center lg:text-start text-2xl font-bold text-gray-800">Home</h1>
                    </div>
                    <div className="w-full">
                        Colocar Status API
                    </div>
                </div>
            </Card>
            <main className="pt-8">
                <HomeWrapper />
            </main>
        </div>
    )
}