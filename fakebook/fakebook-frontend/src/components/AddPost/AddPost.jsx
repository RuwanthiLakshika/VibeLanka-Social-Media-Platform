import React, { useState } from 'react';
import './addPost.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import axios from 'axios';

export default function AddPost() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        if (!file) {
            console.log('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='addPost'>
            <div className="addPostContainer">
                <div className="addPostTop">
                    <img src="./images/1.jpeg" alt="" className="addPostPic" />
                    <input placeholder="What's in your mind...?" type="text" className="addPostInput" />
                </div>
                <hr className='postHr' />
                <div className="addPostBottom">
                    <div className="addPostOptions">
                        <div className="addPostOption" onClick={() => document.getElementById('fileInput').click()}>
                            <InsertPhotoIcon htmlColor='orange' className='addPhoto' />
                            <span className="addPostText">Add Photo/Video</span>
                        </div>
                        <div className="addPostOption">
                            <AddLocationAltIcon htmlColor='red' className='addPhoto' />
                            <span className="addPostText">Add Location</span>
                        </div>
                        <div className="addPostOption">
                            <LocalOfferIcon htmlColor='blue' className='addPhoto' />
                            <span className="addPostText">Add Tag</span>
                        </div>
                        <div className="addPostOption">
                            <LiveTvIcon htmlColor='tomato' className='addPhoto' />
                            <span className="addPostText">Go Live</span>
                        </div>
                    </div>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <button className="postButton" onClick={handleUpload}>Post</button>
                </div>
            </div>
        </div>
    );
}
