import React from 'react'
import styled from 'styled-components'

const ButtonSt = styled.button`
  border-radius: 5px;
  color: ${(({theme}) => theme.colors.white)};
  background-color: ${(({theme}) => theme.colors.blue)};
  text-align: center;
  box-shadow: inset 0 0 0 2px ${(({theme}) => theme.colors.blue)};
  font-size: 20px;
  font-weight: 700;
  padding: 13px 30px;
  outline: none;
`

interface Props {
  children: React.ReactNode
  onClick: () => void
}

export const Button: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <ButtonSt {...props}>{children}</ButtonSt>
)
