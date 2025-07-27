import { Badge } from "@/components/ui/badge"
import { tv } from "tailwind-variants"

export const statusVariant = tv({
  base: 'size-1.5 rounded-full',
  variants: {
    statusActive: {
      'OK': 'bg-emerald-500',
      'OFF': 'bg-red-500'
    }
  }
})

export interface StatusProps {
  name: string
  active: 'OK' | 'OFF'
}

export default function Status({ name, active }: StatusProps) {
  return (
    <Badge variant="outline" className="gap-1.5">
      <span
        className={statusVariant({ statusActive: active })}
        aria-hidden="true"
      ></span>
      {name}
    </Badge>
  )
}
