import React from 'react';
import Vid from '../assets/Videos/VID-20230807-WA0004.mp4'

const Soly = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
        <h1 className=' text-center'>مشروع كمبوند سولي</h1>
        <div className=' relative'>
            <div className=' pt-5 inset-0 flex items-center justify-center'>
                <div className='w-[80%] h-96 '>
                    <video className='w-full h-full object-cover' src={Vid} autoPlay muted loop/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Soly