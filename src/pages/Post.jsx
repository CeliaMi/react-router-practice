import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Post = () => {
    const {post} = useLoaderData()

  return (
    <article className="card px-4 py-5 my-5">
        <div className="card-header">
            <h5 className="card-title">{post.id} - {post.title}</h5>
        </div>
        <div className="card-body">
            <p className="card-text">{post.body}</p>
            <Link className="btn btn-secondary" to='/blog'> Back </Link>
        </div>
    </article>
    
  )
}

export default Post

