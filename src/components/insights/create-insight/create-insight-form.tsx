import { CategorySelect } from "@/components/selects/category-select"
import { PrioritySelect } from "@/components/selects/priority-select"
import { TypeSelect } from "@/components/selects/type-select"
import { UsersSelect } from "@/components/selects/users-select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import dayjs from "dayjs"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod/v4"

export const createInsightSchema = z.object({
    title: z
        .string()
        .min(3, 'O título deve conter no mínimo 3 caracteres.')
        .max(20, 'O título deve conter no máximo 20 caracteres.'),
    description: z.string(),
    responsibleId: z.string().min(1, 'Deve conter um responsável.'),
    priorityId: z.string(),
    categoryId: z.string('A categoria deve ser obrigatória.'),
    typeId: z.string('O tipo deve ser obrigatório.'),
    createdAt: z.date(),
    updatedAt: z.date(),
    createdBy: z.string()
})

export type CreateInsightSchema = z.infer<typeof createInsightSchema>

export function CreateInsightForm() {
    const { register, handleSubmit, control, formState: {
        errors
    } } = useForm<CreateInsightSchema>({
        resolver: zodResolver(createInsightSchema),
        defaultValues: {
            title: '',
            description: '',
            responsibleId: '',
            priorityId: '2',
            categoryId: '',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: '2'
        }
    })

    function handleSubmitCreateInsight(data: CreateInsightSchema) {
        console.log(data)
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSubmitCreateInsight)}>
            <div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Título</span>
                </div>
                <Input {...register('title')} placeholder="Informe o título" />
                {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
            </div>

            <div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Descrição</span>
                </div>

                <Textarea
                    {...register('description')}
                    className="w-full h-[150px] resize-none overflow-auto break-all whitespace-pre-wrap"
                    placeholder="Informe a descrição do Insight"
                />
            </div>

            <div className="w-full flex flex-col items-start gap-3">

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Responsável</span>
                    <Controller
                        control={control}
                        name='responsibleId'
                        render={({ field }) => (
                            <div>
                                <UsersSelect
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                                {errors.responsibleId && <span className="text-red-500 text-sm">{errors.responsibleId.message}</span>}
                            </div>
                        )}
                    />
                </div>

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Prioridade</span>
                    <Controller
                        control={control}
                        name="priorityId"
                        render={({ field }) => (
                            <PrioritySelect
                                onValueChange={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                </div>

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Categoria</span>
                    <Controller
                        control={control}
                        name="categoryId"
                        render={({ field }) => (
                            <CategorySelect
                                onValueChange={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                </div>

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Tipo</span>
                    <Controller
                        control={control}
                        name="typeId"
                        render={({ field }) => (
                            <TypeSelect
                                onValueChange={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                </div>

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Criado em</span>
                    <Input {...register('createdAt')} disabled value={dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss')} />
                </div>

                <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                    <span className="text-sm text-gray-700">Atualizado em</span>
                    <Input {...register('updatedAt')} disabled value={dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss')} />
                </div>
            </div>

            <div className="w-full grid gap-6 grid-cols-2 hover:bg-gray-100 py-2 px-2 rounded-sm">
                <span className="text-sm text-gray-700">Criado por</span>
                <Controller
                    control={control}
                    name='createdBy'
                    render={({ field }) => (
                        <UsersSelect
                            disable
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Button variant="destructive">Cancelar</Button>
                <Button className="bg-emerald-500 hover:bg-emerald-400">Criar</Button>
            </div>
        </form>
    )
}