// "use client"
import { notFound } from 'next/navigation'
import React from 'react'

const SingleBlogPage = ({params}:any) => {
  const {id} = params
  if(id > '2'){
    notFound()
  }
  return (
    <div>The blog id is : {id}</div>
  )
}

export default SingleBlogPage


export async function generateStaticParams() {
  // Fetch blog post IDs or define them manually
  const blogPosts = await fetch('https://jsonplaceholder.typicode.com/posts') // Replace with your API endpoint
    .then(response => response.json());

  // Map the fetched posts to the required format
  const blogPostIds = blogPosts.map((post: any) => ({
    id: post.id.toString(),
  }));

  // Manually include any required IDs that might be missing
  const requiredIds = [{ id: '1' }, { id: '2' }];
  const allIds = [...requiredIds, ...blogPostIds];

  // Ensure there are no duplicates
  const uniqueIds = Array.from(new Set(allIds.map(a => a.id))).map(id => ({
    id,
  }));

  return uniqueIds;
}

