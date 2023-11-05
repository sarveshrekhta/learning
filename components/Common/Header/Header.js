"use client";
// import { useSession } from "next-auth/react"
// import { authOptions } from "../../../src/app/provider";
import { use } from 'react'
import dynamic from 'next/dynamic';
import React from 'react'
import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';
import MobileNav from "./MobileNav";
import { useState } from "react";
import { useEffect } from "react";
// import { getUserData } from '../../Common/UserInfo'


export default function Header() {

  const NavData = {}

  const [mobileNav1, setMobileNav] = useState(false)
  const [isFixed, setIsFixed] = useState(false)


  const updatePage = (flag) => {
    setMobileNav(flag)
 }



    useEffect(()=>{

    //   const handleScroll  = (()=>{
    //     console.log(window.screenY)
    //     if(window.scrollY  > 150){
    //       setIsFixed(true);
    //     }else {
    //       setIsFixed(false);
    //     }
    //   })
    //   window.addEventListener('scroll', handleScroll);

    // // Clean up the event listener when the component unmounts
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
    }, [])

  const showMobileNav = (()=>{
    setMobileNav(true)
  })

  const [mobileCloseNav, setMobileCloseNav] = useState(true)

  const closeMobileNav = (()=>{
      alert()
    setMobileCloseNav(false)
  })


  const Navbar = dynamic(() => import('./Navbar'))
  const MobileNav = dynamic(() => import('./MobileNav'))

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo">
          {/* /../public/assets/images/rekhta-learning-logo.png  */}

           <i onClick={showMobileNav} className="rl-menu2"></i> <Link href="/"><Image src="http://rekhtafoundation.urdulearning.rekhta.org/wp-content/themes/rekhtafoundation/lms-image/rekhta-learning-logo.png " alt='Rekhta Learning' width={90} height={40} /></Link>
          </div>
          <nav>

            <Navbar></Navbar>


          </nav>

          {mobileNav1 ? <MobileNav updatePage={updatePage}></MobileNav> : null}
          {/* {!mobileCloseNav ? <MobileNav></MobileNav> : null} */}
        </div>
      </div>


    </header>
  )
}
