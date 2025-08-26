import React from 'react'
import { formatDate } from '../../helpers/FormatDate'
import './header.scss'
const Header = () => {
  return (
    <header className='header container'>
        <h1 className='header__title'>Good Morning</h1>
        <p className='header__date'>{formatDate(new Date())}</p>
    </header>
  )
}

export default Header