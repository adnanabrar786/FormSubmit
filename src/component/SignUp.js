//       submit Data by useRef

import React , {useRef} from 'react'

const SignUp = () => {

  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    let name = inputName.current.value
    let email = inputEmail.current.value
    let password = inputPassword.current.value

     const SignUpData = {name , email , password}
     console.log(SignUpData);

  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      
      <input type="text" name='name' ref={inputName}/>
      <input type="text" name='email' ref={inputEmail}/>
      <input type="text" name='passsword' ref={inputPassword}/>
      <button type='submit'>SignUp</button>

    </form>
    </>
  )
}

export default SignUp


