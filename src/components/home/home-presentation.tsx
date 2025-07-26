import { Card, CardContent } from "../ui/card";
import Avatar from '../../assets/avatar.png'

export function HomePresentation() {
    return (
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 transition-all duration-300 transform hover:scale-[1.00] hover:shadow-xl">
            <CardContent className="grid grid-cols-2 justify-between">
                <div className="text-gray-100 h-full flex flex-col justify-center">
                    <h2 className="font-bold text-3xl text-shadow-2xs">Olá, Geferson</h2>
                    <p className="pt-4 font-medium text-sm">Cada insight é um passo rumo à excelência.</p>
                </div>
                <div className="flex w-full justify-end">
                    <img src={Avatar} alt="" width={150} height={150} className="object-contain" />
                </div>
            </CardContent>
        </Card>
    )
}