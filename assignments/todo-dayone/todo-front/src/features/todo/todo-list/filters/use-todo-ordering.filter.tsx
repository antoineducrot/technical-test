import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Button } from '@mui/material'
import { useCallback, useState } from 'react'

import { TodoOrdering, TodoOrderings } from './todo-ordering.enum'

const useTodoOrderingFilter = () => {
  const [orderBy, setOrderBy] = useState<TodoOrdering>(TodoOrderings.DATE_DESC)

  const init = useCallback(() => {
    setOrderBy(TodoOrderings.DATE_DESC)
  }, [])

  return {
    orderBy,
    init,
    Component: () => (
      <Button
        variant="contained"
        endIcon={
          orderBy === TodoOrderings.DATE_DESC ? (
            <ArrowDownwardIcon />
          ) : (
            <ArrowUpwardIcon />
          )
        }
        onClick={() =>
          setOrderBy(
            orderBy === TodoOrderings.DATE_DESC
              ? TodoOrderings.DATE_ASC
              : TodoOrderings.DATE_DESC
          )
        }
      >
        sort by date
      </Button>
    )
  }
}

export { useTodoOrderingFilter }
