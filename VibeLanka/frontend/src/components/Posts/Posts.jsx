import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import AddPost from '../AddPost/AddPost'


export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getImage')
            .then(res => {
                if (res.data && res.data.length > 0) {
                    console.log('Fetched Images:', res.data);
                    const postsWithTime = res.data.reverse().map(imageData => ({
                        id: imageData.id,
                        image: imageData.image,
                        postTime: imageData.postTime || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        caption: imageData.caption,
                        location: imageData.location
                    }));
                    setPosts(postsWithTime);
                }
            })
            .catch(err => console.log(err));
    }, []); 

    const userName = "Ruwanthi Lakshika";

    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]); 
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteImage/${id}`)
            .then(res => {
                if (res.status === 200) {
                    setPosts(posts.filter(post => post.id !== id));
                }
            })
            .catch(err => console.log(err));
    };

  return (
    <div className='posts'>
         <AddPost onAddPost={handleAddPost} />
         {posts.map((post,index) => (
                <Post 
                    key={index} 
                    image={post.image} 
                    userName={userName} 
                    postTime={post.postTime} 
                    postCaption={post.caption} 
                    postLocation={post.location}
                    onDelete={() => handleDelete(post.id)}
                />
        ))}
    </div>
  )
}
