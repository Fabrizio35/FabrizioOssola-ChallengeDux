import { Button } from 'primereact/button'

interface CloseModalButtonProps {
  version: 'icon' | 'text'
  onHide: () => void
  isSubmitting?: boolean
}

const CloseModalButton = ({
  version,
  onHide,
  isSubmitting,
}: CloseModalButtonProps) => {
  return (
    <>
      {version === 'icon' ? (
        <Button
          type="button"
          icon="pi pi-minus"
          tooltip="Cerrar"
          tooltipOptions={{ position: 'bottom', className: 'text-xs' }}
          className="p-button-text text-white"
          style={{ background: 'transparent', border: 'none' }}
          onClick={onHide}
          aria-label="Cerrar"
        />
      ) : (
        <Button
          type="button"
          label="Cancelar"
          aria-label="Cerrar"
          className="p-button-text border-1 w-10rem"
          style={{ borderColor: '#3B82F6' }}
          onClick={onHide}
          disabled={isSubmitting}
        />
      )}
    </>
  )
}

export default CloseModalButton
