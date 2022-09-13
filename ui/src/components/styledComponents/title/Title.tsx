interface TitleProps {
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export default function Title(props: TitleProps) {
  const { text, level, className } = props
  const TitleTag = `h${level}` as keyof JSX.IntrinsicElements
  return <TitleTag className={className}>{text}</TitleTag>
}
