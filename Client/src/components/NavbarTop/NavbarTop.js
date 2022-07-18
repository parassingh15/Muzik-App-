import React from 'react'
import './NavbarTop.css'

export default function NavbarTop() {
  return (
    <div className='NavbarTop'>
        <div className='NavIcon Homebtn'>
        <h4><i className='navTop-icon fa-solid fa-house-chimney'></i> Home</h4>
        </div>
        <div className=' NavIcon NavbarSearch'>
        <h4><i className='navTop-icon fa-solid fa-magnifying-glass'></i> Search</h4>
        </div>
        <div className=' NavIcon NavbarLibrary'>
        <h4><i className='navTop-icon fa-solid fa-swatchbook'></i> Library</h4>
        </div>
    </div>
  )
}
