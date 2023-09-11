import React from 'react';
import Off1 from '../assets/offer-1.jpeg'
import Off2 from '../assets/offer-2.jpeg'
import Off3 from '../assets/offer-3.jpeg'
import Off4 from '../assets/offer-4.jpeg'
import Off5 from '../assets/offer-5.jpeg'
import Off6 from '../assets/offer-7.jpeg'
import siz from '../assets/Mexico/376823e1-94a9-4e08-a8be-c72fd4109cee.jpeg'
import siz1 from '../assets/Mexico/4594b15c-8bf5-4d1e-a11f-4040f781f854.jpeg'
import siz2 from '../assets/Mexico/59518449-165b-40f8-a0dd-00bd0db2a439.jpeg'
import siz3 from '../assets/Mexico/6168d6d4-5b29-4451-93ba-91fe7d6b005e.jpeg'
import siz4 from '../assets/Mexico/9734ee9b-a375-47e6-bec6-a77bb480a768.jpeg'
import aut from '../assets/img1 (1).jpeg'
import aut1 from '../assets/img1 (2).jpeg'
import aut2 from '../assets/img1 (3).jpeg'
import aut3 from '../assets/img1 (4).jpeg'
import loc from '../assets/location.jpeg'
import live1 from '../assets/live 1.jpeg'
import live2 from '../assets/live 2.jpeg'



const Jayed = () => {
    
  return (
    <div id='Jayed' className=' max-w-[1240px] mx-auto py-16 px-4'>
        <h1 className=' text-center'>كمبوند جايد بالتجمع الخامس</h1>
        <p className=' text-center text-[#00df9a]'>احدث العروض والتخفيضات</p>
        <div className='grid grid-rows-none md:grid-cols-3 py-4 gap-2 md:gap-4'>
            <img className=' w-full h-full object-cover' src={Off1} alt="/" />
            <img className=' w-full h-full object-cover' src={Off2} alt="/" />
            <img className=' w-full h-full object-cover' src={Off3} alt="/" />
            <img className=' w-full h-full object-cover' src={Off4} alt="/" />
            <img className=' w-full h-full object-cover' src={Off5} alt="/" />
            <img className='w-full h-full object-cover' src={Off6} alt="/" />
        </div>
        <div className=' w-full h-full'>
            <h1 className=' text-center'>تقسيم الوحدة السكنية</h1>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className=' w-full h-full object-cover col-span-2 md:col-span-3' src={siz4} alt="/" />
                <img className=' w-full h-full object-cover' src={siz} alt="/" />
                <img className=' w-full h-full object-cover' src={siz1} alt="/" />
                <img className=' w-full h-full object-cover' src={siz2} alt="/" />
                <img className=' w-full h-full object-cover' src={siz3} alt="/" />
            </div>
        </div>
        <div className=' w-full h-full'>
            <h1 className=' text-center'>  صور من ارض الواقع</h1>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className=' w-full h-full object-cover col-span-2 md:col-span-3' src={loc} alt="/" />
                <img className=' w-full h-full object-cover' src={live1} alt="/" />
                <img className=' w-full h-full object-cover' src={aut1} alt="/" />
                <img className=' w-full h-full object-cover' src={aut2} alt="/" />
                <img className=' w-full h-full object-cover' src={live2} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Jayed