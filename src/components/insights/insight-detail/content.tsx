import { CategorySelect } from "@/components/selects/category-select";
import { PrioritySelect } from "@/components/selects/priority-select";
import { TypeSelect } from "@/components/selects/type-select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { IInsight } from "@/lib/fake-api/fake-insights";
import { Check, Clock9, Info, Pencil, ShieldQuestionMark, X } from "lucide-react";
import { useState } from "react";
import { tv } from "tailwind-variants";
import dayjs from 'dayjs'
import { Badge } from "@/components/ui/badge";
import { UsersSelect } from "@/components/selects/users-select";
dayjs.locale('pt-br');

const statusVariant = tv({
    base: 'p-1 px-3',
    variants: {
        status: {
            'Aberto': 'bg-red-500',
            'Em Progresso': 'bg-blue-500',
            'Resolvido': 'bg-emerald-500',
            'Encerrado': 'bg-gray-950'
        }
    }
})

export interface InsightDetailContentProps {
    insight?: IInsight
}

export function InsightDetailContent({ insight }: InsightDetailContentProps) {
    const [titleEdit, setTitleEdit] = useState(false)
    const [descriptionEdit, setDescriptionEdit] = useState(false)

    function handleSetTitleEdit() {
        setTitleEdit(!titleEdit)
    }

    function handleSetDescriptionEdit() {
        setDescriptionEdit(!descriptionEdit)
    }

    return (
        <Card className="p-6">
            {insight && (
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center">
                            <Tooltip>
                                <TooltipTrigger><Info size={20} className="text-yellow-500" /></TooltipTrigger>
                                <TooltipContent>
                                    <p>Apenas o criador tem permissão de editar essa Insight</p>
                                </TooltipContent>
                            </Tooltip>
                            <span className="font-medium text-sm text-gray-950">IS0000{insight?.id}</span>
                        </div>
                        <Badge className={statusVariant({ status: insight?.status })}>
                            {insight?.status === 'Aberto' && <ShieldQuestionMark />}
                            {insight?.status === 'Em Progresso' && <Clock9 />}
                            {insight?.status === 'Resolvido' && <Check />}
                            {insight?.status === 'Encerrado' && <X />}
                            {insight?.status}
                        </Badge>
                    </div>
                    <Separator />
                </div>
            )}


            <div>
                {titleEdit === false ? (
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-shadow-2xs">{insight ? insight.title : "Informe o título"}</h3>
                        <Tooltip>
                            <TooltipTrigger
                                className="cursor-pointer"
                                onClick={handleSetTitleEdit}>
                                <Pencil size={20}
                                    className="text-blue-500"
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Editar Título</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Input className="text-xl" value={insight?.title} />
                        <Tooltip>
                            <TooltipTrigger
                                className="cursor-pointer"
                                onClick={handleSetTitleEdit}>
                                <X size={20}
                                    className="text-red-500"
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Cancelar</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger
                                className="cursor-pointer"
                                onClick={handleSetTitleEdit}>
                                <Check size={20}
                                    className="text-emerald-500"
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Confirmar</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                )}

            </div>

            <div className="">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Descrição</span>
                </div>
                {descriptionEdit === false ? (
                    <div className="flex flex-col gap-2 hover:bg-gray-100">
                        <div className="border-1 border-gray-200 rounded-sm p-2 cursor-pointer" onClick={handleSetDescriptionEdit}>
                            <h3 className="font-medium text-sm text-gray-700 h-[150px] ">{insight ? insight.text : "Informe o título"}</h3>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Textarea className="w-full h-[150px] resize-none overflow-auto break-all whitespace-pre-wrap" disabled value={insight?.text} />
                        <div className="w-full grid grid-cols-2 gap-4 mt-2">
                            <Button onClick={handleSetDescriptionEdit} variant="destructive">
                                <X size={20}
                                    className="text-white"
                                />
                                Cancelar
                            </Button>
                            <Button onClick={handleSetDescriptionEdit} className="bg-emerald-500 hover:bg-emerald-400">
                                <Check size={20}
                                    className="text-white"
                                />
                                Confirmar
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full flex flex-col items-start gap-3">

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Responsável</span>
                    <UsersSelect value={insight!.responsibleId!} />
                </div>

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Prioridade</span>
                    <PrioritySelect defaultValue={insight && insight.priority} />
                </div>

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Categoria</span>
                    <CategorySelect defaultValue={insight && insight.area} />
                </div>

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Tipo</span>
                    <TypeSelect defaultValue={insight && insight.type} />
                </div>

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Criado em</span>
                    <Input className="text-sm font-medium text-gray-800" disabled value={dayjs(insight?.dateCreated).format('DD/MM/YYYY HH:mm:ss')} />
                </div>

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Atualizado em</span>
                    <Input className="text-sm font-medium text-gray-800" disabled value={dayjs(insight?.dateUpdated).format('DD/MM/YYYY HH:mm:ss')} />
                </div>
            </div>

            <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm items-center">
                <span className="text-sm text-gray-700">Criado por</span>
                <div className="flex gap-1 items-center mt-1">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                        <img
                            src="https://github.com/gefersonholdorf.png"
                            alt="Foto de perfil de Geferson Holdorf"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <span className="text-sm text-gray-900">{insight?.createdBy}</span>
                </div>
            </div>
        </Card>
    )
}