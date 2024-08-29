import { gql, useQuery } from '@apollo/client'

import { Ordering } from './ordering.enum'

type GetTodoListQueryTodo = {
  id: string
  title: string
  type: string
  isDone: boolean
  createdAt: string
}

type GetTodoListQueryResponse = {
  getTodoList: GetTodoListQueryTodo[]
}

type GetTodoListQueryVariables = {
  orderBy: Ordering
}

const QUERY = gql`
  query getTodoList($orderBy: Ordering!) {
    getTodoList(orderBy: $orderBy) {
      id
      title
      type
      isDone
      createdAt
    }
  }
`

const useGetTodoListQuery = (
  variables: GetTodoListQueryVariables
): GetTodoListQueryTodo[] => {
  const { data } = useQuery<
    GetTodoListQueryResponse,
    GetTodoListQueryVariables
  >(QUERY, { variables })

  return data?.getTodoList || []
}

export { useGetTodoListQuery }
