import React from 'react'

interface Props {
  id?: string
  children: React.ReactNode
  onSubmit?: () => void
}

export const Form: React.FunctionComponent<Props> = ({
  children,
  onSubmit,
  id,
}) => (
  <form
    id={id}
    onSubmit={e => {
      e.preventDefault()
      onSubmit && onSubmit()
    }}
  >
    {children}
  </form>
)
