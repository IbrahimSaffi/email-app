import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      <div className="header">
      <h1>
      Welcome to best Email Client!
      </h1>
      <nav className='links' >
     <Link to={""}>
      Home
     </Link>
     <Link to={"about"}>
      About
     </Link>
     <Link to={"inbox"}>
      Inbox
     </Link>
      </nav>
      </div>
      <hr className='line' />
      <Outlet/>
      </div>
  )
}
