import React, { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import { authOptions } from '@/app/provider';
import Link from 'next/link';
import Image from 'next/image';


export default function MobileNav({ updatePage }) {
    const [userInfoData, setUserInfoData] = useState(null || {})

    const flag = false;
    const handleClick = () => {
        updatePage(flag)
    }

    const session = useSession(authOptions);

    const user = session?.data;
    const userId = user?.user?.id;
    const sessionStatus = session.status;


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



    console.log(sessionStatus, 'sessionStatussessionStatus')

    return (

        <div class="mobileNav">
            <div class="container">
            <div class="logoMobile">
                    <a href="#"><img src="assets/images/logo.svg" alt="logo" /></a>
                    <i class="rl-close" onClick={handleClick}></i>
                </div>


                




                {sessionStatus == 'authenticated' ? <div class="usreProfle">
                    <div class="userName">
                        <span> {userInfoData && userInfoData?.userName?.charAt(0)} </span>
                        <div>
                            <p>{userInfoData && userInfoData.userName}</p>
                            <cite>{userInfoData && userInfoData.userEmail}</cite>
                        </div>
                    </div>
                    {/* <div class="backBtn">
                <i class="rl-play"></i>
            </div> */}
                    <div class="goCourses">
                        <Link href="/my-courses/learning">Go to Courses</Link>
                    </div>
                </div> : <div class="wanttoExplore">
                    <h3>Want to explore the world of Urdu literature? Join us today!</h3>
                    <div class="groupBtn">
                        <Link class="borderBtn" href="javascript:void(0)" onClick={() => signIn("identity-server4", { callbackUrl })}> Login </Link>
                        <Link href="javascript:void(0)" class="primaryBtn">Create Account</Link></div>
                </div>}


                {/* <div class="navProfileCourse">
            <div class="navCourseBox"> <span>04</span>
                <p>Courses enrolled</p>
            </div>
            <div class="navCourseBox"> <span>04</span>
                <p>Courses enrolled</p>
            </div>
            <div class="navCourseBox"> <span>04</span>
                <p>Courses enrolled</p>
            </div>
        </div> */}




                <div class="navMenuLinks">
                    <div class="quickLinks">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home </a></li>
                            <li><a href="#">Courses </a></li>
                            <li><a href="#">Contact Us </a></li>
                        </ul>

                    </div>
                    <div class="quickLinks">
                        <h3>Our Websites</h3>
                        <ul><li><a href="#">Rekhta </a></li><li><a href="#">Hindwi </a></li>   <li><a href="#">Sufinama </a></li><li><a href="#">Rekhta Dictionary </a></li><li><a href="#">Hindwi Dictionary</a></li><li><a href="#">Rekhta Books </a></li></ul>
                    </div>
                </div>
                <div class="mobileNavSocial">
                <ul className="footer_social">
                        <li><a href="#" target='_blank'> <Image src="/assets/images/instagram.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>
                            <li><a href="#" target='_blank'> <Image src="/assets/images/facebook.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>
                       <li><a href="#" target='_blank'> <Image src="/assets/images/linkedIn.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>
                    <li><a href="#" target='_blank'> <Image src="/assets/images/twitter.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>                

                    </ul>

                    <div class="logoutBtn">
                        <Link href="javascript:void(0)" onClick={() => signOut()}>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
