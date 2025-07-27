import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { insightsMock } from "@/lib/fake-api/fake-insights"
import { ArrowLeft, Check, Clock9, Info, Newspaper, Pencil, ShieldQuestionMark, X } from "lucide-react"
import { NavLink, useParams } from "react-router-dom"
import { tv } from "tailwind-variants"
import dayjs from 'dayjs'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
dayjs.locale('pt-br');
import { Textarea } from "@/components/ui/textarea"
import Comments from "@/components/ui/comments"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

const priorityVariant = tv({
    base: 'p-1 px-3',
    variants: {
        priority: {
            'Baixa': 'bg-emerald-500',
            'Média': 'bg-blue-500',
            'Alta': 'bg-orange-500',
            'Crítica': 'bg-red-500',
        }
    }
})

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

export function InsightDetail() {
    const { id } = useParams()

    const [titleEdit, setTitleEdit] = useState(false)
    const [descriptionEdit, setDescriptionEdit] = useState(false)

    function handleSetTitleEdit() {
        setTitleEdit(!titleEdit)
    }

    function handleSetDescriptionEdit() {
        setDescriptionEdit(!descriptionEdit)
    }

    const insight = insightsMock.find((insight) => insight.id === Number(id))

    return (
        <div className="w-full">
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

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
                <Card className="p-6">
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

                    <div>
                        {titleEdit === false ? (
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-semibold text-shadow-2xs">{insight?.title}</h3>
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
                                    <h3 className="font-medium text-sm text-gray-700 h-[150px] ">{insight?.text}</h3>
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
                        <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm items-center">
                            <span className="text-sm text-gray-700">Responsável</span>
                            <div className="flex gap-1 items-center mt-1">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                                    <img
                                        src="https://github.com/gefersonholdorf.png"
                                        alt="Foto de perfil de Geferson Holdorf"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-sm text-gray-900">{insight?.responsible}</span>
                            </div>
                        </div>

                        <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                            <span className="text-sm text-gray-700">Prioridade</span>
                            <Badge className={priorityVariant({ priority: insight?.priority })}>{insight?.priority}</Badge>
                        </div>

                        <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                            <span className="text-sm text-gray-700">Categoria</span>
                            <Badge className="p-1 px-3">{insight?.area}</Badge>
                        </div>

                        <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                            <span className="text-sm text-gray-700">Tipo</span>
                            <Badge className="p-1 px-3">{insight?.type}</Badge>
                        </div>

                        <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                            <span className="text-sm text-gray-700">Criado em</span>
                            <h3 className="text-sm font-medium text-gray-800">{dayjs(insight?.dateCreated).format('DD/MM/YYYY HH:mm:ss')}</h3>
                        </div>

                        <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                            <span className="text-sm text-gray-700">Atualizado em</span>
                            <h3 className="text-sm font-medium text-gray-800">{dayjs(insight?.dateUpdated).format('DD/MM/YYYY HH:mm:ss')}</h3>
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

                <Card className="p-6">
                    <CardHeader className="w-full">
                        <CardTitle className="w-full text-center font-semibold text-gray-700 text-lg">Eventos/Comentários</CardTitle>
                    </CardHeader>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-start gap-2">
                            <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-300">
                                <img
                                    src="https://github.com/gefersonholdorf.png"
                                    alt="Foto de perfil de Geferson Holdorf"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <Textarea className="w-full h-[100px] resize-none overflow-auto break-all whitespace-pre-wrap" placeholder="Escreva um comentário..." />
                        </div>
                        <div className="w-full grid grid-cols-2 gap-2">
                            <Button className="bg-gray-950 hover:bg-gray-800">Cancelar</Button>
                            <Button>Enviar</Button>
                        </div>
                    </div>

                    <ScrollArea className="h-[500px] rounded-md border p-4">
                        <Comments />
                    </ScrollArea>
                </Card>
            </div>
        </div>
    )
}