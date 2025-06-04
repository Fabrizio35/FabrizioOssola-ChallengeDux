import { apiClient } from '@/apiClient'
import type { User } from '@/types'

// GET: Obtener todos los usuarios
export async function getUsers({
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

// POST: Crear un usuario
export async function createUser({
  user,
  sector,
}: {
  user: User
  sector?: string
}) {
  try {
    const url = `https://staging.duxsoftware.com.ar/api-test/personal?sector=${sector}`

    const response = await apiClient(url, 'POST', user)

    if (!response.ok) throw new Error('Error al crear usuario')

    const data: User = await response.json()

    return data
  } catch (error) {
    console.error(error)
    return error
  }
}

// PUT: Actualizar un usuario
export async function updateUser({
  userId,
  user,
  sector,
}: {
  userId: string
  user: User
  sector?: string
}) {
  try {
    const url = `https://staging.duxsoftware.com.ar/api-test/personal/${userId}?sector=${sector}`

    const response = await apiClient(url, 'PUT', user)

    if (!response.ok) throw new Error('Error al actualizar usuario')

    const data: User = await response.json()

    return data
  } catch (error) {
    console.error(error)
    return error
  }
}

// DELETE: Eliminar un usuario
export async function deleteUser({
  userId,
  sector,
}: {
  userId: string
  sector?: string
}) {
  try {
    const url = `https://staging.duxsoftware.com.ar/api-test/personal/${userId}?sector=${sector}`

    const response = await apiClient(url, 'DELETE')

    if (!response.ok) throw new Error('Error al eliminar usuario')

    return response
  } catch (error) {
    console.error(error)
    return error
  }
}
