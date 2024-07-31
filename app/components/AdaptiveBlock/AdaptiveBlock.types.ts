import { Breakpoint } from '@/lib/hooks/useBreakpoint'

export interface AdaptiveBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  bpLess?: Breakpoint
  bpMore?: Breakpoint
}
