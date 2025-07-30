import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { IInsight } from "@/lib/fake-api/fake-insights";
import { ArrowLeft, Check, Clock9, Newspaper, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export interface InsightDetailHeaderProps {
    insight: IInsight
}

export function InsightDetailHeader({ insight }: InsightDetailHeaderProps) {
    return (
        <>
            <NavLink to={"/insights"}>
                <div className="flex gap-1 items-center text-center pl-10 lg:pl-0">
                    <ArrowLeft size={15} />
                    <span className="text-sm text-gray-600">Voltar</span>
                </div>
            </NavLink>
            <Card className="p-4 mt-2">
                <div className="flex gap-2 flex-col lg:flex-row items-center">
                    <div className="w-full flex gap-2 items-center justify-center lg:justify-start">
                        <Newspaper />
                        <h1 className="text-center lg:text-start text-[1.2rem] font-bold text-gray-800">Insight Detalhado</h1>
                    </div>
                    {insight?.status === 'Aberto' &&
                        <>
                            <Button className="w-full lg:w-fit" variant="destructive">
                                <X />
                                Cancelar Insight
                            </Button>
                            <Button className="w-full lg:w-fit">
                                <Clock9 />
                                Iniciar Insight
                            </Button>
                        </>
                    }

                    {insight?.status === 'Em Progresso' &&
                        <>
                            <Button className="w-full lg:w-fit" variant="destructive">
                                <X />
                                Cancelar Insight
                            </Button>
                            <Button className="w-full lg:w-fit bg-emerald-500 hover:bg-emerald-400">
                                <Check />
                                Resolver Insight
                            </Button>
                        </>
                    }
                </div>
            </Card>
        </>
    )
}