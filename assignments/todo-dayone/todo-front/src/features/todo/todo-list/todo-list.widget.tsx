'use client'

import { Box, Container, Grid2 as Grid, Typography } from '@mui/material'

import { useTodoFiltersContext } from './filters/todo-filters.context'
import { TodoListCard } from './todo-list.card'
import { useGetTodoListQuery } from './use-get-todo-list.query'

const TodoListWidget = () => {
  const {
    Component: TodoFiltersComponent,
    filters,
    orderBy
  } = useTodoFiltersContext()

  const { data, loading } = useGetTodoListQuery({
    orderBy,
    filters
  })

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Todo App
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid>
          <TodoFiltersComponent />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {loading ? (
          <div>Loading...</div>
        ) : !data || !data.length ? (
          <Typography>No Todo</Typography>
        ) : (
          data.map((todo) => (
            <Grid key={todo.id} size={{ lg: 4, md: 6, xs: 12 }}>
              <TodoListCard todo={todo} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  )
}

export { TodoListWidget }
