type Props = {
  error: string
}

export const ErrorText: React.FC<Props> = ({ error }) => {
  return <div className='pl-1 pt-1 text-[14px] text-red-500'>{error}</div>
}
