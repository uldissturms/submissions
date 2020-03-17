import React from 'react'
import styled from 'styled-components'

const InputSt = styled.input`
  border-radius: 4px;
  font-size: 20px;
  padding: 12px;
`

interface Props {
  id: string
  placeholder?: string
}

export const Field = React.forwardRef(({ id, placeholder }: Props, ref) => (
  <InputSt type="text" id={id} placeholder={placeholder} ref={ref} />
))
