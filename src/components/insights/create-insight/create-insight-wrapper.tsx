import { Card } from "@/components/ui/card";
import { CreateInsightForm } from "./create-insight-form";

export function CreateInsightWrapper() {
    return (
        <Card className="p-6">
            <CreateInsightForm />
        </Card>
    )
}