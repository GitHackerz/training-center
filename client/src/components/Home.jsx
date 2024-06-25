import React, { useContext, useEffect } from 'react'
import { Header } from './header'
import { About } from './about'
import { Services } from './services'
import { Testimonials } from './testimonials'
import { Team } from './Team'
import { Contact } from './contact'
import { Navigation } from './navigation'
import { AuthContext } from '../context/AuthContext'
export default function Home() {
  const { Role,setRole } = useContext(AuthContext);



  return (
    <div>
    <Navigation />
    <Header  />
    <About  />
    <Services  />
    <Testimonials  />
    <Team  />
  </div>
  )
}
