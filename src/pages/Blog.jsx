import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Blog = () => {

  const { posts } = useLoaderData() 
  console.log(posts) 
  return (
    <div>Blog</div>
  ) 
}

export default Blog

export const loaderBlog = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return { posts };
}