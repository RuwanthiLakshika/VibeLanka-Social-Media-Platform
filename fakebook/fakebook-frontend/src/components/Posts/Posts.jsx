import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '../Post/Post'


export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getImage')
            .then(res => {
                if (res.data && res.data.length > 0) {
                    console.log('Fetched Images:', res.data);
                    const postsWithTime = res.data.reverse().map(imageData => ({
                        ...imageData,
                        postTime: imageData.postTime || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }));
                    setPosts(postsWithTime);
                }
            })
            .catch(err => console.log(err));
    }, []); 

    const userName = "Ruwanthi Lakshika";
    const postCaption = `🌟✨ "Embrace the journey of becoming the best version of yourself. 
        Every step, every challenge, and every triumph shapes who you are and who you're meant to be. 💫💖`;


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
        {posts.map((post, index) => (
            <Post 
                key={index} 
                image={post.image} 
                userName={userName} 
                postTime={post.postTime} 
                postCaption={postCaption} 
                onDelete={() => handleDelete(post.id)}
            />
        ))}
    </div>
  )
}
