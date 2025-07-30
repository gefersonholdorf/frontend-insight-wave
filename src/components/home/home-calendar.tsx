import { Card, CardContent, CardTitle } from "../ui/card";
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { tv } from "tailwind-variants";

dayjs.locale('pt-br')

export function HomeCalendar() {
    const monthName = dayjs().format('MMMM')
    const monthNameFormat = monthName.charAt(0).toUpperCase() + monthName.slice(1)

    return (
        <Card className="transition-all duration-300 transform hover:scale-[1.00] hover:shadow-xl">
            <CardTitle className="text-center font-semibold text-gray-950 text-shadow-2xs text-lg">{monthNameFormat} - {dayjs(new Date()).year()}</CardTitle>
            <CardContent className="grid grid-cols-5 gap-2 items-center">
                <DayComponent week={dayjs().subtract(2, 'day').format('ddd')} day={dayjs().subtract(2, 'day').format('DD')} />
                <DayComponent week={dayjs().subtract(1, 'day').format('ddd')} day={dayjs().subtract(1, 'day').format('DD')} />
                <DayComponent active="active" week={dayjs().format('ddd')} day={dayjs().format('DD')} />
                <DayComponent week={dayjs().add(1, 'day').format('ddd')} day={dayjs().add(1, 'day').format('DD')} />
                <DayComponent week={dayjs().add(2, 'day').format('ddd')} day={dayjs().add(2, 'day').format('DD')} />
            </CardContent>
        </Card>
    )
}

export interface DayComponentProps {
    week: string
    day: string
    active?: 'active' | 'default'
}

export function DayComponent({ week, day, active }: DayComponentProps) {
    const activeVariant = tv({
        base: 'flex flex-col gap-6 text-center transition-transform duration-300 ease-in-out',
        variants: {
            dayActive: {
                active: 'bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-lg shadow-lg text-white transition-all duration-300 transform hover:scale-[1.05] hover:shadow-xl',
                default: ''
            },
            weekColor: {
                active: 'text-gray-50',
                default: 'text-blue-50'
            }
        },
        defaultVariants: {
            dayActive: 'default'
        }
    })

    return (
        <div className={activeVariant({ dayActive: active })}>
            <span className={activeVariant({ weekColor: active })}>{week}</span>
            <span className="font-bold text-lg">{day}</span>
        </div>
    )
}