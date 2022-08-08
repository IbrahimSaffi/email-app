import React from 'react'

export default function Login(props) {
  return (
    <div className='login' ><button onClick={()=>props.handleClick()}>Login</button></div>
  )
}
