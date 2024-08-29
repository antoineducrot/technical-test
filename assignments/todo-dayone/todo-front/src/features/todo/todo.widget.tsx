import { TodoCard } from './card/todo.card'
import { useGetTodoByIdQuery } from './use-get-todo-by-id.query'

type TodoWidgetProps = {
  id: string
}

const TodoWidget = ({ id }: TodoWidgetProps) => {
  const { data, loading } = useGetTodoByIdQuery({ id })

  if (loading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>Todo not found</div>
  }

  return <TodoCard todo={data} />
}

export { TodoWidget }
