import React from 'react'
import {use} from "react";
import { getRequest } from './api';


const getPageContent = async (url) => {
    const  ResultData  = await getRequest('api/v1/Course/GetAllCourses');
    return ResultData;
};

const promiseData = getPageContent();

export default function AllCourses() {
  return (
    <div>AllCourses</div>
  )
}
