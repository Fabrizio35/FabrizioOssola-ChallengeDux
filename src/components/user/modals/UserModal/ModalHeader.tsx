import CloseModalButton from './buttons/CloseModalButton'
import DeleteUserButton from './buttons/DeleteUserButton'

interface ModalHeaderProps {
  isEdit: boolean
  onHide: () => void
  handleDelete: () => void
}

const ModalHeader = ({ handleDelete, isEdit, onHide }: ModalHeaderProps) => {
  return (
    <div
      className="flex align-items-center justify-content-between px-4"
      style={{ backgroundColor: '#0763E7' }}
    >
      <h2 className="text-xl font-bold text-white">
        {isEdit ? 'Editar usuario' : 'Nuevo usuario'}
      </h2>

      <div className="flex align-items-center">
        {isEdit && <DeleteUserButton handleDelete={handleDelete} />}
        <CloseModalButton version="icon" onHide={onHide} />
      </div>
    </div>
  )
}

export default ModalHeader
