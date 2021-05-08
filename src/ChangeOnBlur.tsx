import React, {
  ChangeEventHandler,
  Dispatch,
  FC,
  KeyboardEventHandler,
  useState
} from 'react'

interface Props {
  value: string
  onChange: Dispatch<string>
  className?: string
  maxLength?: number
}

/**
 * Like an <input /> element, but changes on blur
 */
const ChangeOnBlur: FC<Props> = props => {
  const { value, onChange, className, maxLength } = props

  const [changingValue, setChangingValue] = useState<string>()
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setChangingValue(value)
  }

  const handleBlur = (): void => {
    onChange(changingValue as string)
    setChangingValue(undefined)
  }

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') handleBlur()
  }

  return (
    <input
      className={className}
      maxLength={maxLength}
      value={changingValue ?? value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      onBlur={handleBlur}
    />
  )
}

export default ChangeOnBlur
