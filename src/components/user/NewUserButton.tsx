import { Button } from 'primereact/button'

interface NewUserButtonProps {
  onClick: () => void
}

const NewUserButton = ({ onClick }: NewUserButtonProps) => {
  return <Button label="Nuevo usuario" icon="pi pi-plus" onClick={onClick} />
}

export default NewUserButton
