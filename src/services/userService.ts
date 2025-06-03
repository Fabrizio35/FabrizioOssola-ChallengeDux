import { apiClient } from '@/apiClient'
import type { User } from '@/types'

// GET: Obtener todos los usuarios
export async function fetchUsers({
  sector = '1111',
  limit = 10,
  page = 1,
}: {
  sector?: string
  limit?: number
  page?: number
}) {
  try {
    const url = `https://staging.duxsoftware.com.ar/api-test/personal?sector=${sector}&_limit=${limit}&_page=${page}`

    const response = await apiClient(url)

    if (!response.ok) throw new Error('Error al obtener usuarios')

    const data: User[] = await response.json()

    return data
  } catch (error) {
    console.error(error)
    return error
  }
}
