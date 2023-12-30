import { forwardRef } from 'react'

type Props = React.ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      type={'text'}
      className={
        'relative block w-[200px] items-center border border-[#CECECE] px-2 text-base  text-black'
      }
    />
  )
})

Input.displayName = 'Input'
