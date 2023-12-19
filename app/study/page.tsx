import Link from 'next/link'
import React from 'react'
import BlogCard from '../components/BlogCard'
const list = () => {
  return (
    <div>
        <Link href='/post'><p>list of posts</p></Link>
        <BlogCard/>
    </div>
  )
}

export default list