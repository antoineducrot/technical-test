'use client'

import { Button, Grid2 as Grid } from '@mui/material'
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext
} from 'react'

import { TodoOrdering, TodoOrderings } from './todo-ordering.enum'
import { TodoType, TodoTypes } from './todo-type.enum'
import { useTodoDoneFilter } from './use-todo-done.filter'
import { useTodoOrderingFilter } from './use-todo-ordering.filter'
import { useTodoTypeFilters } from './use-todo-type.filter'

type ITodoFiltersContext = {
  filters: {
    types: TodoType[]
    isDone: boolean | undefined
  }
  orderBy: TodoOrdering
  Component: () => JSX.Element
}

const todoFiltersDefault: ITodoFiltersContext = {
  filters: {
    types: [
      TodoTypes.RH,
      TodoTypes.Tech,
      TodoTypes.Marketing,
      TodoTypes.Communication
    ],
    isDone: undefined
  },
  orderBy: TodoOrderings.DATE_DESC,
  Component: () => <></>
}

const TodoFiltersContext =
  createContext<ITodoFiltersContext>(todoFiltersDefault)

const TodoFiltersProvider = ({ children }: PropsWithChildren) => {
  const {
    Component: TypeFilterComponent,
    init: initTypeFilters,
    types
  } = useTodoTypeFilters()

  const {
    orderBy,
    init: initOrderFilter,
    Component: OrderFilterComponent
  } = useTodoOrderingFilter()

  const {
    isDone,
    init: initDoneFilter,
    Component: DoneFilterComponent
  } = useTodoDoneFilter()

  const init = useCallback(() => {
    initTypeFilters()
    initOrderFilter()
    initDoneFilter()
  }, [initTypeFilters, initOrderFilter, initDoneFilter])

  const Component = useCallback(() => {
    return (
      <Grid container spacing={2}>
        <Grid>
          <OrderFilterComponent />
        </Grid>
        <Grid>
          <TypeFilterComponent />
        </Grid>
        <Grid>
          <DoneFilterComponent />
        </Grid>
        <Grid>
          <Button onClick={init}>Reset</Button>
        </Grid>
      </Grid>
    )
  }, [OrderFilterComponent, TypeFilterComponent, DoneFilterComponent, init])

  return (
    <TodoFiltersContext.Provider
      value={{ orderBy, filters: { isDone, types }, Component }}
    >
      {children}
    </TodoFiltersContext.Provider>
  )
}

const useTodoFiltersContext = () => useContext(TodoFiltersContext)

export { TodoFiltersProvider, useTodoFiltersContext }
