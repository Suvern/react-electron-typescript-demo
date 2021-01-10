import * as React from 'react'

export interface Props {
  name: string
  value?: number
}

const Hello: React.FC<Props> = (props: Props) => {
  const { name, value = 0 } = props
  return (
    <>
      <div>name: {name}</div>
      <div>value: {value}</div>
    </>
  )
}

export default Hello
