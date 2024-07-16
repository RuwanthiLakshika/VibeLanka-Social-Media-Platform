import React from 'react'
import './post.css'

export default function Post({ image, userName, postTime, postCaption }) {
  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="/images/post3.jpg" alt="" className="postImage" />
                <span className="postUserName">{userName}</span>
                <span className="postTime">{postTime}</span>
                </div>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    {postCaption}
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
