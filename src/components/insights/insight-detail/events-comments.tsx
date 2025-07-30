import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Comments from "@/components/ui/comments";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

export function InsightDetailEventsComments() {
    return (
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
    )
}