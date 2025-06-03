import SearchInput from './SearchInput'
import StatusSelect from './StatusSelect'
import ClearFiltersButton from './ClearFiltersButton'

interface FiltersProps {
  search: string
  status: string
  setSearch: (search: string) => void
  setStatus: (status: string) => void
  clearFilters: () => void
}

export default function Filters({
  search,
  status,
  setSearch,
  setStatus,
  clearFilters,
}: FiltersProps) {
  return (
    <div className="flex align-items-center justify-content-between gap-5 mb-4">
      <SearchInput search={search} setSearch={setSearch} />
      <StatusSelect status={status} setStatus={setStatus} />
      <ClearFiltersButton clearFilters={clearFilters} />
    </div>
  )
}
