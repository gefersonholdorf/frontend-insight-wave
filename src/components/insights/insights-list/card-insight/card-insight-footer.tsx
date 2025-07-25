import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

dayjs.extend(relativeTime);

export interface CardInsightFooterProps {
    dateCreated: Date
    createdBy: string
}

export function CardInsightFooter({ dateCreated, createdBy }: CardInsightFooterProps) {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                        <img
                            src="https://github.com/gefersonholdorf.png"
                            alt="Foto de perfil de Geferson Holdorf"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <span className="text-sm text-gray-500">{createdBy}</span>
                </div>
                <div>
                    <span className="text-sm text-gray-500">{dayjs(dateCreated).fromNow()}</span>
                </div>
            </div>
        </>
    )
}