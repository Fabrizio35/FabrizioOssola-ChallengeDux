import { Button } from 'primereact/button'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'

interface DeleteUserButtonProps {
  handleDelete: () => void
}

const DeleteUserButton = ({ handleDelete }: DeleteUserButtonProps) => {
  const HeaderConfirm = () => (
    <h3
      className="text-xl font-bold text-white p-3 m-0 mb-5"
      style={{ backgroundColor: '#0763E7' }}
    >
      Confirmar eliminación
    </h3>
  )

  const MessageConfirm = () => (
    <span className="font-semibold text-lg">
      ¿Estás seguro de que deseas eliminar este usuario?
    </span>
  )

  const showConfirm = () => {
    confirmDialog({
      header: <HeaderConfirm />,
      message: <MessageConfirm />,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Eliminar',
      rejectLabel: 'Cancelar',
      acceptClassName: 'p-button-danger',
      accept: handleDelete,
      closable: false,
    })
  }

  return (
    <>
      <Button
        type="button"
        icon="pi pi-trash"
        severity="danger"
        tooltip="Eliminar usuario"
        tooltipOptions={{ position: 'bottom', className: 'text-xs' }}
        className="p-button-text text-white"
        style={{ background: 'transparent', border: 'none' }}
        onClick={showConfirm}
      />
      <ConfirmDialog />
    </>
  )
}

export default DeleteUserButton
