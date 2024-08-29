import { Button, ButtonGroup } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'

import { TodoType, TodoTypes } from './todo-type.enum'

const defaultTypes = [
  TodoTypes.RH,
  TodoTypes.Tech,
  TodoTypes.Marketing,
  TodoTypes.Communication
]

const useTodoTypeFilters = () => {
  const [types, setTypes] = useState<TodoType[]>(defaultTypes)

  const addTodoType = (type: TodoType) => {
    setTypes([...types, type])
  }

  const removeTodoType = (type: TodoType) => {
    setTypes(types.filter((t) => t !== type))
  }

  const selectAllTodoType = () => {
    setTypes(defaultTypes)
  }

  const selectBusinessTodoType = () => {
    setTypes([TodoTypes.Marketing, TodoTypes.Communication])
  }

  const isBusiness = useMemo(() => {
    return (
      types.includes(TodoTypes.Marketing) &&
      types.includes(TodoTypes.Communication) &&
      types.length === 2
    )
  }, [types])

  const isAll = useMemo(() => {
    return types.length === Object.values(TodoTypes).length
  }, [types])

  const init = useCallback(() => {
    setTypes(defaultTypes)
  }, [])

  return {
    types,
    init,
    Component: () => (
      <>
        <ButtonGroup sx={{ mr: 2 }}>
          <Button
            onClick={selectAllTodoType}
            variant={isAll ? 'contained' : 'outlined'}
          >
            All
          </Button>
          <Button
            onClick={selectBusinessTodoType}
            variant={isBusiness ? 'contained' : 'outlined'}
          >
            Business
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          {Object.values(TodoTypes).map((type) => {
            const isSelected = types.includes(type)

            return (
              <Button
                onClick={() =>
                  isSelected ? removeTodoType(type) : addTodoType(type)
                }
                variant={isSelected ? 'contained' : 'outlined'}
                key={type}
              >
                {type}
              </Button>
            )
          })}
        </ButtonGroup>
      </>
    )
  }
}

export { useTodoTypeFilters }
