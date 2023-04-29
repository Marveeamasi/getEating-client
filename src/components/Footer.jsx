import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col nniceShape relative  justify-center bg-black items-center w-[100%] '>
    <div className='text-white squareI text-[700] m-5 text-2xl'>getEating</div>
   <div className='flex justify-between items-center flex-wrap'>
    <div className='w-[200] m-5 flex flex-col justify-center md:items-center items-start'>
        <h3 className='m-4 text-2xl text-white  '>Quick Links</h3>
        <p className='m-3 text-lg text-white'>Dashboard</p>
        <p className='m-3 text-lg text-white'>Plans</p>
        <p className='m-3 text-lg text-white'>Rewards</p>
        <p className='m-3 text-lg text-white'>Women Products</p>
    </div>
    <div className='w-[200] m-5 flex flex-col justify-center md:items-center items-start'>
        <h3 className='m-4 text-2xl text-white  '>Services</h3>
        <p className='m-3 text-lg text-white'>Graphic Design</p>
        <p className='m-3 text-lg text-white'>Data&Reporting Analyst</p>
        <p className='m-3 text-lg text-white'>Family Support Assistant</p>
        <p className='m-3 text-lg text-white'>Promo</p>
    </div>
    <div className='w-[200] m-5 flex flex-col justify-center md:items-center items-start'>
        <h3 className='m-4 text-2xl text-white  '>Social Media</h3>
        <p className='m-3 text-lg text-white'>Facebook</p>
        <p className='m-3 text-lg text-white'>Instagram</p>
        <p className='m-3 text-lg text-white'>Twitter</p>
        <p className='m-3 text-lg text-white'>Youtube</p>
    </div>
    <div className='w-[200] m-5 flex flex-col justify-center md:items-center items-start'>
        <h3 className='m-4 text-2xl text-white  '>About</h3>
        <p className='m-3 text-lg text-white'>Company</p>
        <p className='m-3 text-lg text-white'>Privacy Center</p>
        <p className='m-3 text-lg text-white'>Legal</p>
        <p className='m-3 text-lg text-white'>Help</p>
    </div>
   </div>
    <p className='m-5 mb-[200px] text-md text-white'><b>GET-EATING</b> * 2023 All Rights Reserved</p>
    <a href="" className='absolute  flex justify-center items-center  animate-bounce bottom-[5px] right-[15px]'><i class="fa fa-hand-point-up text-white text-[40px] "></i></a>
</div>
  )
}

export default Footer