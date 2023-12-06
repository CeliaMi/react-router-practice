import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Blog = () => {

  const { posts } = useLoaderData() 
  return (
    <ul>
      { posts.length > 0 ? (posts.map((blog)=> 
        (<li key={blog.id}> {blog.id} 👉
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>)) 
      ):( 
        <li> Ups! No blogs found🤷‍♀️</li> 
      )} 

    </ul>
  ) 
}

export default Blog

export const loaderBlog = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if(!res.ok) throw ({
    status: res.status,
    statusText:'Not found'
    })
  const posts = await res.json()
  return { posts };
}