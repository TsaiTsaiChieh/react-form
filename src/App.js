import {useRef, useState} from 'react'
import './App.css'
import FormInput from './components/FormInput'

const App = () => {
  // const [username, setUsername] = useState('')
  const usernameRef = useRef()
  console.log('re-rendered')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(data.get('username'))
    console.log(Object.fromEntries(data.entries()))
  }
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <FormInput placeholder='Username' name='username' />
        <FormInput placeholder='Email' name='email' />
        <FormInput placeholder='Full Name' name='fullname' />
        <FormInput placeholder='Sth Else' name='sth' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
