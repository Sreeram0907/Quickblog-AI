import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        <div>
            <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
            <p className='max-w-[410px] mt-6'>ffxmkv  ljdnjd jnjndvnf vl fnfnlfs fipj;gtg ekfjaeihfg ijndg fjvkmmgthm omkmbkmpep?</p>
        </div>
        <div className=''>

        </div>

        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2025 © QuickBlog GreatStack - All Right Reserved.</p>

    </div>
  )
}

export default Footer
