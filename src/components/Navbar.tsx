import Logo from '@/assets/images/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header
      style={{ backgroundColor: '#0763E7' }}
      className="flex align-items-center w-full pr-4 py-1 justify-content-between fixed h-3rem z-5"
    >
      <Image src={Logo} alt="Dux Software Logo" />

      <i
        className="pi pi-cog cursor-pointer"
        style={{ fontSize: '20px', color: 'white' }}
      />
    </header>
  )
}

export default Navbar
