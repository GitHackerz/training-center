import React from 'react'
import {Header} from './header'
import {About} from './about'
import {Register} from './auth/register'
import {Login} from './auth/login'
import {Navigation} from './navigation'

export default function Home() {

    return (
        <div>
            <Navigation/>
            <Header/>
            <About/>
            {/*<Services/>*/}
            <Register/>
            <Login/>
        </div>
    )
}
