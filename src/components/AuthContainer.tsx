import React from 'react'
import Login  from './Login';
import Register from './Register';


interface AuthContainerProps {
  type: string;
}

function AuthContainer({type}: AuthContainerProps) {

  return (
    <div className={"w-full flex h-screen justify-center items-center"}>
      <div className='w-fit h-fit rounded-md p-4 text-center' style={{backgroundColor: 'rgb( 34, 30, 29 )'}}>
        {type === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  )
}

export default AuthContainer