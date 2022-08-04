import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from './Home'
import About from './About'
import Inbox from './Inbox'
import Login from './Login'
import Message from './Message'
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { messages } from '../messages'
import database from '../firebase'
export default function Main() {
  let [login, setLogin] = useState(false)
  let goTo = useNavigate()
  let [updateMessages, setMessages] = useState([])
  useEffect(() => {
    if (!login) {
      goTo("login")
      messages.forEach(msg => {
        senddata(msg.from.name, msg.from.email, msg.id, msg.body, msg.subject, msg.date)
      })
      recieveMessages()
    }
  }, [])
  async function recieveMessages() {
    const querySnapshot = await getDocs(collection(database, "messages"));
    let temp =[]
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    setMessages(temp)

  }
  async function senddata(name, email, id, body, subject, date) {
    try {
      await setDoc(doc(database, "messages",id.toString()), {
        name: name,
        email: email,
        id: id,
        body: body,
        subject: subject,
        date: date,
      });
      console.log("Document written with ID: ",id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  
  }
  function handleClick() {
    setLogin(true)
    goTo("/")
  }
  return (
    <Routes>
      <Route path='login' element={<Login handleClick={handleClick} />} />

      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='inbox' element={<Inbox senddata={senddata} recieveMessages={recieveMessages} updateMessages={updateMessages}/>} />
        <Route path={'inbox/:id'} element={<Message />} />
      </Route>
    </Routes>

  )
}
