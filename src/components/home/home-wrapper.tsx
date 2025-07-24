import { HomePresentation } from "./home-presentation";

export function HomeWrapper() {
    return (
        <div className="grid lg:grid-cols-2">
            <HomePresentation />
            <div></div>
        </div>
    )
}