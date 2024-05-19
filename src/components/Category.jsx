import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Category() {
  

  const [categories, setCategories] = useState([]);//empty array
  //fetching data start
  const fetchCategory = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setCategories(data); 
  }

  useEffect(
    () => {
      fetchCategory()
    }, []
  )

  //sliding start
  const [slide, setSlide] = useState(0); 

  const nextSlide = () => {
    //console.log(categories.length) 20item
    //show 8 products in a time
    if (categories.length - 8 === slide) return false;
    setSlide(slide+3);
  }
  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide-3);
  }


  return (
    <div className="max-w-[1200px] mx-auto px-2 my-5">
        <div className='flex my-3 items-center justify-between'>
            <div className='text-[25px] font-bold'>What's on your mind?</div>
            <div className='flex'>
                <div onClick={prevSlide} className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                  <FaArrowLeft/>
                </div>
                <div onClick={nextSlide} className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                  <FaArrowRight />
                </div>
            </div>
        </div>
        <div className='flex items-center overflow-hidden'> 
          {
            categories.map(
              (cat, index) => {
                return (
                  <div key={index} className='w-[150px] px-2 shrink-0 duration-500' style={{
                    transform: `translateX(-${slide * 100}%)`//shift 6images 6*100% of every image

                  }}>
                    <img src={cat.image} alt={cat.title}/>
                  </div>
                )
              }
            )
          }
        </div>

        <hr className='my-6 border '/>
        

    </div>
  )
}
