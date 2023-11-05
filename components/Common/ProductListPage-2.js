"use client";

import {use} from "react";
import '../../styles/home/Courses.css'
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../../redux/reducers/productListSlice';
import { useDispatch, useSelector } from 'react-redux';
import CourseCart from '../../components/Common/CourseCart/CourseCart'
import { getRequest } from './api';



const getPageContent = async (url) => {
  const  ResultData  = await getRequest('api/v1/Course/GetAllCourses');
  return ResultData;
};


const promiseData = getPageContent();

const  ProductListPage =() => {


  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );
  const data = use(promiseData);

 
  const result = data;
 
  dispatch(fetchProductsSuccess(data));

console.log(result)

  return ( 
    <div className="container noPaddingContainer">
      {/* <h1>All Courses</h1> */}
      <div className="courseRL_Flex">

      {result?.slice(0,3).map((user) => (
       
            <CourseCart courses={user}></CourseCart>
 
          ))}           
          
      </div> 
    </div> 
  );
};

export default ProductListPage;
