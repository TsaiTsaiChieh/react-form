import {useState} from 'react'
import './App.css'
import FormInput from './components/FormInput'

const App = () => {
  const [username, setUsername] = useState('')
  console.log(username)
  console.log('re-rendered')

  return (
    <div className='app'><form>
      <FormInput placeholder='Username' setUsername={setUsername}/>
      <FormInput placeholder='Email'/>
      <FormInput placeholder='Full Name'/>
      <FormInput placeholder='Sth Else'/>
    </form>
    </div>
  )
}

export default App
