import { LabelHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ className, ...labelProps }: LabelProps) => {
  const labelStyles = `${styles.label} ${className ?? ''}`

  return <label className={labelStyles} {...labelProps} />
}
