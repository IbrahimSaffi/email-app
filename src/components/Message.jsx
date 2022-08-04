import React from 'react'
import { useParams } from 'react-router-dom'
import { getMessageById } from '../messages'

export default function Message() {
    let {id} = useParams()
    let msg = getMessageById(id)
  return (
    <div>{msg.body}</div>
  )
}
