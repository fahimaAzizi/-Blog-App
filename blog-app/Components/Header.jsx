import React from 'react'
import assets from '../assets/assets'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>

      {/* Top Navbar */}
      <div className='flex justify-between items-center'>
        <img
          src={assets.logo}
          width={180}
          alt="logo"
          className='w-[130px] sm:w-auto'
        />

        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
          Get Started
        </button>
      </div>

      {/* Hero Section */}
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>
          Latest Blogs
        </h1>

        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Email Form */}
        <form className='flex justify-between max-w-[500px] hieght-9px scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
          
          <input
            type='email'
            placeholder='Enter your email'
            className='pl-4 outline-none flex-1'
          /> 

          <button
            type='submit'
            className='border-l border-black py-4 px-4 sm:px-8'
          >
            Subscribe
          </button>

        </form>
      </div>

    </div>
  )
}

export default Header