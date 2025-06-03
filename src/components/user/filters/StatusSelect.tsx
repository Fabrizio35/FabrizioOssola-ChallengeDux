import { Dropdown } from 'primereact/dropdown'

interface StatusSelectProps {
  status: string
  setStatus: (status: string) => void
}

const StatusSelect = ({ setStatus, status }: StatusSelectProps) => {
  return (
    <Dropdown
      value={status}
      optionLabel="label"
      optionValue="value"
      placeholder="Estado"
      className="w-full"
      onChange={(e) => setStatus(e.value)}
      options={[
        { label: 'Todos', value: '' },
        { label: 'Activo', value: 'ACTIVO' },
        { label: 'Inactivo', value: 'INACTIVO' },
      ]}
    />
  )
}

export default StatusSelect
