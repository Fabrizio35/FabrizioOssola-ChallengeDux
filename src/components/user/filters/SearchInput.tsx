import { InputText } from 'primereact/inputtext'

interface SearchInputProps {
  search: string
  setSearch: (search: string) => void
}

const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  return (
    <span className="p-input-icon-left w-full">
      <i className="pi pi-search pl-2" />
      <InputText
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar"
        className="pl-5 w-full"
      />
    </span>
  )
}

export default SearchInput
