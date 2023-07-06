import React from 'react'

function Header({titulo}) {
  return (
    <nav className='nav-wrapper light-blue darkn-3'>
        <a href='#!' className='brand-logo center'>{titulo}</a>
    </nav>
  )
}

export default Header