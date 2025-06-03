import NewUserButton from './user/NewUserButton'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex justify-content-between align-items-center">
      <h1 className="text-3xl font-bold">{title}</h1>

      <NewUserButton />
    </header>
  )
}

export default Header
