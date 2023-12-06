const URL_API = "https://jsonplaceholder.typicode.com/posts"


export const loaderPost = async({ params }) => {

    const res = await fetch(URL_API+`/${params.id}`)

    if(!res.ok) throw ({
        status: res.status,
        statusText:'Not found'
    })
    const post = await res.json();
    return { post };
}

export const loaderBlog = async () =>{
    const res = await fetch(URL_API)
    if(!res.ok) throw ({
      status: res.status,
      statusText:'Not found'
      })
     const posts = await res.json()
    return { posts };
  }