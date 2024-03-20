'use client'
import { ButtonHTMLAttributes, useState } from 'react'
import styles from './styles.module.scss'

type ButtonType = 'primary' | 'secondary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  button_type?: ButtonType
}

export const Button = ({
  button_type = 'primary',
  className,
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={`${styles[button_type]} ${className ?? ''}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
