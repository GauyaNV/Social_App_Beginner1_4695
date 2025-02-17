import { createContext, useState, useEffect } from 'react';
import "../index.css"
import { format } from "date-fns";
import api from "../api/post"
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { useNavigate } from 'react-router-dom';



const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [search,setSearch] = useState('');
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
},[data])

useEffect(() => {
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
   /*  const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data);
    }, [data])

    useEffect(() => {
        const filteredResults = posts.filter((post) =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());
    }, [posts, search]) */

    return (
        <DataContext.Provider value={{
            width,
            search, setSearch,
            searchResults, fetchError, isLoading,
          //  posts, setPosts,
          handleSubmit, postTitle, setPostTitle, postBody, setPostBody,
          posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle,
          handleDelete
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;