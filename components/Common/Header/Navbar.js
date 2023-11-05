"use client";
import React, {useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { signIn, signOut, useSession, getServerSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

import { authOptions } from "../../../src/app/provider";
import { useState } from 'react';


import { useEffect } from 'react';




export default function Navbar(props) {

 const [userInfoData, setUserInfoData] = useState(null || {})

  const [showUserToggle, setShowUserToggle] = useState(false);
  const [userData, setUserData] = useState({});
  const session = useSession(authOptions);

  var user = session?.data;
  var userId = user?.user?.id;
  var sessionStatus = session.status;
  console.log(userId, 'userSession')
// //  setUserID(userId);
// console.log(userId, 'userIduserId566')

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";


var userDataItem = {}





useEffect(()=>{
  if(Object.keys(session).length != 0) {
  let unmounted = false;
  fetch(`https://service-api-dev.rekhta.org/api/v1/Users/GetUserDetails?userId=${userId}`)
    .then(res => res.json())
    .then(data => !unmounted && setUserInfoData(data))
    .catch(console.error);
  return () => (unmounted = true);
}
}, [userId])






  function showUserPopup() {

    setShowUserToggle(!showUserToggle);

  }


  // document.addEventListener("click", function(e) {
  //   if(e.target.closest('.userDetails') == null && e.target.classList[0] != 'signInName') {
  //       if(document.querySelector('.userDetails') != null) {
  //        showUserPopup();
  //       }
  //   }
  // });

  return (
    <>

      <div className="mainNav">
        <ul>
          <li> <Link href="/" prefetch={false}> Home </Link></li>
          <li> <Link href="/courses" prefetch={false}>Courses </Link></li>
          {session.status == 'authenticated' ?
          <li> <Link href="/my-courses/learning" prefetch={false}> My Courses </Link></li> : ''}
          <li> <Link href="/contact-us" prefetch={false}> Contact Us </Link></li>
        </ul>
      </div>

      {session.status == 'authenticated' ? <>

      <div className='signInName' onClick={showUserPopup}> {userInfoData && userInfoData?.userName?.charAt(0)} </div>

      {showUserToggle && ( <div class="userDetails clearfix" style={{ display: 'block' }}><i class="rico-close"></i>
        <div class="userNamePhoto clearfix">
          <h5>{userInfoData && userInfoData.userName}<span>{userInfoData && userInfoData.userEmail}</span></h5>
          <div className='name'> {userInfoData && userInfoData?.userName?.charAt(0)} </div> </div>
        <div class="userWorldLink">  <a href="/my-courses/learning" prefetch={false}>My Courses</a>
          {/* <a href="#">My Profile</a> */}
          <a href="javascript:void(0)" onClick={() => signOut()} id='LogoutBtn'>Logout</a></div>
      </div>)}
      </> : <div className="mobileLoin">
        <ul>
          <li><a href="javascript:void(0)" onClick={() => signIn("identity-server4", { callbackUrl })} id='loginBtn'>Login</a></li>
        </ul>

      </div>}


      {/* <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn("identity-server4",{ callbackUrl: "/" })}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </> */}

    </>
  )


}
