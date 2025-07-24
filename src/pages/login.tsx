import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import Logo from '../assets/logo.png'
import { LoginForm } from '@/components/auth/login/login-form'

export function Login() {
    return (
        <div className="w-full h-screen max-h-screen bg-gradient-to-b from-blue-500 to-gray-50 flex flex-col">
            <div className="flex justify-center p-6">
                <img src={Logo} alt="Logo" className="h-30" />
            </div>

            <Card className=' flex justify-between rounded-t-4xl h-full'>
                <div>
                    <CardTitle className='font-bold text-2xl text-shadow-2xs text-center text-blue-950'>Centralize. Aprenda. Evolua.</CardTitle>
                    <CardDescription>
                        <p className="text-sm text-center text-gray-500 mt-1">
                            Acesse sua conta para continuar
                        </p>
                    </CardDescription>
                </div>
                <CardContent className='lg:w-8/12 lg:mx-auto'>
                    <CardTitle className='font-bold text-2xl text-shadow-2xs text-center mb-6 text-blue-950'>LOGIN</CardTitle>
                    <LoginForm />
                </CardContent>
                <CardFooter>
                    <p className="text-xs text-center text-muted-foreground m-auto">
                        © 2025 InsightWave. Desenvolvido por Geferson Holdorf <br />
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
