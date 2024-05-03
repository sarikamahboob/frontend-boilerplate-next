import Comments from '@/app/components/Comments'
import getAllPosts from '@/lib/getAllPosts'
import getPostComments from '@/lib/getPostComment'
import getSinglePost from '@/lib/getSinglePost'
import React, { Suspense } from 'react'

export async function generateMetadata({params}:any) {
  const {id} = params 
  const post:any = await getSinglePost(id)

  return {
    title: post.title,
    description: post.description,
  }
}

const SinglePostPage = async ({params}:any) => {
  const {id} = params 
  const postPromise:any = getSinglePost(id)
  const post = await postPromise
  const commentsPromise = getPostComments(id)
  // const [post, comments] = await Promise.all([postPromise, commentsPromise])

  return (
    <div>
      <h3 style={{color: 'blueviolet', marginBottom: '10px'}}>{post?.title}</h3>
      <p>{post?.body}</p>
      <hr />
      <Suspense fallback="<h1>Loading Comments ...</h1>">
        <Comments promise={commentsPromise}/>
      </Suspense>
    </div>
  )
}

export default SinglePostPage

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post:any) => ({
    id: post?.id?.toString()
  }))
}