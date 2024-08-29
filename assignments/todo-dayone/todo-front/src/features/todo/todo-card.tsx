import { Card, CardHeader, Typography } from '@mui/material'

import { useUpdateTodoStatusByIdMutation } from './api/use-update-todo-status-by-id.mutation'
import { IsDoneButton } from './is-done.button'

type TodoCardProps = {
  title: string
  type: string
  isDone: boolean
  id: string
}

const TodoCard = ({ todo }: { todo: TodoCardProps }) => {
  const { updateTodoStatusById } = useUpdateTodoStatusByIdMutation()

  const handleIsDoneClick = () => {
    updateTodoStatusById({ variables: { id: todo.id, isDone: !todo.isDone } })
  }

  return (
    <Card>
      <CardHeader
        title={<Typography variant="h6">{todo.title}</Typography>}
        subheader={todo.type}
        action={
          <IsDoneButton isDone={todo.isDone} onClick={handleIsDoneClick} />
        }
      />
    </Card>
  )
}

export { TodoCard }
