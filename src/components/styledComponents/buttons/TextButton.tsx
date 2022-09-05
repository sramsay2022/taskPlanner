import React from 'react'
import { Button } from 'react-bootstrap'

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INFO = 'info',
  DANGER = 'danger',
  OUTLINEDANGER = 'outline-danger',
}

interface TextButtonProps {
  text: string
  onClick: () => void
  variant?: ButtonVariant
  disabled?: boolean
  className?: string
}

export default function TextButton(props: TextButtonProps) {
  const { text, onClick, variant, disabled, className } = props

  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </Button>
  )
}
