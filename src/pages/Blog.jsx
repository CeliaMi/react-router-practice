import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Blog = () => {

  const { posts } = useLoaderData() 
  return (
    <ul>
      { posts.length > 0 ? (posts.map((blog)=> 
        (
        <div ckey={blog.id} className="list-group">
          <Link className="list-group-item list-group-item-action" to={`/blog/${blog.id}`}>{blog.title}</Link>
        </div>
        )) 
      ):( 
        <li> Ups! No blogs found🤷‍♀️</li> 
      )} 

    </ul>
  ) 
}



export default Blog


