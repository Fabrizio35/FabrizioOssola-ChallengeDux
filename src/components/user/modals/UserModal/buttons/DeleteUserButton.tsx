import { Button } from 'primereact/button'

interface DeleteUserButtonProps {
  handleDelete: () => void
  isSubmitting: boolean
}

const DeleteUserButton = ({
  handleDelete,
  isSubmitting,
}: DeleteUserButtonProps) => {
  return (
    <Button
      type="button"
      icon="pi pi-trash"
      severity="danger"
      tooltip="Eliminar usuario"
      tooltipOptions={{ position: 'bottom', className: 'text-xs' }}
      className="p-button-text text-white"
      style={{ background: 'transparent', border: 'none' }}
      onClick={handleDelete}
      disabled={isSubmitting}
    />
  )
}

export default DeleteUserButton
