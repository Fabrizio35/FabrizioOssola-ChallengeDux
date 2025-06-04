import { Toaster } from 'react-hot-toast'

const MyToaster = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 3000,
        style: { backgroundColor: '#0763E7', color: 'white' },
      }}
    />
  )
}

export default MyToaster
