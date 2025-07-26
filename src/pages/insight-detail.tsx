import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { insightsMock } from "@/lib/fake-api/fake-insights"
import { ArrowLeft, Check, Clock9, Newspaper, ShieldQuestionMark, X } from "lucide-react"
import { NavLink, useParams } from "react-router-dom"
import { tv } from "tailwind-variants"
import dayjs from 'dayjs'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
dayjs.locale('pt-br');
import { Textarea } from "@/components/ui/textarea"
import Comments from "@/components/ui/comments"

const priorityVariant = tv({
    base: 'p-1 px-3 h-full mt-4',
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

    const insight = insightsMock.find((insight) => insight.id === Number(id))

    return (
        <div className="w-full ">
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
                        <h1 className="text-center lg:text-start text-[1.2rem] font-bold text-gray-800">Feedback/Incidente Detalhado</h1>
                    </div>
                    <Button className="w-full lg:w-fit" variant="destructive">
                        <X />
                        Cancelar Insight
                    </Button>
                    <Button className="w-full lg:w-fit">
                        <Clock9 />
                        Iniciar Insight
                    </Button>
                </div>
            </Card>

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
                <Card className="p-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-sm text-gray-950">IS0000{insight?.id}</span>
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
                        <h3 className="text-xl font-semibold text-shadow-2xs">{insight?.title}</h3>
                    </div>

                    <div>
                        <span className="text-sm text-gray-500">Descrição</span>
                        <h3>{insight?.text}</h3>
                    </div>

                    <Separator />

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-500">Categoria</span>
                        <Badge className="p-1 px-3">{insight?.area}</Badge>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-gray-500">Tipo</span>
                        <Badge className="p-1 px-3">{insight?.type}</Badge>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-sm text-gray-500">Criado em</span>
                            <h3 className="text-sm font-medium text-gray-800">{dayjs(insight?.dateCreated).format('DD/MM/YYYY HH:mm:ss')}</h3>
                        </div>
                        <div>
                            <span className="text-sm text-gray-500">Atualizado em</span>
                            <h3 className="text-sm font-medium text-gray-800">{dayjs(insight?.dateUpdated).format('DD/MM/YYYY HH:mm:ss')}</h3>
                        </div>
                    </div>

                    <div>
                        <span className="text-sm text-gray-500">Criado por</span>
                        <div className="flex gap-1 items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
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
                    <div className="flex flex-col items-start justify-between">
                        <div className="flex items-start justify-between w-full">
                            <div>
                                <span className="text-sm text-gray-500">Responsável</span>
                                <div className="flex gap-1 items-center mt-1">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
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
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Prioridade</span>
                                <Badge className={priorityVariant({ priority: insight?.priority })}>{insight?.priority}</Badge>
                            </div>
                        </div>
                        <Separator className="mt-3" />
                    </div>

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

                    <div>
                        <Comments />
                    </div>
                </Card>
            </div>
        </div>
    )
}