import React, { useState } from 'react';
import './addPost.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useRef } from 'react';
import GoLive from '../GoLive/GoLive';

export default function AddPost({ onAddPost }) {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [caption, setCaption] = useState('');
    const [location, setLocation] = useState('');
    const [isLive, setIsLive] = useState(false); 
    const statusRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    };

    const handleUpload = async (e) => {
        if (!file) {
            console.log('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('caption', caption); 
        formData.append('location', location);

        try {
            const res = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res.data);
            onAddPost({ image: res.data.image, caption: caption, location: location });
        } catch (err) {
            console.error(err);
        }
        setFile(null);
        setPreview(null);
        setCaption('');
        setLocation('');
        window.location.reload();
    };

    const handleClosePreview = () => {
        setFile(null);
        setPreview(null);
    };

    const handleGoLive = () => {
        setIsLive(true);
    };

    const handleCloseLive = () => {
        setIsLive(false);
    };
    
    const findMyState=()=>{

        const status = statusRef.current; 
    
        const success=(position)=>{
            console.log(position)
            const latitude=position.coords.latitude;
            const longitude=position.coords.longitude;
            console.log(latitude +' ' + longitude)
    
            const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        
            fetch(geoApiUrl)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const locationString = `${data.locality}, ${data.principalSubdivision}, ${data.countryName}`;
                if (status) { 
                    status.textContent = `your current location is ${data.locality}, ${data.principalSubdivision}, ${data.countryName}`;
                }
                setLocation(locationString);
            })
        }
    
        const error=()=>{
            if (status) { 
                status.textContent = 'Unable to retrieve your location';
            }
        }
    
        navigator.geolocation.getCurrentPosition(success,error);
    }
    
    

    return (
        <div className='addPost'>
            <div className="addPostContainer">
                <div className="addPostTop">
                    <img src="./images/1.jpeg" alt="" className="addPostPic" />
                    <input
                        placeholder="What's in your mind...?"
                        type="text"
                        className="addPostInput"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </div>
                <hr className='postHr' />
                <p className="status" ref={statusRef}></p>
                {preview && (
                        <div className="previewContainer">
                            <img src={preview} alt="Preview" className="imagePreview" />
                            <CloseIcon className="closeIcon" onClick={handleClosePreview} />
                        </div>
                    )}
                <div className="addPostBottom">
                    <div className="addPostOptions">
                        <div className="addPostOption" onClick={() => document.getElementById('fileInput').click()}>
                            <InsertPhotoIcon htmlColor='orange' className='addPhoto' />
                            <span className="addPostText">Add Photo/Video</span>
                        </div>
                        <div className="addPostOption" onClick={findMyState}>
                            <AddLocationAltIcon htmlColor='red' className='addPhoto' />
                            <span className="addPostText">Add Location</span>
                        </div>
                        <div className="addPostOption">
                            <LocalOfferIcon htmlColor='blue' className='addPhoto' />
                            <span className="addPostText">Add Tag</span>
                        </div>
                        <div className="addPostOption" onClick={handleGoLive}>
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
            {isLive && <GoLive onClose={handleCloseLive} />}
        </div>
    );
}
