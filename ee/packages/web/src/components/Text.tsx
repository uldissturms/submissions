import styled from 'styled-components'

interface Props {
  margin: string
}

export const Text = styled.span<Props>`
  margin: ${(({margin}) => margin)};
`