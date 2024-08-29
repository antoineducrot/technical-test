import { gql, useMutation } from '@apollo/client'

import { useTodoFiltersContext } from './filters/todo-filters.context'

type UpdateTodoStatusByIdMutationVariables = {
  id: string
  isDone: boolean
}

type UpdateTodoStatusByIdMutationResponse = {
  updateTodoStatusById: {
    id: string
    isDone: boolean
  }
}

const UPDATE_TODO_STATUS_BY_ID_MUTATION = gql`
  mutation UpdateTodoStatusById($id: ID!, $isDone: Boolean!) {
    updateTodoStatusById(id: $id, isDone: $isDone) {
      id
      isDone
    }
  }
`

const useUpdateTodoStatusByIdMutation = () => {
  const {
    filters: { isDone }
  } = useTodoFiltersContext()

  const [updateTodoStatusById, { loading }] = useMutation<
    UpdateTodoStatusByIdMutationResponse,
    UpdateTodoStatusByIdMutationVariables
  >(UPDATE_TODO_STATUS_BY_ID_MUTATION, {
    update(cache, { data }) {
      if (isDone === undefined || !data) return

      cache.modify({
        fields: {
          getTodoList(todoList = []) {
            return todoList.filter(
              (ref: { __ref: string }) =>
                ref.__ref !== `Todo:${data.updateTodoStatusById.id}`
            )
          }
        }
      })
    }
  })

  return {
    updateTodoStatusById,
    loading
  }
}

export { useUpdateTodoStatusByIdMutation }
