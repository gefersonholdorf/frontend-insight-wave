import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import z from 'zod/v4'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export const loginFormSchema = z.object({
    email: z.email('Insira um e-mail válido'),
    password: z.string().min(1, 'Senha obrigatória')
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginForm() {
    const { handleSubmit, register, formState: { errors } } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const navigate = useNavigate()

    function submitFormLogin(data: LoginFormSchema) {
        console.log(data)
        navigate('/home')
    }

    return (
        <form onSubmit={handleSubmit(submitFormLogin)}>
            <div className='flex flex-col gap-4'>
                <div>
                    <Input aria-invalid={!!errors.email} {...register('email')} type='email' placeholder='Digite seu e-mail' />
                    {errors.email && <p className="text-[0.7rem] text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div>

                    <Input aria-invalid={!!errors.password} {...register('password')} type='password' placeholder='Digite sua senha'></Input>
                    {errors.password && <p className="text-[0.7rem] text-red-500">{errors.password.message}</p>}
                </div>
            </div>
            <Button className='w-full mt-8'>Login</Button>

            <p className="text-sm text-right text-blue-600 hover:underline cursor-pointer mt-2">
                Esqueceu a senha?
            </p>
        </form>
    )
}