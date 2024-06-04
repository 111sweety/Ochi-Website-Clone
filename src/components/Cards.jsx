import React from 'react'
import logo1 from '../assets/images/logo001.svg'
import logo2 from '../assets/images/clutchLogo.svg'
import logo3 from '../assets/images/logo003.png'
function Cards() {
  return (
        <div className='w-full h-screen bg-zinc-100 px-32 flex gap-5  items-center'>
        <div className="cardContent h-[50vh] w-1/2 ">
            <div className="Card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img className='w-32' src={logo1} alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 '> &copy;2019-2022</button>
            </div>
        </div>
        <div className="cardContent w-1/2 h-[50vh] flex gap-5">
            <div className="Card relative rounded-xl w-1/2 h-full bg-gray-900 flex items-center justify-center">
            <img className='w-32' src={logo2} alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 '> &copy;2019-2022</button>
            </div>
            <div className="Card relative rounded-xl w-1/2 h-full bg-zinc-900 flex items-center justify-center">
            <img className='w-32' src={logo3} alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 '> &copy;2019-2022</button>
            </div>
        </div>
    </div>
  ) 
}

export default Cards
