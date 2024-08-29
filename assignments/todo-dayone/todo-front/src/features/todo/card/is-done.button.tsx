import Button from '@mui/material/Button'

interface IsDoneButtonProps {
  isDone: boolean
  onClick: () => void
}

const IsDoneButton: React.FC<IsDoneButtonProps> = ({ isDone, onClick }) => {
  return (
    <Button
      variant="contained"
      color={isDone ? 'success' : 'error'}
      onClick={onClick}
    >
      {isDone ? 'done' : 'todo'}
    </Button>
  )
}

export { IsDoneButton }
