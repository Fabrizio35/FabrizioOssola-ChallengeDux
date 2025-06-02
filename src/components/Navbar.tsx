import Logo from '@/assets/images/logo.png'
import Image from 'next/image'
import 'primeicons/primeicons.css'

const Navbar = () => {
  return (
    <header
      style={{ backgroundColor: '#0763E7' }}
      className="flex align-items-center w-full pr-4 py-1 justify-content-between"
    >
      <Image src={Logo} alt="Dux Software Logo" />

      <i className="pi pi-cog cursor-pointer" style={{ fontSize: '20px', color: 'white' }} />
    </header>
  )
}

export default Navbar
