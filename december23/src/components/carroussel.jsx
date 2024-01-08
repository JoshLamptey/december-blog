import citylights from './citylights1.jpg'
import {icons} from 'react-icons/bs'
import React1 from './react1.jpg'
import reatct2 from './react2.jpg'
import nailart from './nail art.jpg'


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
    return(
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
            <div style={{backgroundImage:`url(${slides[0].img})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
        </div>
    )
}