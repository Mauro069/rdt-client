import { Button } from '@/components/Button'
import Link from 'next/link'

export default function RegisterPage () {
  return (
    <main className='flex flex-1 items-center justify-center'>
      <div className='flex flex-wrap justify-center gap-8'>
        <div className='flex flex-col h-fit gap-4 text-center justify-center border border-gray-300 p-6 rounded-md'>
          <span className='text-[20px]'>Estoy buscando trabajo</span>
          <Link href='/auth/register/postulant'>
            <Button>Registrarse como Postulante</Button>
          </Link>
        </div>

        <div className='flex flex-col h-fit gap-4 text-center justify-center border border-gray-300 p-6 rounded-md'>
          <span className='text-[20px]'>Estoy buscando personal</span>
          <Link href='/auth/register/company'>
            <Button>Registrarse como Empresa</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
