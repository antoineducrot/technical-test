import Button from '@mui/material/Button'

interface IsDoneButtonProps {
  isDone: boolean
  onClick: () => void
}

const IsDoneButton: React.FC<IsDoneButtonProps> = ({ isDone, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: isDone ? 'green' : 'red',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: 'darkred'
        }
      }}
    >
      {isDone ? 'Done' : 'ToDo'}
    </Button>
  )
}

export { IsDoneButton }
