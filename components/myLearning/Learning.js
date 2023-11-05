'use client'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { signIn, signOut, useSession, getServerSession } from "next-auth/react";
import { useSearchParams, useRouter, searchParams } from "next/navigation";
import { authOptions } from '@/app/provider';
import ProgressBar from "@ramonak/react-progress-bar";
import '../../styles/courses/activeCourse.css'
import Image from 'next/image';


export default function Learning({ getMycoursesData }) {



    const getMycourses = getMycoursesData;
    const session = useSession(authOptions);

    const user = session?.data;

    const userId = user?.user?.id;

    const router = useRouter();
    const handleRefresh = () => {
        router.reload;
    };
    handleRefresh();

    //   const sessionStatus = session.status;

    console.log(userId, 'getMycoursesgetMycoursesgetMycourses')

    return (
        <>

            {getMycoursesData.length == 0 ? <section class="login sectionSpace">
                <div class="container">
                    <div class="centerElement">
                        <Image src="/assets/images/addCourses.png" alt="activeCourse" width={266} height={266} />
                        <h3>You haven't enrolled in any course yet</h3>
                        <p>Now is the best time to kickstart your learning journey. Select courses that align with your interest to begin.</p>
                        <div class="groupBtn">
                            <Link href="/courses" class="primaryBtn" prefetch={false}>Explore Courses</Link>
                        </div>
                    </div>
                </div>
            </section> : <section className="myCourses">
                {/* <button onClick={handleRefresh}>Refresh</button> */}
                <div className="container">
                    <h3 className="secondary-h1"> My Courses </h3>
                    <div className="myCoursesCards">



                        {getMycourses?.map((myCourses) => (
                            <div className="crashCourseCard">
                                {/* {myCourses.isFeatureCourse == "1" ? <span className="crash_course">Crash course</span> : null} */}

                                <h5>
                                    {myCourses.courseLaunchName}
                                </h5>
                                <p>Expires on {myCourses.lastAccessDate}</p>
                                <div className="progressFlex">
                                    <div className="progress">
                                        {/* <progress id="file"  max="100"></progress> */}

                                        <ProgressBar isLabelVisible={false} value={0} completed={myCourses.progress} dir={"ltr"} borderRadius={2} height={"8px"} baseBgColor={'#fff'} transitionDuration={"0s"} bgColor={"#C44B8F"} transitionTimingFunction={"linear"} />

                                    </div>
                                    <div className="completeRate">
                                        <p>{myCourses.progress}%</p>
                                    </div>
                                </div>
                                {(myCourses.programType == "AM" & myCourses.progress === 0) ? <div class="groupBtn"><Link class="primaryBtn" href={`https://rrebs-hindi-dev.rekhta.org/Rasm-ul-Khat?Userid=${userId}&ServiceType=joinnow&CourseId=${myCourses.courseLaunchGuid}`}>Start Learning</Link></div> : myCourses.programType == "AL1" ? <Link class="primaryBtn" href={`https://aamozish-dev.rekhta.org/course-1?Userid=${userId}&ServiceType=enroll&CourseId=${myCourses.courseLaunchGuid}`}>Start Learning</Link> : myCourses.programType == "AL2" ? <Link class="primaryBtn" href={`https://aamozish-dev.rekhta.org/course-2?Userid=${userId}&ServiceType=enroll&CourseId=${myCourses.courseLaunchGuid}`}>Start Learning</Link> :

                                    myCourses.progress === 0 && myCourses.programType == "V" ?
                                        <Link href={
                                            {
                                                pathname: `/courses/${myCourses.slug}/${myCourses.courseLaunchGuid}`

                                            }

                                        } className="primaryBtn" id='StartLearning' prefetch={false}>Start Learning</Link> : myCourses.progress === 100 ? <div><Link href={
                                            {
                                                pathname: `/courses/${myCourses.slug}/${myCourses.courseLaunchGuid}`

                                            }

                                        } className="primaryBtn" id='StartOver' prefetch={false}>Start Over</Link> <a href='#' id='DownloadCertificate'>Download Certificate</a></div> : <Link href={
                                            {
                                                pathname: `/courses/${myCourses.slug}/${myCourses.courseLaunchGuid}`

                                            }

                                        } className="primaryBtn" id='ResumeLearning' prefetch={false}>Resume Learning</Link>



                                }

                                {/*
                                {myCourses.progress === 0 &&  myCourses.programType == "V"?





                                <Link href={
                                    {
                                        pathname: `/courses/${myCourses.slug}/${myCourses.courseLaunchGuid}`

                                    }

                                } className="primaryBtn" id='StartLearning' prefetch={false}>Start Learning</Link> : myCourses.progress === 100 ? <div><Link href={
                                    {
                                        pathname: `/courses/${myCourses.slug}/${myCourses.courseLaunchGuid}`

                                    }

                                } className="primaryBtn" id='StartOver' prefetch={false}>Start Over</Link> <a href='#' id='DownloadCertificate'>Download Certificate</a></div> : <Link href={
                                    {
                                        pathname: `/courses/${myCourses.slug}/${myCourses.courseLaunchGuid}`

                                    }

                                } className="primaryBtn" id='ResumeLearning' prefetch={false}>Resume Learning</Link>
                                } */}







                            </div>


                        ))}

                    </div>

                </div>
            </section>}




        </>
    )
}
