import React, { useRef } from 'react'
import styled from 'styled-components'
import { IList, IItem } from '../../../Types'
import { FlexContainerSt } from '../../../components/Layout'
import { Item } from './Item'
import { Button } from '../../../components/Button'
import { Spacer } from '../../../components/Spacer'
import { Field } from '../../../components/Field'
import { Form } from '../../../components/Form'
import { Text } from '../../../components/Text'
import { slugify } from '../../../utils'

interface Props {
  data: IList
  onCreateItem: (x: IItem) => void
  onDeleteItem: (x: IItem) => void
  onDeleteList: (x: IList) => void
}

const ItemsSt = styled(FlexContainerSt)`
  flex-wrap: wrap;
`

const ActionsSt = styled.div`
  margin-left: 12px;
`

export const ListDetails: React.FunctionComponent<Props> = ({
  data,
  onCreateItem,
  onDeleteItem,
  onDeleteList
}) => {
  const nameRef = useRef<HTMLInputElement>()

  return (
    <>
      <Spacer />
      <Text margin="0 12px 0">{data.name}</Text>
      <Spacer />
      <ActionsSt>
        <Form
          id="addItem"
          onSubmit={async () => {
            if (nameRef && nameRef.current) {
              const name = nameRef.current.value.trim()

              if (name === '') {
                return
              }

              const slug = slugify(name)
              const item = {
                name,
                slug
              }

              onCreateItem(item)
              nameRef.current.value = ''
            }
          }}
        >
          <Field id="name" placeholder="item name" ref={nameRef} />
          <Spacer />
          <Button>Add</Button>
        </Form>
      </ActionsSt>
      <ItemsSt id="items">
        {data.items.map(x => (
          <Item key={x.slug} data={x} onDelete={() => onDeleteItem(x)} />
        ))}
      </ItemsSt>
      <ActionsSt>
        <Button id="deleteList" onClick={() => onDeleteList(data)}>
          Delete list
        </Button>
        <Spacer />
      </ActionsSt>
    </>
  )
}
