import React, { useContext } from 'react'
 import { useParams } from 'react-router-dom'
 import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'


const PostPage = () => {
  const {posts,handleDelete} = useContext(DataContext)
 const {id} = useParams()
 const post = posts.find(post => (post.id).toString() === id)
   
   return(
    <main className='PostPage' >
     <article className='post'>
      {post && 
     <>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
        
        <p className='postBody'>
         {
           (post.body)
         }
        </p>
        <Link to={`/post/edit/${post.id}`}>
        <button className='editButton' >Edit Post</button>
        </Link>
<button className = "deleteButton" onClick={() => handleDelete(post.id)}>Delete Post</button>
        </>
}
{!post &&
<>
  <h2>Page Not Found</h2>
        <p>Well, that's disappointing.</p>
        <p>Visit or homepage</p>
</>
}
     </article>
     </main>
   )
}

export default PostPage