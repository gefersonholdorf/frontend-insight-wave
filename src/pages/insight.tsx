import { InsightComponent } from "@/components/insights/insights-list";

export function Insight() {
    return (
        <div className="w-full ">
            <InsightComponent.Header />
            <InsightComponent.Content />
        </div>
    )
}