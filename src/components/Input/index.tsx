import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import { Label } from '../Label'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = ({ className, label, ...inputProps }: InputProps) => {
  const inputStyles = `${styles.input} ${className ?? ''}`

  if (label) {
    return (
      <div>
        <Label>{label}</Label>
        <input className={inputStyles} {...inputProps} />
      </div>
    )
  }

  return <input className={inputStyles} {...inputProps} />
}
