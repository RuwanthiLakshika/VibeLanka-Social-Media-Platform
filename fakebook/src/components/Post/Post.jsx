import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <img src="/images/post3.jpg" alt="" className="postImage" />
                <span className="postUserName">Ruwanthi Lakshika</span>
                <span className="postTime">5 mins ago</span>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                🌟✨ "Embrace the journey of becoming the best version of yourself. 
                Every step, every challenge, and every triumph shapes who you are and who you're meant to be. 💫💖
                </div>
                <img src="./images/post3.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/like.svg" alt="" className="reactionPic" />
                    {/* <img src="/images/care.svg" alt="" className="reactionPic" /> */}
                    <img src="/images/haha.svg" alt="" className="reactionPic" />
                    <img src="/images/love.svg" alt="" className="reactionPic" />
                    <img src="/images/angry.svg" alt="" className="reactionPic" />
                    <span className="likeCount">Ruwanthi 255 others</span>
                </div>
                <div className="postBottomRight"></div>
            </div>
        </div>
    </div>
  )
}
