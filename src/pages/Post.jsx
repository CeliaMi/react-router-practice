import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Post = () => {
    const {post} = useLoaderData()

  return (
    <>
        <h1>{post.id} - {post.title}</h1>
        <p>{post.body}</p>
        <Link to='/blog'> Back </Link>
    </>
  )
}

export default Post

export const loaderPost = async({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json();
    return { post };
}