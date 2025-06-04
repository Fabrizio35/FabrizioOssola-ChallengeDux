import { Button } from 'primereact/button'

interface ClearFiltersButtonProps {
  clearFilters: () => void
}

const ClearFiltersButton = ({ clearFilters }: ClearFiltersButtonProps) => {
  return (
    <Button
      icon="pi pi-filter-slash"
      tooltip="Limpiar filtros"
      tooltipOptions={{ position: 'left', className: 'text-xs' }}
      onClick={clearFilters}
      className="p-button-secondary w-6rem"
    />
  )
}

export default ClearFiltersButton
