import React from 'react'
import styled from 'styled-components'

export const FlexContainerSt = styled.div`
  display: flex;
`

export const FlexContainerCenteredSt = styled(FlexContainerSt)`
  justify-content: space-between;
  align-items: center;
`

interface Props {
  left: React.ReactNode
  main: React.ReactNode
}

const LeftSt = styled.div`
  flex: 1 1 300px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.yellow};
  border-top: solid 10px ${({ theme }) => theme.colors.darkYellow};
`

const MainSt = styled.div`
  flex: 1 1 100%;
  background: ${({ theme }) => theme.colors.lightGrey};
  min-height: 600px;
`

export const TwoColumns: React.FunctionComponent<Props> = ({ left, main }) => (
  <FlexContainerSt>
    <LeftSt>{left}</LeftSt>
    <MainSt>{main}</MainSt>
  </FlexContainerSt>
)
