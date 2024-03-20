import { LINKS } from '@/config/links'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-center gap-6 py-4 border-b border-gray-200'>
        <Link className='hover:underline' href={LINKS.HOME}>
          Inicio
        </Link>
        <Link className='hover:underline' href={LINKS.LOGIN}>
          Iniciar sesión
        </Link>
        <Link className='hover:underline' href={LINKS.REGISTER}>
          Registro
        </Link>
    </nav>
  )
}
