import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import type { User } from '@/types'

interface UserTableProps {
  users: User[]
}

const UserTable = ({ users }: UserTableProps) => {
  return (
    <DataTable value={users} className="p-datatable-sm">
      <Column field="id" header="Id" sortable />
      <Column field="usuario" header="Usuario" sortable />
      <Column field="estado" header="Estado" sortable />
      <Column field="sector" header="Sector" sortable />
    </DataTable>
  )
}

export default UserTable
