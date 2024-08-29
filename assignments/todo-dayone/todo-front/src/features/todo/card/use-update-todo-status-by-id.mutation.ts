import { gql, useMutation } from '@apollo/client'

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
  const [updateTodoStatusById, { loading }] = useMutation<
    UpdateTodoStatusByIdMutationResponse,
    UpdateTodoStatusByIdMutationVariables
  >(UPDATE_TODO_STATUS_BY_ID_MUTATION, {})

  return {
    updateTodoStatusById,
    loading
  }
}

export { useUpdateTodoStatusByIdMutation }
