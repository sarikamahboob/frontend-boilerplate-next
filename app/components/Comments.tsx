import React from 'react'

const Comments =async ({promise}:any) => {
  const comments = await promise
  return (
    <div>
      <div>
        <h1>Comments</h1>
        <ul>
          {
            comments.map((item:any, index:any) => (
              <li key={item?.id}>{item?.body}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Comments