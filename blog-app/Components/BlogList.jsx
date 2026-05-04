import React, { useState } from 'react'
import { blog_data } from '../assets/blog_data'
import BlogItem from './BlogItem'

const BlogList = () => {

  const [menu, setMenu] = useState("All")

  return (
    <div>

      {/* Buttons */}
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={() => setMenu("All")} className='bg-black text-white px-4 py-1 rounded'>
          All
        </button>

        <button onClick={() => setMenu("Technology")}>
          Technology
        </button>

        <button onClick={() => setMenu("Startup")}>
          Startup
        </button>

        <button onClick={() => setMenu("Lifestyle")}>
          Lifestyle
        </button>
      </div>

      {/* Blog List */}
      <div className='flex flex-wrap justify-center gap-8'>

        {blog_data
          .filter(item => menu === "All" ? true : item.category === menu)
          .map((item, index) => (
            <BlogItem
              key={index}
              title={item.title}
              description={item.description}
              category={item.category}
              image={item.image}
            />
          ))
        }

      </div>

    </div>
  )
}

export default BlogList