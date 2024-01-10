import citylights from './citylights1.jpg'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import React1 from './react1.jpg'
import reatct2 from './react2.jpg'
import nailart from './nailArt.jpg'
import { useState } from 'react'


export default function Carroussel(){
    const slides = [
        {
            img: citylights,
        },
        {
            img: React1,
        },
        {
            img: reatct2,
        },
        {
            img: nailart,
        }
    ]
    const [currentImg,setCurrentImg]= useState(0)
function forward(){
    if(currentImg < 3){
        setCurrentImg((oldValue)=> oldValue + 1 )
    }
    
}
function backward(){
    if (currentImg > 0 ){
    setCurrentImg((oldValue)=> oldValue - 1 )
    }
}
 function goToSlide(slideIndex){
    setCurrentImg(slideIndex);
 }

    return(
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <div style={{backgroundImage:`url(${slides[currentImg].img})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                <div onClick={backward} className=' hidden group-hover:block absolute top-[50] translate-x-0 translate-y-[-50] left-5 mt-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft size={30}/>
                </div>
                <div onClick={forward} className=' hidden group-hover:block absolute top-[50] translate-x-0 translate-y-[-50] right-5 mt-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight size={30}/>
                </div>

            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide,slideIndex)=>{
                    return(
                        <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                            <RxDotFilled/>
                            </div>
                    )
                })}
            </div>  
        </div>
    )
}