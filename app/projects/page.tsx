import Link from 'next/link'
import React from 'react'
import BlogCard from '../components/BlogCard'

const page = () => {
  return (
    <div>
        <Link href='/post'><p>list of posts</p></Link>
        <p>pending..</p>
    </div>
  )
}

export default page