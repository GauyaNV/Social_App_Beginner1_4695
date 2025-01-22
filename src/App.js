import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Nav from "./Nav";
import Home from "./Home";
import { Routes,Route, Link, Navigate, useNavigate } from "react-router-dom";
import Post from "./Post";
import PostLayout from "./PostLayout";
import { useEffect, useState } from "react";
import "./index.css"
import { format } from "date-fns";
import api from "./api/post"
import EditPost from "./EditPost";
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { DataProvider } from "./context/DataContext";

function App() {
/*   const [search,setSearch] = useState('');
  const [posts,setPosts] = useState([])
const [searchResults,SetSearchresults] = useState('')
const [postTitle, setPostTitle] = useState('')
const [postBody, setPostBody] = useState('')
const [editTitle, setEditTitle] = useState('')
const [editBody, setEditBody] = useState('')
const navigate = useNavigate();//redirects to home page if we have used the route element properly
const {width} = useWindowSize()
const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts')


useEffect (() => {
  setPosts(data)
},[data]) */
/* useEffect(() => {
  const fetchPosts = async () => {
try{
const response = await api.get("/posts")
setPosts(response.data)
}
catch(err){
  if(err.response)
  {
    console.log(err.response.data)
    console.log(err.response.status)
    console.log(err.response.headers)
  }
  else{
    console.log(`Error: ${err.message}`)
  }
}
  }
  fetchPosts()
},[]) */

/* useEffect(() => {
  const filteredResults = posts.filter(
    (post) => ((post.body).toLowerCase()).includes(search.toLowerCase())
    ||
    ((post.title).toLowerCase()).includes(search.toLowerCase())
  )
  SetSearchresults(filteredResults.reverse())
},[posts,search])

const handleSubmit = async (e) => {
e.preventDefault();
const id = posts.length ? posts[posts.length -1].id +1 : 1
const datetime = format(new Date() , 'MMMM dd,yyyy pp')
const newPost = {id,title:postTitle,datetime,body:postBody}
try{
const response = await api.post('/posts',newPost)
const allposts = [...posts,response.data]
setPosts(allposts)
setEditTitle('')
setEditBody('')
navigate('/')
}
catch(err)
{
  console.log(`Error: ${err.message}`)
}


}
const handleEdit = async (id) => {
 
  const datetime = format(new Date() , 'MMMM dd,yyyy pp')
  const updatedPost = {id,title:editTitle,datetime,body:editBody}
  try{
  const response = await api.put(`/posts/${id}`,updatedPost)
  setPosts(posts.map(post => post.id === id ? {...response.data}:post))
  setPostTitle('')
  setPostBody('')
  navigate('/')
  }
  catch(err)
  {
    console.log(`Error: ${err.message}`)
  }
  
  
  }
const handleDelete = async (id) => {
try{
await api.delete(`posts/${id}`)
const postsList = posts.filter(post => post.id !== id);
setPosts(postsList);
console.log('Navigating to home...');
navigate('/')
}
catch(err){
  console.log(`Error: ${err.message}`)
}
 
  }
 */
  return (
   <div className="App">
{/* <nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/NewPost">New Post</Link></li>
    <li><Link to="/PostPage">PostPage</Link></li>

  </ul>
</nav>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/about' element = {<About />} />
      <Route path = '/NewPost' element = {<NewPost />} />

      <Route path="/Postpage" element ={<PostLayout />}>
      <Route index element = {<PostPage />} />
      <Route path = ':id' element = {<Post />}></Route>
      <Route path="NewPost" element = {<NewPost />} />
      </Route>
      
      <Route path = '*' element ={<Missing />} />
    </Routes> */}
    {/*  <Header title = "Social Media App" width = {width}/>
        <Nav search = {search} setSearch = {setSearch}/>
        <Routes>
          <Route path = "/" element = {
        <Home posts = {searchResults} fetchError = {fetchError} isLoading = {isLoading}/>} />

        <Route path = "Post">

        <Route index element = {
        <NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} 
        postBody={postBody} setPostBody={setPostBody} />} 
        />

        <Route path = ":id" element = {
        <PostPage posts = {posts} handleDelete = {handleDelete}/>} 
        />
        
        <Route path ="edit/:id" element = {<EditPost posts = {posts}
        handleEdit = {handleEdit} editBody = {editBody} setEditBody = {setEditBody} editTitle = {editTitle} setEditTitle = {setEditTitle} />}
        />
        </Route>

        <Route path = "About" element = {<About />} />
        <Route path = '*' element ={<Missing />} />
        </Routes> */}
    <DataProvider>
        <Header title = "Social Media App"/>
        <Nav />
        <Routes>
          <Route path = "/" element = {
        <Home />} />

        <Route path = "Post">

        <Route index element = {<NewPost />} />

        <Route path = ":id" element = {
        <PostPage />} 
        />
        
        <Route path ="edit/:id" element = {<EditPost />} />
        </Route>

        <Route path = "About" element = {<About />} />
        <Route path = '*' element ={<Missing />} />
        </Routes>
    </DataProvider>
    <Footer />

   </div>
  );
}

export default App;
