import { fetchUsers } from '@/services/userService'
import UserDashboard from './UserDashboard'
import type { User } from '@/types'

interface Props {
  sector: string
}

const UserDashboardSSRWrapper = async ({ sector }: Props) => {
  // Fetch de usuarios desde el lado del servidor
  const data = await fetchUsers({
    sector,
    limit: 100,
    page: 1,
  })

  return <UserDashboard users={data as User[]} />
}

export default UserDashboardSSRWrapper
