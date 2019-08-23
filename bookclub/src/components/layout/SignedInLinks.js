import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        //initials can go to profile page later. -number of books, fave book, etc
        <ul className="right">
            <li><NavLink to='/create'>New BookPost</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating grey'>GW</NavLink></li>
        </ul>
    )
}

export default SignedInLinks