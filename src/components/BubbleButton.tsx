import { ComponentProps, ReactNode } from "react"

export interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export function BubbleButton(props: BubbleButtonProps) {

  return (
    <button
      className='p-2 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none data-[active=true]:text-violet-700 data-[active=true]:font-bold '
      {...props}
    />
  )
}