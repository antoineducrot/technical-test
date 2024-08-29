import { Button, ButtonGroup } from '@mui/material'
import { useCallback, useState } from 'react'

const TodoDoneFilterStates = {
  ALL: undefined,
  DONE: true,
  TODO: false
} as const

type TodoDoneState =
  (typeof TodoDoneFilterStates)[keyof typeof TodoDoneFilterStates]

const useTodoDoneFilter = () => {
  const [isDone, setIsDone] = useState<TodoDoneState>(TodoDoneFilterStates.ALL)

  const init = useCallback(() => {
    setIsDone(TodoDoneFilterStates.ALL)
  }, [])

  const handleTodoClick = () => {
    setIsDone(
      isDone === TodoDoneFilterStates.TODO
        ? TodoDoneFilterStates.ALL
        : TodoDoneFilterStates.TODO
    )
  }

  const handleDoneClick = () => {
    setIsDone(
      isDone === TodoDoneFilterStates.DONE
        ? TodoDoneFilterStates.ALL
        : TodoDoneFilterStates.DONE
    )
  }

  return {
    isDone,
    init,
    Component: () => (
      <ButtonGroup>
        <Button
          onClick={handleDoneClick}
          color="success"
          variant={
            isDone === TodoDoneFilterStates.DONE ? 'contained' : 'outlined'
          }
        >
          Done
        </Button>
        <Button
          onClick={handleTodoClick}
          color="error"
          variant={
            isDone === TodoDoneFilterStates.TODO ? 'contained' : 'outlined'
          }
        >
          Todo
        </Button>
      </ButtonGroup>
    )
  }
}

export { useTodoDoneFilter }
