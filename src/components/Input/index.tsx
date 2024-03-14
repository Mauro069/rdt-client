import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...inputProps }: InputProps) => {
  const inputStyles = `${styles.input} ${className ?? ''}`

  return <input className={inputStyles} {...inputProps} />
}
