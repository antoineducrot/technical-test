import { gql, useMutation } from '@apollo/client'

type UpdateTodoStatusByIdMutationVariables = {
  id: string
  isDone: boolean
}

type UpdateTodoStatusByIdMutationResponse = {
  id: string
  isDone: boolean
}

const MUTATION = gql`
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
  >(MUTATION)

  return {
    updateTodoStatusById,
    loading
  }
}

export { useUpdateTodoStatusByIdMutation }
