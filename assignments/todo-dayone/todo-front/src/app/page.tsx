'use client'

import { Box, Container, Grid2 as Grid, Typography } from '@mui/material'

import { useGetTodoListQuery } from '@/features/todo/api/use-get-todo-list.query'
import { TodoCard } from '@/features/todo/todo-card'

export default function Home() {
  const data = useGetTodoListQuery()

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Todo App
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {data.map((todo) => (
          <Grid key={todo.id} size={{ xs: 4 }}>
            <TodoCard todo={todo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
