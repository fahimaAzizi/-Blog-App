import React, { useState } from 'react'
import BlogItem from './BlogItem'
import assets from '../assets/assets'

const BlogList = () => {

  const [menu, setMenu] = useState("All")

  // ✅ Define blogs here (NO blog_data.js needed)
  const blog_data = [
    {
      title: "React Blog",
      description: "Learn React step by step",
      category: "Technology",
      image: assets.pic1
    },
    {
      title: "Startup Guide",
      description: "Build startup easily",
      category: "Startup",
      image: assets.pic2
    },
    {
      title: "Healthy Life",
      description: "Tips for better lifestyle",
      category: "Lifestyle",
      image: assets.pic3
    }
  ]

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