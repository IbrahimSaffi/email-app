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
          console.log(ele.id)
          return <div onClick={() => goTo(ele.id.toString())} >
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
        <input ref={name} type="text"/>
        <h3>Enter Email</h3>
        <input ref={email} type="email" />
        <p style={ {display:props.error?"block":"none",color:"red"}}>Enter valid email</p>
        <h3>Subject of Message</h3>
        <textarea ref={subject} name="" id="" cols="10" rows="10"></textarea>
        <h3>Message</h3>
        <textarea ref={body} name="" id="" cols="10" rows="10"></textarea>
        <button className='submit' onClick={()=>
        {
          if(email.current.value.includes("@")){
            {props.senddata(name.current.value,email.current.value,props.updateMessages.length+1,body.current.value,subject.current.value,new Date().toLocaleDateString())
              props.recieveMessages()
              name.current.value=""
              email.current.value=""
              body.current.value=""
              subject.current.value=""
              props.errorDisplay(false)
          }
        }
          else{
          props.errorDisplay(true) 
          }
        }} >Submit</button>
      </div>
    </div>
  )
}
