import BoxSidebar from '@/assets/images/box-sidebar.png'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div
      style={{ backgroundColor: '#2D3E50' }}
      className="min-h-screen w-4rem flex flex-column align-items-center gap-4 p-5 fixed mt-6"
    >
      {[1, 2, 3, 4, 5, 6].map((elem) => (
        <Image
          key={elem}
          src={BoxSidebar}
          alt="box-sidebar"
          className="cursor-pointer"
        />
      ))}
    </div>
  )
}

export default Sidebar
