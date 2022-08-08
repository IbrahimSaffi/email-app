import React from 'react'
import { useParams } from 'react-router-dom'
import { getMessageById } from '../messages'

export default function Message(props) {
    let {id} = useParams()
    let msg = props.msgs[id-1]
    console.log(msg,id)
  return (
    <div className='msg-detail'>
     <h2>{msg.subject}</h2>
    <h3>{msg.name}  &lt; {msg.email} &gt;</h3>
    <p>{msg.body}</p>
    </div>
  )
}
