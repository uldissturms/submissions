import styled from 'styled-components'

export const LinkSt = styled.a<{color: string}>`
  color: ${(({theme, color}) => color || theme.colors.white)};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
