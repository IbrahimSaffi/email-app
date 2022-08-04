import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      <div className="header">
      <h1>
      Best Email Client
      </h1>
      <nav>
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
      <Outlet/>
      </div>
  )
}
