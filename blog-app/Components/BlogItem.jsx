import React from 'react'
import assets from '../assets/assets'

const BlogItem = ({ title, description, category, image }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] transition duration-300'>

      {/* Blog Image */}
      <img
        src={image}
        alt="blog"
        className='border-b border-black w-full'
      />

      {/* Category */}
      <p className='ml-5 mt-5 px-2 inline-block bg-black text-white text-sm'>
        {category}
      </p>

      {/* Content */}
      <div className='p-5'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>
          {title}
        </h5>

        <p className='text-sm text-gray-600'>
          {description}
        </p>

        {/* Read More */}
        <div className='flex items-center gap-2 mt-3 cursor-pointer'>
          <span>Read more</span>
          <img src={assets.arrow_icon} alt="arrow" className='w-4' />
        </div>
      </div>

    </div>
  )
}

export default BlogItem