import { Card, CardContent, CardHeader, Typography } from '@mui/material'

import { IsDoneButton } from './is-done.button'
import { useUpdateTodoStatusByIdMutation } from './use-update-todo-status-by-id.mutation'

type TodoCardData = {
  id: string
  title: string
  type: string
  isDone: boolean
  createdAt: string
  text: string
}

type TodoCardProps = {
  todo: TodoCardData
}

const TodoCard = ({ todo }: TodoCardProps) => {
  const { updateTodoStatusById } = useUpdateTodoStatusByIdMutation()

  const handleIsDoneClick = () => {
    updateTodoStatusById({ variables: { id: todo.id, isDone: !todo.isDone } })
  }

  const date = new Date(todo.createdAt).toLocaleString()

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
          {date}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {todo.text}
        </Typography>
      </CardContent>
    </Card>
  )
}

export { TodoCard }
