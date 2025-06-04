import NewUserButton from './user/NewUserButton'

interface HeaderProps {
  title: string
  onNewUser: () => void
}

const Header: React.FC<HeaderProps> = ({ title, onNewUser }) => {
  return (
    <header className="flex justify-content-between align-items-center">
      <h1 className="text-3xl font-bold">{title}</h1>

      <NewUserButton onClick={onNewUser} />
    </header>
  )
}

export default Header
