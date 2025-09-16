import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import UserDetails from './UserDetails'



export default function UserPanel({ currentUser, setCurrentUser}) {
  const [ showSignup, setShowSignup] = useState(false)


  if(!currentUser) {
    if(showSignup) {
      return (
        <Signup setCurrentUser={setCurrentUser} setShowSignup={setShowSignup} />
      )
  } else {
    return (
      <div className='login-container'>
        <Login setCurrentUser={setCurrentUser} />
        <p>
          Don't have an account?{''}
          <button onClick={() => setShowSignup(true)} className='signup-link' >
          Click here to Signup
          </button>
        </p>
      </div>
    )
  }
  } else {
    return <UserDetails currentUser={currentUser} setCurrentUser={(user)=> {
      setCurrentUser(user)
      if (!user) {
        setShowSignup(false)
      }
    }} />
  }
}