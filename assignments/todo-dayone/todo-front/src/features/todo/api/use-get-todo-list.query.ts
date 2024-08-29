import { gql, useQuery } from '@apollo/client'

type Todo = {
  id: string
  title: string
  type: string
  isDone: boolean
}

const QUERY = gql`
  query getTodoList {
    getTodoList {
      id
      title
      type
      isDone
    }
  }
`

const useGetTodoListQuery = (): Todo[] => {
  const { data } = useQuery<{ getTodoList: Todo[] }>(QUERY)

  return data?.getTodoList || []
}

export { useGetTodoListQuery }
