import React from 'react';
import tow1 from '../assets/Easter Tower/tower 1.jpeg'
import tow2 from '../assets/Easter Tower/tower 2.jpeg'
import tow3 from '../assets/Easter Tower/tower 3.jpeg'
import tow4 from '../assets/Easter Tower/tower 4.jpeg'
import tow5 from '../assets/Easter Tower/tower 5.jpeg'

const EasternTower = () => {
  return (
    <div id='East' className='max-w-[1240px] mx-auto py-16 px-4'>
        <h1 className=' text-center'>برج ايست تاور العاصمة الادارية الجديدة</h1>
        <h1 className=' text-center'>East Tower New Administration Capital</h1>
        <div className=' grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className=' w-full h-full object-cover col-span-2 md:col-span-3' src={tow4} alt="/" />
                <img className=' w-full h-full object-cover' src={tow1} alt="/" />
                <img className=' w-full h-full object-cover' src={tow2} alt="/" />
                <img className=' w-full h-full object-cover' src={tow3} alt="/" />
                <img className=' w-full h-full object-cover' src={tow5} alt="/" />
        </div>
    </div>
  )
}

export default EasternTower