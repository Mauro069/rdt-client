import { Input } from '..'
import { CheckBox } from '../Checkbox'

export const LoginForm = () => {
  return (
    <form className='border border-gray-200 px-6 py-8 rounded-md max-w-sm mx-auto flex flex-col gap-4 min-w-[400px]'>
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

      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Iniciar Sesión
      </button>

      <CheckBox value={false} name='persist' label='Recuerdame' />
    </form>
  )
}
