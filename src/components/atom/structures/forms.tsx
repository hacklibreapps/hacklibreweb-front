const Button = ({
  type,
  content,
  redButton,
  size
}: {
  type?: string
  content: string
  redButton?: boolean
  size?: string
}) => {
  const sizebutton =
    size === 'md'
      ? 'text-md'
      : size === 'xl'
      ? 'text-xl'
      : size === '2xl'
      ? 'text-2xl'
      : 'text-base'
  const isRedbutton = redButton ? 'bg-PinguinRed5' : 'bg-technologyCian5'
  const buttonType = type ? type : 'button'
  return (
    <input
      className={` ${isRedbutton} ${sizebutton} p-3 w-full rounded-2xl text-white10 font-bold `}
      type={buttonType}
      value={content}
    />
  )
}

export { Button }
