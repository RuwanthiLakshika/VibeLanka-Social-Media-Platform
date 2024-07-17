import React from 'react'
import './post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';

export default function Post({ image, userName, postTime, postCaption, onDelete }) {
    const [showOptions, setShowOptions] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const handleDelete = () => {
        setShowConfirm(false)
        setShowOptions(false)
        onDelete()
    }

    const handleCancel = () => {
        setShowConfirm(false)
        setShowOptions(false)
    }

    const formattedTime = new Date(postTime).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="/images/1.jpeg" alt="" className="postImage" />
                <span className="postUserName">{userName}</span>
                <span className="postTime">{formattedTime}</span>
                </div>
                <div className="postTopRight">
                <MoreHorizIcon onClick={() => setShowOptions(!showOptions)} className="moreOptionsIcon" />
                        {showOptions && (
                            <div className="dropdown">
                                <div className="dropdownItem" onClick={() => setShowConfirm(true)}><small>Delete</small></div>
                            </div>
                        )}
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
                    <img src="/images/haha.svg" alt="" className="reactionPic" />
                    <span className="likeCount">Ruwanthi 0 others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">
                        0 comments
                    </span>
                </div>
            </div>
        </div>
        {showConfirm && (
                <div className="confirmationBox">
                    <p>Are you sure you want to delete this post?</p>
                    <button onClick={handleDelete}>Yes</button>
                    <button onClick={handleCancel}>No</button>
                </div>
            )}
    </div>
  )
}
