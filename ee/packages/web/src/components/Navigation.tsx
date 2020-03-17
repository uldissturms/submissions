import React from 'react'
import styled from 'styled-components'
import { LinkSt } from './Links'

const NavigationSt = styled.nav``

const NavigationListSt = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const NavigationItemSt = styled.li`
  padding: 0 2rem;
`

const NavigationLinkSt = styled(LinkSt)`
  font-weight: 700;
  font-size: 18px;
`
export const Navigation = () => (
  <NavigationSt>
    <NavigationListSt>
      <NavigationItemSt>
        <NavigationLinkSt href="">Lists</NavigationLinkSt>
      </NavigationItemSt>
    </NavigationListSt>
  </NavigationSt>
)
