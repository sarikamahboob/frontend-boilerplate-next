import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link'
import React from 'react'

const Posts = async () => {
  const posts = await getAllPosts()
  return (
    <div>
      <h2>All Posts</h2>
      <ul style={{paddingLeft: '20px'}}>
        {
          posts.map((item:any, index:any) => (
            <li key={item?.id}>
              <Link href={`/posts/${item?.id}`}>{item?.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default  Posts