import UserTable from '@/components/UserTable'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      <Suspense fallback={<div>Cargando usuarios...</div>}>
        <UserTable sector="1111" />
      </Suspense>
    </main>
  )
}
