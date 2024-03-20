import { LINKS } from '@/config/links'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between gap-6 py-4 px-12 border-b border-gray-200'>
      <Link href='/'>
        <h3>Red de trabajo</h3>
      </Link>

      <div className='flex gap-4'>
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
