import './formInput.css'

const FormInput = (props) => {
  return (
    <div className='formInput'>
      {/* <label>Username</label> */}
      <input placeholder={props.placeholder}
        name={props.name} />
    </div>
  )
}

export default FormInput
