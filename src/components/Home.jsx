import React from 'react';
import Wall from '../assets/wallpaper.jpeg'

const Home = () => {
    const phoneNumber = '01062879015';
    const getWhatsAppLink = () => {
        return `https://api.whatsapp.com/send?phone=${phoneNumber}`;
      };
  return (
    <div className=' w-full h-screen'>
        <img className=' top-0 left-0 w-full h-screen ' src={Wall} alt="/" />
        <div className=' bg-black/30 absolute top-0 left-0 w-full h-screen'></div>
        <div className=' text-white'></div>
        <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className=' md:left-[35%] max-w-[1100px] mt-[200px] m-auto absolute p-4 '>
                <h1 className=' font-bold text-5xl md:text-7xl drop-shadow-2xl'>شركة هير كابيتال</h1>
                <h1 className=' font-bold text-5xl md:text-7xl drop-shadow-2xl '>للتسويق العقاري</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>التجمع/العاصمة الادارية الجديدة</p>
                <button className=' bg-[#ddaa44] hover:bg-gray-700 mt-5'><a href={getWhatsAppLink()}>  الاتصال الان</a></button>
            </div>
        </div>
    </div> 
  )
}

export default Home