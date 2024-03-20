import { Input, Button } from '..'

export const PostulantForm = () => {
  return (
    <form className='w-[90vw] sm:w-full max-w-[600px] border border-gray-200 px-6 py-8 rounded-md flex flex-col gap-6'>
      <div className='flex gap-6'>
        <Input label='Nombre/s' type='text' placeholder='Juan' required />

        <Input label='Apellido/s' type='text' placeholder='Perez' required />
      </div>

      <div>
        <Input
          label='Nombre de usuario'
          type='text'
          placeholder='Juanpe123'
          required
        />
        <p className='mt-2 text-xs font-normal text-gray-500 dark:text-gray-300'>
          Solo letras en minúsculas, mayúsculas y números, mínimo 8, máximo 24
          caracteres.
        </p>
      </div>

      <div className='flex gap-6'>
        <Input
          label='Email'
          type='email'
          placeholder='Juan@gmail.com'
          required
        />

        <Input
          label='Confirmar Email'
          type='email'
          placeholder='Juan@gmail.com'
          required
        />
      </div>

      <div className='flex gap-6'>
        <Input
          label='Contraseña'
          type='password'
          placeholder='********'
          required
        />

        <Input
          label='Confirmar Contraseña'
          type='password'
          placeholder='********'
          required
        />
      </div>

      <Button>Registrarse</Button>
    </form>
  )
}
