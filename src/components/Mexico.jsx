import React,{useState} from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';

import mex1 from '../assets/Mexico/loc1.jpeg';
import mex2 from '../assets/Mexico/loc2.jpeg';
import mex3 from '../assets/Mexico/loc3.jpeg';
import mex4 from '../assets/Mexico/loc4.jpeg';
import mex5 from '../assets/Mexico/loc5.jpeg';
import ico1 from '../assets/Mexico/mexico1.jpeg';
import ico2 from '../assets/Mexico/mexico2.jpeg';
import ico3 from '../assets/Mexico/mexico3.jpeg';
import ico4 from '../assets/Mexico/mexico4.jpeg';
import ico5 from '../assets/Mexico/mexico5.jpeg';
import ico6 from '../assets/Mexico/mexico6.jpeg';
import ico7 from '../assets/Mexico/mexico7.jpeg';
import ico8 from '../assets/Mexico/mexico8.jpeg';
import ico9 from '../assets/Mexico/mexico9.jpeg';
import ssx1 from '../assets/Data/1.jpeg';
import ssx2 from '../assets/Data/2.jpeg';
import ssx3 from '../assets/Data/3.jpeg';
import ssx4 from '../assets/Data/4.jpeg';
import ssx5 from '../assets/Data/5.jpeg';
import ssx6 from '../assets/Data/6.jpeg';
import ssx7 from '../assets/Data/7.jpeg';
import ssx8 from '../assets/Data/8.jpeg';
import ssx9 from '../assets/Data/9.jpeg';
import ssx10 from '../assets/Data/10.jpeg';
import ssx11 from '../assets/Data/11.jpeg';
import ssx12 from '../assets/Data/12.jpeg';
import ssx13 from '../assets/Data/13.jpeg';
import ssx14 from '../assets/Data/14.jpeg';
import ssx15 from '../assets/Data/15.jpeg';
import ssx16 from '../assets/Data/16.jpeg';
import ssx17 from '../assets/Data/17.jpeg';
import ssx18 from '../assets/Data/18.jpeg';
import ssx19 from '../assets/Data/19.jpeg';
import ssx20 from '../assets/Data/20.jpeg';
import ssx21 from '../assets/Data/21.jpeg';
import ssx22 from '../assets/Data/22.jpeg';
import ssx23 from '../assets/Data/23.jpeg';
import ssx24 from '../assets/Data/24.jpeg';

let slides = [
    {img:ssx1},
    {img:ssx2},
    {img:ssx3},
    {img:ssx4},
    {img:ssx5},
    {img:ssx6},
    {img:ssx7},
    {img:ssx8},
    {img:ssx9},
    {img:ssx10},
    {img:ssx11},
    {img:ssx12},
    {img:ssx13},
    {img:ssx14},
    {img:ssx15},
    {img:ssx16},
    {img:ssx17},
    {img:ssx18},
    {img:ssx19},
    {img:ssx20},
    {img:ssx21},
    {img:ssx22},
    {img:ssx23},
    {img:ssx24}
]
const Mexico = () => {
    let [currentIndex,setCurrentIndex] = useState(0);
    let prevSlide = () => {
        let isFirstSlide = currentIndex === 0;
        let newIndex = isFirstSlide ? slides.length -1 : currentIndex -1
        setCurrentIndex(newIndex);
    }
    let nextSlide = () => {
        let isLastSlide = currentIndex === slides.length -1;
        let newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }
    
  return (
    <div className=' max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>مشروع كوستا مايا Costa Maya Mexico</h1>
        <p className='text-[#00df9a] font-bold p-5'>الموقع</p>
        <div className=' grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img src={mex1} alt="" />
            <img src={mex2} alt="" />
            <img src={mex3} alt="" />
            <img src={mex4} alt="" />
            <img src={mex5} alt="" />
        </div>
        <div className=' p-4 text-center'>
        <h1>المعرض</h1>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className=' w-full h-full object-cover' src={ico1} alt="" />
            <img className=' w-full h-full object-cover' src={ico2} alt="" />
            <img className=' w-full h-full object-cover' src={ico3} alt="" />
            <img className=' w-full h-full object-cover' src={ico4} alt="" />
            <img className=' w-full h-full object-cover' src={ico5} alt="" />
        </div>
        <div className='grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-4'>
            <img className=' w-full h-full object-cover' src={ico6} alt="" />
            <img className=' w-full h-full object-cover' src={ico7} alt="" />
            <img className=' w-full h-full object-cover' src={ico8} alt="" />
            <img className=' w-full h-full object-cover' src={ico9} alt="" />
        </div>
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <div style={{backgroundImage:`url(${slides[currentIndex].img})`}} className=' w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            </div>
            {/*left arrow*/}
            <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] text-white cursor-pointer left-5 text-2xl rounded-full p-2'>
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            {/*right arrow*/}
            <div className=' hidden group-hover:block absolute top-[50%] pl-[85%] -translate-x-0 translate-y-[-50%] cursor-pointer right-5 text-white text-2xl rounded-full p-2'> 
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Mexico