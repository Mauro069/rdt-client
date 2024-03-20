// import styles from './styles.module.scss'

interface CheckBoxProps {
  name: string
  value: any
  label: string
}

export const CheckBox = ({ name, value, label }: CheckBoxProps) => {
  return (
    <div className='flex items-center mb-4'>
      <input
        type='checkbox'
        value={value}
        name={name}
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  '
      />
      <label className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
        {label}
      </label>
    </div>
  )
}
