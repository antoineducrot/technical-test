import { Card, CardContent, CardHeader, Typography } from '@mui/material'

import { useUpdateTodoStatusByIdMutation } from './api/use-update-todo-status-by-id.mutation'
import { IsDoneButton } from './is-done.button'

type TodoCardProps = {
  id: string
  title: string
  type: string
  isDone: boolean
  createdAt: string
}

const TodoCard = ({ todo }: { todo: TodoCardProps }) => {
  const { updateTodoStatusById } = useUpdateTodoStatusByIdMutation()

  const handleIsDoneClick = () => {
    updateTodoStatusById({ variables: { id: todo.id, isDone: !todo.isDone } })
  }

  const date = new Date(todo.createdAt)

  return (
    <Card>
      <CardHeader
        title={<Typography variant="h6">{todo.title}</Typography>}
        subheader={todo.type}
        action={
          <IsDoneButton isDone={todo.isDone} onClick={handleIsDoneClick} />
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {date.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  )
}

export { TodoCard }
