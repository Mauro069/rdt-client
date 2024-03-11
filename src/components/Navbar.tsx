import { LINKS } from '@/config/links'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-center my-4'>
      <div className='w-[500px] bg-gray-300 flex gap-4 items-center justify-around p-4 rounded-lg uppercase font-bold'>
        <Link className='hover:underline' href={LINKS.HOME}>
          Inicio
        </Link>
        <Link className='hover:underline' href={LINKS.LOGIN}>
          Iniciar sesión
        </Link>
        <Link className='hover:underline' href={LINKS.REGISTER}>
          Registro
        </Link>
      </div>
    </nav>
  )
}
