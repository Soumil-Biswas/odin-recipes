import { Outlet } from 'react-router-dom'
import Header from './Content/Header/Header'
import Footer from './Content/Footer/Footer'

function App() {
  return (
    <div className='w-full flex flex-col min-h-screen justify-between bg-[--background-color-offset]'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
