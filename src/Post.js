import React from 'react'

import { Link } from 'react-router-dom'

/* const Post = () => {
    const {id} = useParams()
  return (
   
    <div>Post {id}
    
    </div>
  )
} */
const Post = ({post}) =>{

  //const {id} = useParams()
  //const post = post.find(post => (post.id).toString() === id)
  return(
    <article className='post'>
      
      <Link to={`/post/${post.id}`}> {/* Use forward slashes in the path */}
       <h2>{post.title}</h2>
       <p className='postDate'>{post.datetime}</p>
       </Link>
       <p className='postBody'>
        {
          (post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...`
        }
       </p>
    </article>
  )
}

export default Post