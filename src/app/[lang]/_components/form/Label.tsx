type Props = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'label'>

export const Label: React.FC<Props> = ({ children, ...props }) => {
  return (
    <label {...props} className={'mb-4 text-[15px] block text-xl font-bold leading-3 text-white'}>
      {children}
    </label>
  )
}
