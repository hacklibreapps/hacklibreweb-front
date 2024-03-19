import {
  Logo,
  NavBarItem,
  SubNavBarItem,
  SubNavBarItemLayer
} from '@/components/atom/structures/navbar'

export default function HelperPage() {
  return (
    <>
      <div className='w-full flex flex-row justify-center items-center h-24'>
        <Logo />
      </div>
      <div className='w-full flex flex-row justify-center items-center h-24'>
        <NavBarItem content='NOSOTROS' />
      </div>
      <div className='w-full flex flex-row justify-center items-center'>
        <SubNavBarItem content='NOSOTROS' description='Misión Visión' url='#' />
      </div>
      <div className='w-full flex flex-row justify-center items-center'>
        <SubNavBarItemLayer>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt hic
          cumque voluptatem vel, quod dignissimos omnis veritatis obcaecati
          corrupti magnam saepe aspernatur earum odio nam est? Quas, officiis?
          Tempora, consequuntur. Quo incidunt atque, provident magnam quos
          perspiciatis quis. Aliquid voluptatem recusandae, inventore esse sed
          nam, consectetur impedit totam amet mollitia nihil soluta nobis?
          Nobis, vel impedit. Vero, quisquam. Temporibus, hic! Rem, sit, impedit
          delectus voluptas adipisci sequi mollitia consequuntur fugit ut omnis
          iure, soluta qui? Blanditiis velit quisquam ab commodi? Temporibus
          cumque illo sed necessitatibus quisquam minus ex fugit reprehenderit?
          Officia commodi obcaecati quidem impedit accusantium quas magnam
          culpa, sit, a provident vero, dolore quisquam omnis sed eaque nostrum
          id voluptatibus sequi porro animi. Officia aspernatur corporis illo
          quaerat quae?
        </SubNavBarItemLayer>
      </div>
    </>
  )
}
