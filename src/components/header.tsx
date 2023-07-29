'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './reusableComponents/logo'

function Header() {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
    return (
        <header className='relative'>
            <div className="container mx-auto flex items-center justify-between py-5 px-4 md:px-0">
                <Logo />
                <nav className='hidden md:block'>
                    <Navigations />
                </nav>
                <div className='hidden md:block'>
                    <Link href="" className='py-4 px-6 font-semibold text-[#191919]'>Log in</Link>
                    <Link href="" className='py-3.5 px-6 font-bold text-white bg-orange hover:opacity-70 transition-all tracking-[0.16px]'>Sign Up</Link>
                </div>
                <button onClick={()=>setShowMobileNav(true)} className="md:hidden">
                    <svg viewBox="0 0 100 80" width="24" height="24">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                </button>
            </div>
            <div className={`transition-all fixed ${showMobileNav ? 'left-0' : "-left-full"} top-0 w-full h-screen px-4 z-50 bg-white md:hidden flex flex-col items-center justify-center`}>
                <button onClick={()=>setShowMobileNav(false)} className="absolute right-4 top-4 p-2 hover:bg-orange/30 rounded-md">
                    <svg className=' rotate-45' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 3.33325C10.4603 3.33325 10.8334 3.70635 10.8334 4.16659V15.8333C10.8334 16.2935 10.4603 16.6666 10 16.6666C9.53978 16.6666 9.16669 16.2935 9.16669 15.8333V4.16659C9.16669 3.70635 9.53978 3.33325 10 3.33325Z" fill="#061428"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.33331 10.0001C3.33331 9.53984 3.70641 9.16675 4.16665 9.16675H15.8333C16.2936 9.16675 16.6666 9.53984 16.6666 10.0001C16.6666 10.4603 16.2936 10.8334 15.8333 10.8334H4.16665C3.70641 10.8334 3.33331 10.4603 3.33331 10.0001Z" fill="#061428"/>
                    </svg>
                </button>
                <Navigations />
                <button className='bg-orange/30 w-full sm:w-fit sm:bg-transparent py-3 sm:py-2 px-4 rounded-md mb-4 sm:mb-0'>Login</button>
                <button className='bg-orange w-full sm:w-fit text-white font-medium py-3 sm:py-2 px-4 rounded-md'>Sign Up</button>
            </div>
        </header>
    )
}

function Navigations(){
    return(
        <ul className='text-cc-200 flex flex-col md:flex-row items-center lg:gap-9'>
            <li className='font-bold nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='flex items-center gap-1 nav-item'>
                Events
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M16.6491 7.45831L11.2157 12.8916C10.5741 13.5333 9.52407 13.5333 8.88241 12.8916L3.44907 7.45831" stroke="#303C4D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            </li>
            <li className='nav-item'>Get a ticket</li>
            <li className='nav-item'>Contact</li>
        </ul>
    )
}

export default Header