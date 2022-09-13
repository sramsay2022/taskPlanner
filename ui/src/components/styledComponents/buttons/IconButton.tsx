import './IconButton.css'

export enum Icon {
  DELETE = 'delete',
  EDIT = 'edit',
  CROSS = 'cross',
  PLUS = 'plus',
}

interface IconButtonProps {
  icon: Icon
  onClick: () => void
  className?: string
}

export default function IconButton(props: IconButtonProps) {
  const { icon, onClick, className = '' } = props
  const combinedClassName = `${icon.toString()}IconButton ${className}`

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      aria-label={icon.toString()}
    ></button>
  )
}
