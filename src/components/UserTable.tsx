'use client'
import { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Paginator } from 'primereact/paginator'
import { ProgressSpinner } from 'primereact/progressspinner'
import { fetchUsers } from '@/services/userService'
import type { User } from '@/types'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

export default function UserTable({ sector }: { sector: string }) {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [first, setFirst] = useState<number>(0)
  const [rows, setRows] = useState<number>(10)

  const page = Math.floor(first / rows) + 1

  useEffect(() => {
    setLoading(true)
    fetchUsers({ sector, limit: rows, page })
      .then(({ data, total }) => {
        setUsers(data)
        setTotalRecords(total)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => setLoading(false))
  }, [sector, rows, page])

  if (loading) return <ProgressSpinner />

  return (
    <div>
      <DataTable value={users} paginator={false} className="p-datatable-sm">
        <Column field="id" header="Id" sortable />
        <Column field="usuario" header="Usuario" sortable />
        <Column field="estado" header="Estado" sortable />
        <Column field="sector" header="Sector" sortable />
      </DataTable>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        rowsPerPageOptions={[5, 10, 20]}
        onPageChange={(e) => {
          setFirst(e.first)
          setRows(e.rows)
        }}
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        className="justify-content-end mt-3"
      />
    </div>
  )
}
