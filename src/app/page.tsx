import Header from '@/components/Header'
import UserDashboardSSRWrapper from '@/components/user/dashboard/UserDashboardSSRWrapper'

export default function Home() {
  return (
    <main className="px-5 pt-6 ml-7 min-h-screen">
      <Header title="Usuarios" />
      <UserDashboardSSRWrapper sector="1111" />
    </main>
  )
}
