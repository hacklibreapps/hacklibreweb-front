import { Button } from '@/components/atom/structures/forms'
import {
  NavBarItem,
  SubNavBarItem,
  SubNavBarItemLayer
} from '@/components/atom/structures/navbar'
const menuData = [{ id: 1, title: 'NOSOTROS', is_megamenu: true, url: '' }]
const Menu = () => {
  return (
    <div className='w-full flex flex-row justify-end items-center'>
      <NavBarItem content='NOSOTROS' url='#'>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-10/12 py-5 flex flex-row justify-end items-center '>
            <SubNavBarItem
              content='NOSOTROS'
              description='Misión Visión'
              url='#'
            />
            <SubNavBarItem
              content='NOSOTROS'
              description='Misión Visión'
              url='#'
            />
          </div>
          <div className='w-10/12 py-5 flex flex-row justify-end items-center '>
            <SubNavBarItemLayer>
              <div className='border w-full flex flex-row justify-center items-center'>
                <div className='w-1/2 border border-PinguinRed5'>
                  <div className='w-full flex flex-col justify-center items-center'>
                    <p className='text-black10 text-2xl pt-8 pb-1'>
                      ¿Quiéres comunicarte con{' '}
                      <span className='text-PinguinRed7'>Hacklibre</span>?
                    </p>
                    <p className='text-black5 text-xl pt-1 pb-8'>
                      {' '}
                      Agenda un metting con nosotros
                    </p>
                    <p className=''>
                      <Button content='Calendario' redButton size='xl' />
                    </p>
                  </div>
                </div>
                <div className='w-1/2 border border-PinguinRed5'>holas</div>
              </div>
            </SubNavBarItemLayer>
          </div>
        </div>
      </NavBarItem>
      <NavBarItem content='PRODUCTOS' />
      <NavBarItem content='SERVICIOS' />
      <NavBarItem content='CASOS DE ÉXITO' />
      <NavBarItem content='BLOG' />
    </div>
  )
}
export { Menu }
