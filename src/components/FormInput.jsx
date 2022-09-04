import {useState} from 'react'
import './formInput.css'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const {label, errorMessage, onChange, ...inputProps} = props
  const handleBlur = (_) => {
    setFocused(true)
  }
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...inputProps}
      onChange={onChange}
      onBlur={handleBlur}
      // due to confirm password field should validate when typing
      onFocus={() =>
        inputProps.name === 'confirmPassword' && setFocused(true)
      }
      focused={focused.toString()} />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
