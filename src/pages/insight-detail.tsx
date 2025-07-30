import { InsightDetailContent } from "@/components/insights/insight-detail/content"
import { InsightDetailEventsComments } from "@/components/insights/insight-detail/events-comments"
import { InsightDetailHeader } from "@/components/insights/insight-detail/header"
import { insightsMock } from "@/lib/fake-api/fake-insights"
import { useParams } from "react-router-dom"

export function InsightDetail() {
    const { id } = useParams()

    const insight = insightsMock.find((insight) => insight.id === Number(id))

    return (
        <div className="w-full">
            <InsightDetailHeader insight={insight!} />

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
                <InsightDetailContent insight={insight!} />
                <InsightDetailEventsComments />
            </div>
        </div>
    )
}