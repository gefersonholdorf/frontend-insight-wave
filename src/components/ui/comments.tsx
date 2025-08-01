import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"

const items = [
  {
    id: 1,
    date: "15 minutes ago",
    title: "Hannah Kandell",
    action: "opened a new issue",
    description:
      "I'm having trouble with the new component library. It's not rendering properly.",
    image: "https://avatars.githubusercontent.com/u/68699314?v=4",
  },
  {
    id: 2,
    date: "10 minutes ago",
    title: "Chris Tompson",
    action: "commented on",
    description:
      "Hey Hannah, I'm having trouble with the new component library. It's not rendering properly.",
    image: "https://avatars.githubusercontent.com/u/68699314?v=4",
  },
  {
    id: 3,
    date: "5 minutes ago",
    title: "Emma Davis",
    action: "assigned you to",
    description:
      "The new component library is not rendering properly. Can you take a look?",
    image: "https://avatars.githubusercontent.com/u/68699314?v=4",
  },
  {
    id: 4,
    date: "2 minutes ago",
    title: "Alex Morgan",
    action: "closed the issue",
    description: "The issue has been fixed. Please review the changes.",
    image: "https://avatars.githubusercontent.com/u/68699314?v=4",
  },
]

export default function Comments() {
  return (
    <Timeline>
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
            <TimelineTitle className="mt-0.5">
              {item.title}{" "}
              <span className="text-muted-foreground text-sm font-normal">
                {item.action}
              </span>
            </TimelineTitle>
            <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
              <img
                src={item.image}
                alt={item.title}
                className="size-6 rounded-full"
              />
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent className="text-foreground mt-2 rounded-lg border px-4 py-3">
            {item.description}
            <TimelineDate className="mt-1 mb-0">{item.date}</TimelineDate>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
