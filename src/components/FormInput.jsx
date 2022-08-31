import './formInput.css'

const FormInput = (props) => {
  return (
    <div className='formInput'>
      {/* <label>Username</label> */}
      <input placeholder={props.placeholder}
        ref={props.refer} />
    </div>
  )
}

export default FormInput
