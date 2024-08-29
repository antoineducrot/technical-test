import { gql, useQuery } from '@apollo/client'

import { TodoOrdering } from './filters/todo-ordering.enum'
import { TodoType } from './filters/todo-type.enum'

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
  orderBy: TodoOrdering
  filters: {
    types: TodoType[] | undefined
    isDone: boolean | undefined
  }
}

const GET_TODO_QUERY = gql`
  query getTodoList($orderBy: Ordering!, $filters: TodoFiltersInput!) {
    getTodoList(orderBy: $orderBy, filters: $filters) {
      id
      title
      type
      isDone
      createdAt
    }
  }
`

const useGetTodoListQuery = (variables: GetTodoListQueryVariables) => {
  const response = useQuery<
    GetTodoListQueryResponse,
    GetTodoListQueryVariables
  >(GET_TODO_QUERY, { variables, fetchPolicy: 'network-only' })

  return {
    data: response.data?.getTodoList,
    loading: response.loading
  }
}

export { useGetTodoListQuery }
