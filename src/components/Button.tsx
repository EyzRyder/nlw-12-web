const style = {
  color: '#ffff',
}
interface buttonProps {
  title: string
}

export default function Button(props: buttonProps) {
  return <div style={style}>{props.title}</div>
}
