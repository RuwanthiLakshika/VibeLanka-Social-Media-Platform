import React from 'react'
import './post.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Post() {
    const [image, setImage] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/getImage')
            .then(res => {
                if (res.data && res.data.length > 0) {
                    setImage(res.data[0].image);
                }
            })
            .catch(err => console.log(err));
    }, []);
    

  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="/images/post3.jpg" alt="" className="postImage" />
                <span className="postUserName">Ruwanthi Lakshika</span>
                <span className="postTime">5 mins ago</span>
                </div>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                🌟✨ "Embrace the journey of becoming the best version of yourself. 
                Every step, every challenge, and every triumph shapes who you are and who you're meant to be. 💫💖
                </div>
                 {image && (
                        <img src={`http://localhost:3001/images/${image}`} alt="" className="postedImage" />
                    )}
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/like.svg" alt="" className="reactionPic" />
                    <img src="/images/love.svg" alt="" className="reactionPic" />
                    {/* <img src="/images/care.svg" alt="" className="reactionPic" /> */}
                    <img src="/images/haha.svg" alt="" className="reactionPic" />
                    
                    {/* <img src="/images/angry.svg" alt="" className="reactionPic" /> */}
                    <span className="likeCount">Ruwanthi 255 others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">
                        15 comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
