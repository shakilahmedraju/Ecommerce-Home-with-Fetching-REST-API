import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from './Card';

export default function TopProducts() {
    const [data, setData] = useState([])

    const fetchTopProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const apidata = await response.json();
        setData(apidata);
    }

    useEffect(
        () => {
            fetchTopProducts()
        }, []
    )
  return (
    <div className="max-w-[1200px] mx-auto px-2">
        <div className='flex my-3 items-center justify-between'>
            <div className='text-[25px] font-bold'>Top Selling Products</div>
            <div className='flex'>
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                  <FaArrowLeft/>
                </div>
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                  <FaArrowRight />
                </div>
            </div>
        </div>
        <div className='flex gap-5 overflow-hidden'>
          {
            data.map(
              (d, i) => {
                return <Card width='w-full md:w-[273px]' {...d} key={i}/>
              }
            )
          }

        </div>
        <hr className='my-6 border '/>
    </div>
    
  )
}
