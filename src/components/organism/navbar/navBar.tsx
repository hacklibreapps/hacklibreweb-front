import { Logo } from '@/components/atom/structures/navbar'
import { Menu } from '@/components/molecule/navbar/navBar'

const NavBar = () => {
  return (
    <div className='w-full sticky top-0 bg-white10 h-24 flex flex-row justify-around items-center'>
      <div className='w-2/12 h-24 flex flex-row justify-center items-center'>
        <Logo />
      </div>
      <div className='w-8/12 h-24 flex flex-row justify-end items-center'>
        <Menu />
      </div>
    </div>
  )
}

export { NavBar }
