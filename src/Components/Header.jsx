import React, { useEffect, useState } from 'react'
import full_logo from "../assets/Header/final_full_logo.png"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAVIGATION } from '../constants/navigation'
import { Icon } from '@iconify/react'
import QuickInfo from './Offcanvas/QuickInfo'
const Header = () => {
    const location = useLocation();
    const currentpath = location.pathname;
    const [scrollPos , setScrollPos] = useState('');

    const handleScroll = () => {
      if(window.pageYOffset>20){
         setScrollPos('shadow-dark-sm')
      }
      else{
        setScrollPos('');
      }
    }

    useEffect(()=>{
       document.addEventListener("scroll",handleScroll);
      return () => {document.removeEventListener('scroll',handleScroll)};
    },[])
  return (
    <>
    <div className={`bg-secondary fixed top-0 w-full left-0 z-[20] ${scrollPos}`}>
    <div className="container">
      <div className="flex justify-between ">
       <Link to='/'><img src={full_logo} alt="full-logo" /></Link>
        <nav className='self-center lg:block hidden'>
            <ul className='list-none flex gap-8'>
                {NAVIGATION.map((navitem)=>{
                    return <li key={navitem.key} className={`uppercase text-sm tracking-wider hover:text-primary font-semibold ${currentpath===navitem.href?'text-primary':'text-white'}`}><NavLink to={navitem.href}>{navitem.label}</NavLink></li>
                })}
            </ul>
        </nav>
        <div className="bg-primary flex justify-center items-center px-4 cursor-pointer" data-hs-overlay="#hs-overlay-right">
            <Icon icon='gg:menu-right' className='text-4xl text-dark' />
        </div>
      </div>
    </div>
    </div>
    <QuickInfo/>
    </>
  )
}

export default Header
