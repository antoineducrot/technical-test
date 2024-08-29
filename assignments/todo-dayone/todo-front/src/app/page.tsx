'use client'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography
} from '@mui/material'
import { useState } from 'react'

import { Orderings } from '@/features/todo/api/ordering.enum'
import { useGetTodoListQuery } from '@/features/todo/api/use-get-todo-list.query'
import { TodoCard } from '@/features/todo/todo-card'

export default function Home() {
  const [isAsc, setIsAsc] = useState(true)

  const data = useGetTodoListQuery({
    orderBy: isAsc ? Orderings.DATE_ASC : Orderings.DATE_DESC
  })

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Todo App
        </Typography>
      </Box>
      <Button
        variant="contained"
        endIcon={isAsc ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
        onClick={() => setIsAsc(!isAsc)}
      >
        sort by date
      </Button>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {data.map((todo) => (
          <Grid key={todo.id} size={{ xs: 4 }}>
            <TodoCard todo={todo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
