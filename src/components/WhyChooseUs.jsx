import React from 'react';
import Timer from "../assets/Timer.png"
import www from "../assets/www.png"
import smile from "../assets/smile.png"
import bank from "../assets/Bank1 (2).png"


const WhyChooseUs = () => {
  return (
    <div className=' mt-8 ' id="Choose-us">
      <div className='text-4xl text-blue-500 text-center mt-0 font-bold font-serif'>
        Why Choose MY-Loan Credit Loan App?
      </div>  
      <div className='flex flex-wrap items-center justify-evenly px-4 mt-20 gap-6'>
        <div className='flex flex-col items-center justify-center bg-white text-blue-500 hover:bg-blue-500 hover:text-white shadow-md rounded-lg p-4 max-w-xs w-full'>
        <img 
            src={Timer} 
            alt='Approval Icon' 
            className='h-16 w-16 bg-amber-300 rounded-full mb-4 object-contain' 
          />
          <h1 className='text-2xl text-center font-mono mb-2'>Approval in 10 min's</h1>
          <p className='text-center px-3'>Get funds fast with our 10-minute loan approval process</p>
        </div>

        <div className='flex flex-col items-center justify-center bg-white text-blue-500 hover:bg-blue-500 hover:text-white shadow-md rounded-lg p-4 max-w-xs w-full'>
        <img 
            src={www} 
            alt='Approval Icon' 
            className='h-16 w-16 bg-amber-300 rounded-full mb-4 object-contain' 
          />
          <h1 className='text-2xl text-center font-mono mb-2'>Approval in 10 min's</h1>
          <p className='text-center px-3'>Get funds fast with our 10-minute loan approval process</p>
        </div>

        <div className='flex flex-col items-center justify-center bg-white text-blue-500 hover:bg-blue-500 hover:text-white shadow-md rounded-lg p-4 max-w-xs w-full'>
        <img 
            src={bank} 
            alt='Approval Icon' 
            className='h-16 w-16 bg-amber-300 rounded-full mb-4 object-contain' 
          />
          <h1 className='text-2xl text-center font-mono mb-2'>Approval in 10 min's</h1>
          <p className='text-center px-3'>Get funds fast with our 10-minute loan approval process</p>
        </div>

        <div className='flex flex-col items-center justify-center bg-white text-blue-500 hover:bg-blue-500 hover:text-white shadow-md rounded-lg p-4 max-w-xs w-full'>
        <img 
            src={smile} 
            alt='Approval Icon' 
            className='h-16 w-16 bg-amber-300 rounded-full mb-4 object-contain' 
          />
          <h1 className='text-2xl text-center font-mono mb-2'>Approval in 10 min's</h1>
          <p className='text-center px-3'>Get funds fast with our 10-minute loan approval process</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
