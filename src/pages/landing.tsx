import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar.png'
import { Button } from '@/components/ui/button'

export function Landing() {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-gray-100 to-gray-50 flex flex-col">
            <div className='flex justify-center p-6'>
                <h1 className='font-bold text-3xl text-blue-600 text-shadow-2xs'>Insight Wave</h1>
            </div>

            <div className="flex justify-center p-6">
                <img src={Avatar} alt="Logo" className="h-80" />
            </div>

            <div className='grid grid-cols-1 gap-4 p-6 lg:grid-cols-2 lg:w-8/12 lg:m-auto'>
                <Link to={'/login'}>
                    <Button className='w-full'>Fazer Login</Button>
                </Link>
                <Button className='w-full'>Cadastrar</Button>
            </div>
        </div>
    )
}
