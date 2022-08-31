import './formInput.css'

const FormInput = (props) => {
  const {label, onChange, ...otherProps} = props
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...otherProps} onChange={onChange}/>
    </div>
  )
}

export default FormInput
