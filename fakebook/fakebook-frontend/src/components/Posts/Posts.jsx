import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '../Post/Post'


export default function Posts() {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getImage')
            .then(res => {
                if (res.data && res.data.length > 0) {
                    console.log('Fetched Images:', res.data);
                    setImages(res.data);
                }
            })
            .catch(err => console.log(err));
    }, []); 

    const userName = "Ruwanthi Lakshika";
    const postTime = "5 mins ago";
    const postCaption = `🌟✨ "Embrace the journey of becoming the best version of yourself. 
        Every step, every challenge, and every triumph shapes who you are and who you're meant to be. 💫💖`;

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteImage/${id}`)
            .then(res => {
                if (res.status === 200) {
                    setImages(images.filter(image => image.id !== id));
                }
            })
            .catch(err => console.log(err));
    };

  return (
    <div className='posts'>
        {images.map((imageData, index) => (
            <Post 
                key={index} 
                image={imageData.image} 
                userName={userName} 
                postTime={postTime} 
                postCaption={postCaption} 
                onDelete={() => handleDelete(imageData.id)}
            />
        ))}
    </div>
  )
}
