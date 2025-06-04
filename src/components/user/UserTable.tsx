import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import type { User } from '@/types'
import { Button } from 'primereact/button'

interface UserTableProps {
  users: User[]
  onUserClick: (user: User) => void
}

const UserTable = ({ users, onUserClick }: UserTableProps) => {
  const userBody = (rowData: User) => (
    <Button
      className="p-1 underline border-none font-bold"
      style={{ color: '#0763E7', background: 'none' }}
      onClick={() => onUserClick(rowData)}
      type="button"
    >
      {rowData.usuario}
    </Button>
  )

  return (
    <DataTable value={users} className="p-datatable-sm">
      <Column field="id" header="Id" sortable />
      <Column field="usuario" header="Usuario" body={userBody} sortable />
      <Column field="estado" header="Estado" sortable />
      <Column field="sector" header="Sector" sortable />
    </DataTable>
  )
}

export default UserTable
