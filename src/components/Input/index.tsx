import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import { Label } from '../Label'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = ({
  required,
  className,
  label,
  ...inputProps
}: InputProps) => {
  const inputStyles = `${styles.input} ${className ?? ''}`

  if (label) {
    return (
      <div className='w-full'>
        <Label>
          {label} {required && <b className='text-red-400'>*</b>}
        </Label>
        <input className={inputStyles} {...inputProps} />
      </div>
    )
  }

  return <input className={inputStyles} {...inputProps} />
}
