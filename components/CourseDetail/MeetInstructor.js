'use client'
import React from 'react'
import Instructor from './Instructor'
import TeamInstructor from './TeamInstructor';
import ContentDevelopment from '../ContentDevelopment';

export default function MeetInstructor({ instructorData }) {
  const getInstructorData = instructorData;
  const a = getInstructorData.instructorList.length


  return (
    <>

      {a == 1 ? <Instructor instructorData={instructorData}></Instructor> : a > 1 ? <TeamInstructor instructorData={instructorData}></TeamInstructor> : <ContentDevelopment instructorData={instructorData}></ContentDevelopment>}

    </>
  )
}
