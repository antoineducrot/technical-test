import { gql, useQuery } from '@apollo/client'

type GetTodoByIdQueryTodo = {
  id: string
  title: string
  type: string
  isDone: boolean
  createdAt: string
  text: string
}

type GetTodoByIdQueryResponse = {
  getTodoById: GetTodoByIdQueryTodo
}

type GetTodoByIdQueryVariables = {
  id: string
}

const GET_TODO_QUERY = gql`
  query getTodoById($id: ID!) {
    getTodoById(id: $id) {
      id
      title
      type
      isDone
      createdAt
      text
    }
  }
`

const useGetTodoByIdQuery = (variables: GetTodoByIdQueryVariables) => {
  const response = useQuery<
    GetTodoByIdQueryResponse,
    GetTodoByIdQueryVariables
  >(GET_TODO_QUERY, { variables, fetchPolicy: 'network-only' })

  return {
    data: response.data?.getTodoById,
    loading: response.loading
  }
}

export { useGetTodoByIdQuery }
