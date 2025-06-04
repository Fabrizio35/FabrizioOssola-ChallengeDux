import { Suspense } from 'react'
import UserDashboardSSRWrapper from '@/components/user/dashboard/UserDashboardSSRWrapper'
import SuspenseLoader from '@/components/SuspenseLoader'

export default function Home() {
  return (
    <main className="px-5 pt-6 ml-7 min-h-screen">
      <Suspense fallback={<SuspenseLoader />}>
        <UserDashboardSSRWrapper sector="1111" />
      </Suspense>
    </main>
  )
}
