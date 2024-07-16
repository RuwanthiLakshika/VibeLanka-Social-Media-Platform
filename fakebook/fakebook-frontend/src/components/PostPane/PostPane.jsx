import React from 'react';
import './postPane.css';
import AddPost from '../AddPost/AddPost';
import Posts from '../Posts/Posts';

export default function PostPane() {
  return (
    <div className='postPaneBox'>
      <AddPost />
      <Posts />
      
    </div>
  )
}
