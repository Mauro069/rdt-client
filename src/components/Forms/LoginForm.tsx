import { Input } from '..'
import { Button } from '../Button'
import { CheckBox } from '../Checkbox'

export const LoginForm = () => {
  return (
    <form className='w-[90vw] sm:w-full max-w-[400px] border border-gray-200 px-6 py-8 rounded-md flex flex-col gap-4'>
      <Input
        label='Nombre de usuario'
        type='text'
        placeholder='juan'
        required
      />

      <Input
        label='Contraseña'
        type='password'
        placeholder='*********'
        required
      />

      <Button>Iniciar Sesión</Button>
      <CheckBox value={false} name='persist' label='Recuerdame' />
    </form>
  )
}
