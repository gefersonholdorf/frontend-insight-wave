import { HomeWrapper } from "@/components/home/home-wrapper";
import { House } from "lucide-react";

export function Home() {
    return (
        <div className="w-full">
            <div className="w-full flex gap-2 items-center justify-center lg:justify-start">
                <House />
                <h1 className="text-center lg:text-start text-2xl font-bold text-gray-800">Home</h1>
            </div>
            <main className="pt-8">
                <HomeWrapper />
            </main>
        </div>
    )
}