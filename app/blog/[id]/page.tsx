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