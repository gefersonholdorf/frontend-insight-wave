import { insightsMock } from "@/lib/fake-api/fake-insights";
import { CardInsight } from "./card-insight";
import { Link } from "react-router-dom";

export function InsightContent() {
    return (
        <main className="pt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {insightsMock.map((insight) => {
                return (
                    <Link to={`/insights/${insight.id}`}>
                        <CardInsight.Wrapper key={insight.id}>
                            <CardInsight.Header title={insight.title} status={insight.status} />
                            <CardInsight.Content type={insight.type} priority={insight.priority} description={insight.description} />
                            <CardInsight.Footer createdBy={insight.createdBy} dateCreated={insight.dateCreated} />
                        </CardInsight.Wrapper>
                    </Link>
                )
            })}
        </main>
    )
}