'use client'

import { Box, Button, Container } from '@mui/material'
import Link from 'next/link'

import { TodoWidget } from '../../features/todo/todo.widget'

export default function Todo({ params }: { params: { id: string } }) {
  return (
    <Container maxWidth="lg">
      <Link href={'/'}>
        <Button sx={{ mt: 2 }} variant="contained">
          go back
        </Button>
      </Link>
      <Box sx={{ mt: 2 }}>
        <TodoWidget id={params.id} />
      </Box>
    </Container>
  )
}
