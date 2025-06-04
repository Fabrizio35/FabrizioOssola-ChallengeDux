import { Button } from 'primereact/button'

interface SubmitButtonProps {
  isEdit: boolean
  isSubmitting: boolean
  isValid: boolean
}

const SubmitButton = ({ isEdit, isSubmitting, isValid }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      label={isEdit ? 'Guardar' : 'Confirmar'}
      icon="pi pi-check"
      className="w-10rem"
      loading={isSubmitting}
      disabled={isSubmitting || !isValid}
    />
  )
}

export default SubmitButton
