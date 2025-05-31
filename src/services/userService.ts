import { apiClient } from '@/apiClient'

export async function fetchUsers({
  sector = '1111',
  limit = 10,
  page = 1,
}: {
  sector?: string
  limit?: number
  page?: number
}) {
  const url = `https://staging.duxsoftware.com.ar/api-test/personal?sector=${sector}&_limit=${limit}&_page=${page}`

  const response = await apiClient(url)

  if (!response.ok) throw new Error('Error al obtener usuarios')

  const data = await response.json()

  const total = Number(response.headers.get('X-Total-Count')) || data.length

  return { data, total }
}
