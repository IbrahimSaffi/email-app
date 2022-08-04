import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Inbox(props) {
  let goTo = useNavigate()
  let name = useRef(null)
  let email = useRef(null)
  let body = useRef(null)
  let subject = useRef(null)
  
  return (
    <div>
      <div className='messages'>
        {props.updateMessages.map(ele => {
          return <div onClick={() => goTo(ele.id)} >
            <div className='message'>
              <p className='name'>
                {ele.name}
              </p>
              <p className='subject' > {ele.subject}</p>
              <p className='body'>{ele.body}</p>
              <p className='date' >{new Date(ele.date).toLocaleDateString()}</p>
            </div>
            <hr className='line' />
          </div>
        })}
      </div>
      <div className='new-message' >
        <h3>Enter Name</h3>
        <input ref={name} type="text" />
        <h3>Enter Email</h3>
        <input ref={email} type="email" />
        <h3>Enter Message</h3>
        <textarea ref={subject} name="" id="" cols="10" rows="10"></textarea>
        <textarea ref={body} name="" id="" cols="10" rows="10"></textarea>
        <button onClick={()=>{props.senddata(name.current.value,email.current.value,props.updateMessages.length+1,body.current.value,subject.current.value,new Date())
        props.recieveMessages()
        }} >Submit</button>
      </div>
    </div>
  )
}
