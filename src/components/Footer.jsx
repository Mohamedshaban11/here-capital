import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaLocationArrow
  } from "react-icons/fa";

const Footer = () => {
    const phoneNumber = '01062879015';
    const getWhatsAppLink = () => {
        return `https://api.whatsapp.com/send?phone=${phoneNumber}`;
      };
  return (
    <div className=' w-full mt-24 bg-[#414141] p-5'>
        <div className=' max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 border-b-2 border-[#00df9a] py-8 px-4'>
            <div>
                <h6 className=' pt-2 ml-4 font-bold text-white'>مواعيد العمل</h6>
                <ul>
                    <li className=' py-1 text-white'>Saturday-Open 24 hours</li>
                    <li className=' py-1 text-white'>Sunday-Open 24 hours</li>
                    <li className=' py-1 text-white'>Monday-Open 24 hours</li>
                    <li className=' py-1 text-white'>Tuesday-Open 24 hours</li>
                    <li className=' py-1 text-white'>Wendnesday-Open 24 hours</li>
                    <li className=' py-1 text-white'>Thursday-Open 24 hours</li>
                    <li className=' py-1 text-white'>Friday-Open 24 hours</li>
                </ul>
            </div>
            <div>
                <h6 className=' font-bold uppercase mt-28 text-white'>جميع الحقوق محفوظة شركة هير كابيتال 2023</h6>
            </div>
            <div className=' flex justify-between items-center sm:w-[300px] mb-8 pt-4 text-2xl '>
                <a href="https://www.facebook.com/profile.php?id=100084141068220&mibextid=LQQJ4d"><FaFacebook size={30} className="icons1" /></a> 
                <a href="https://instagram.com/kelsafer?igshid=MzRlODBiNWFlZA=="><FaInstagram size={30} className="icons1"/></a> 
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} className="icons1"/></a> 
                <a href="https://www.google.com/maps/search/%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D9%87+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%87,+%E2%80%8F%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D9%87+%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D9%87+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9,+Tanta,+Gharbia+Governorate,+Egypt,+31711%E2%80%AD/@29.9723,31.5799,17z?hl=en&entry=ttu"><FaLocationArrow size={30} className="icons1"/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer