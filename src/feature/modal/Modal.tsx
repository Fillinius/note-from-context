//MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
//MUI
import { useNote } from '../../shared/context/notes/notesProvider'
import { useParams } from 'react-router-dom'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
interface BasicModalProp {
  open: boolean
  handleClose: () => void
}
export default function BasicModal({ open, handleClose }: BasicModalProp) {
  const { removeNote } = useNote()
  const { id } = useParams()
  if (!id) return 'Выберите заметку'

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Удаление заметки
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Вы действительно хотите удалить заметку.
          </Typography>
          <Typography>
            <Button onClick={() => removeNote(id)} size="small">
              Delete
            </Button>
            <Button onClick={handleClose} size="small">
              Cancel
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
