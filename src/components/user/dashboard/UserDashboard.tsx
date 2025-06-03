'use client'
import UserPaginator from '../UserPaginator'
import UserTable from '../UserTable'
import Filters from '../filters/UserFilters'
import type { User } from '@/types'
import { useState } from 'react'

interface UserDashboardProps {
  users: User[]
}

const UserDashboard = ({ users }: UserDashboardProps) => {
  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [rows, setRows] = useState<number>(10)

  // Filtrar usuarios por nombre y estado
  const filteredUsers = users?.filter((user) => {
    const matchesSearch = search
      ? user.usuario.toLowerCase().includes(search.toLowerCase())
      : true
    const matchesStatus = status == '' ? true : user.estado === status
    return matchesSearch && matchesStatus
  })

  // Limpiar filtros
  const clearFilters = () => {
    setSearch('')
    setStatus('')
    setPage(1)
  }

  // Paginación
  const start = (page - 1) * rows
  const end = start + rows
  const paginatedUsers = filteredUsers?.slice(start, end)

  return (
    <>
      <Filters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        clearFilters={clearFilters}
      />
      <UserTable users={paginatedUsers} />
      <UserPaginator
        totalRecords={filteredUsers?.length}
        rows={rows}
        page={page}
        setPage={setPage}
        setRows={setRows}
      />
    </>
  )
}

export default UserDashboard
