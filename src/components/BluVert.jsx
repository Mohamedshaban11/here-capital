import React from 'react';
import loca1 from '../assets/Data/bluvert/IMG20230906152529.jpg';
import loca2 from '../assets/Data/bluvert/IMG20230906152815.jpg';
import loca3 from '../assets/Data/bluvert/IMG20230906152626.jpg';
import vue from '../assets/Data/bluvert/view1.jpg';
import vue1 from '../assets/Data/bluvert/view2.jpg';
import vue2 from '../assets/Data/bluvert/view3.jpg';
import vue3 from '../assets/Data/bluvert/view4.jpg';

const BluVert = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
       <h1 className=' text-center'>بلوفيرت كمبوند</h1>
       <h1 className=' text-center'>BLEUVERT</h1>
       <p className='text-[#00df9a] font-bold p-5 text-center'>صور للواجهات</p>
       <div className=' grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-4'>
        <img src={vue} className='w-full h-full object-cover  ' alt="/" />
        <img src={vue1} className='w-full h-full object-cover' alt="/" />
        <img src={vue2} className='w-full h-full object-cover' alt="/" />
        <img src={vue3} className='w-full h-full object-cover' alt="/" />
       </div>
       <div className=' w-full h-full'>
        <h1 className='text-center'>تقسيم الوحدات السكنية</h1>
        <div className='grid grid-rows-none md:grid-cols-3 py-4 gap-2 md:gap-4'>
            <img src={loca1} className='w-full h-full object-cover' alt="/" />
            <img src={loca2} className='w-full h-full object-cover' alt="/" />
            <img src={loca3} className='w-full h-full object-cover' alt="/" />
        </div>
       </div>
    </div>
  )
}

export default BluVert