import React from 'react'
import styled from 'styled-components'
import { FlexContainerCenteredSt } from './Layout'
import { Navigation } from './Navigation'

const HeaderSt = styled.header`
  background: ${({ theme }) => theme.colors.blue};
  height: 80px;
  border-bottom: 1px ${({ theme }) => theme.colors.slateGrey};
`

const LogoSt = styled.h1`
  width: 150px;
  height: 40px;
  margin-left: 30px;
`

export const Header = () => (
  <HeaderSt>
    <FlexContainerCenteredSt>
      <LogoSt>
        <img
          src="https://www.equalexperts.com/wp-content/themes/equalexperts/assets/logo.svg"
          alt="[=] Equal Experts"
        />
      </LogoSt>
      <Navigation />
    </FlexContainerCenteredSt>
  </HeaderSt>
)
