import { Suspense } from 'react'
import UserDashboardSSRWrapper from '@/components/user/dashboard/UserDashboardSSRWrapper'

export default function Home() {
  return (
    <main className="px-5 pt-6 ml-7 min-h-screen">
      <Suspense
        fallback={
          <div
            style={{ color: '#0763E7' }}
            className="mt-5 ml-5 text-xl font-bold"
          >
            Cargando...
          </div>
        }
      >
        <UserDashboardSSRWrapper sector="1111" />
      </Suspense>
    </main>
  )
}
