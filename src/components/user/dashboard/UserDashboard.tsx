'use client'
import UserPaginator from '../UserPaginator'
import UserTable from '../UserTable'
import Filters from '../filters/UserFilters'
import UserModal from '../modals/UserModal/UserModal'
import type { User } from '@/types'
import { useState, useCallback } from 'react'
import { getUsers } from '@/services/userService'
import Header from '@/components/Header'

interface UserDashboardProps {
  initialUsers: User[]
  sector: string
}

const UserDashboard = ({ initialUsers, sector }: UserDashboardProps) => {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [rows, setRows] = useState<number>(10)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  // Refresca usuarios desde la API
  const refreshUsers = useCallback(async () => {
    const data = await getUsers({ sector, limit: 100, page: 1 })
    setUsers(Array.isArray(data) ? data : [])
  }, [sector])

  // Filtrar usuarios por nombre y estado
  const filteredUsers = users?.filter((user) => {
    const matchesSearch = search
      ? user.usuario.toLowerCase().includes(search.toLowerCase())
      : true
    const matchesStatus =
      status == 'TODOS' || status === '' ? true : user.estado === status
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

  // Modal handlers
  const handleNewUser = () => {
    setSelectedUser(null)
    setModalVisible(true)
  }

  const handleUserClick = (user: User) => {
    setSelectedUser(user)
    setModalVisible(true)
  }

  const handleModalSuccess = () => {
    refreshUsers()
  }

  return (
    <>
      <Header title="Usuarios" onNewUser={handleNewUser} />
      <Filters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        clearFilters={clearFilters}
      />
      <UserTable users={paginatedUsers} onUserClick={handleUserClick} />
      <UserPaginator
        totalRecords={filteredUsers?.length}
        rows={rows}
        page={page}
        setPage={setPage}
        setRows={setRows}
      />
      <UserModal
        visible={modalVisible}
        onHide={() => setModalVisible(false)}
        onSuccess={handleModalSuccess}
        user={selectedUser}
        sector={sector}
      />
    </>
  )
}

export default UserDashboard
