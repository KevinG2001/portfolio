import React from 'react'

function navbar() {
  return (
    <nav>
        <div className='NavContainer'>
            <h1 className='NavLogo'>Logo</h1>
            <div>
                <ul>
                    <div className='NavHeaders'>
                        Home
                    </div>
                    <div className='NavHeaders'>
                        About Me
                    </div>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default navbar
