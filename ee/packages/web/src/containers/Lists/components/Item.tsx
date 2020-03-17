import React from 'react'
import styled from 'styled-components'
import { IItem } from '../../../Types'
import { DeleteIcon } from '../../../icons/DeleteIcon'
import { FlexContainerSt } from '../../../components/Layout'

interface Props {
  data: IItem
  onDelete: () => void
}

const ItemSt = styled(FlexContainerSt)`
  height: 40px;
  width: 160px;
  padding: 12px;
  margin: 10px;
  background: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  align-items: center;
`

export const Item: React.FunctionComponent<Props> = ({
  data: { name },
  onDelete
}) => {
  return (
    <ItemSt>
      {name}
      <DeleteIcon onClick={onDelete} />
    </ItemSt>
  )
}
