"use client";

// import { useEffect } from 'react';
// import { useState } from 'react';
import '../../styles/home/Courses.css'
import { useDispatch, useSelector } from 'react-redux';
import CourseCart from '../../components/Common/CourseCart/CourseCart'
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../../redux/reducers/productListSlice';
import { fetchProducts } from './api';








const ProductListPage = () => {

//console.log(fetchProducts);


    //const [dataCourses, setDataCourses] = useState();

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );


  const fetchData = async () => {
    dispatch(fetchProductsStart());
    try {
      const data = await fetchProducts();

console.log('data-Ashish',data)
      //setDataCourses(data);
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };

  fetchData();


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div class="container noPaddingContainer">
      <h1>Product List</h1>
      <div class="courseRL_Flex">

      {dataCourses?.map((user) => (
            <CourseCart courses={user}></CourseCart>

          ))}
    
      </div>
    </div>
  );
};

export default ProductListPage;
