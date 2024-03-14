import { Input } from '..'
import { Label } from '../Label'

export const LoginForm = () => {
  return (
    <form className='max-w-sm mx-auto'>
      <div className='mb-5'>
        <Label>Your email</Label>
        <Input
          type='email'
          id='email'
          placeholder='name@flowbite.com'
          required
        />
      </div>
      <div className='mb-5'>
        <Label>Your password</Label>
        <Input type='password' id='password' placeholder='*********' required />
      </div>

      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Iniciar Sesión
      </button>
    </form>
  )
}
