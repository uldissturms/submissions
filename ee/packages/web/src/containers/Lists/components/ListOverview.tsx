import React, { useRef } from 'react'
import { IList } from '../../../Types'

import styled, { useTheme } from 'styled-components'
import { LinkSt } from '../../../components/Links'
import { Button } from '../../../components/Button'
import { Spacer } from '../../../components/Spacer'
import { Field } from '../../../components/Field'
import { Form } from '../../../components/Form'

const ListSt = styled.div``

interface ItemProps {
  data: IList
  onClick: () => void
}

const Item: React.FunctionComponent<ItemProps> = ({
  data: { name },
  onClick
}) => {
  const theme = useTheme()
  return (
    <ListSt onClick={onClick}>
      <LinkSt color={theme.colors.labelColor}>{name}</LinkSt>
    </ListSt>
  )
}

interface OverviewProps {
  data: IList[]
  onCreateList: (name: string) => void
  onSelectList: (id: string) => void
}

export const ListOverview: React.FunctionComponent<OverviewProps> = ({
  data,
  onCreateList,
  onSelectList
}) => {
  const listRef = useRef<HTMLInputElement>()
  return (
    <>
      <Form
        id="addList"
        onSubmit={async () => {
          if (listRef && listRef.current) {
            const name = listRef.current.value.trim()

            if (name === '') {
              return
            }

            await onCreateList(name)
            listRef.current.value = ''
          }
        }}
      >
        <Field id="name" placeholder="list name" ref={listRef} />
        <Spacer />
        <Button>Add</Button>
      </Form>
      <Spacer />
      <div id="lists">
        {data.map(x => (
          <Item key={x.id} data={x} onClick={() => onSelectList(x.id)} />
        ))}
      </div>
    </>
  )
}
