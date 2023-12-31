import { Link, useLoaderData } from 'react-router-dom'

const Blog = () => {

  const { posts } = useLoaderData() 
  return (
    <>
    <ul className='px-4 py-5 my-5'>
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
    </>

    
  ) 
}



export default Blog


