import React, { useState, useRef, useEffect } from 'react';
import SimplePeer from 'simple-peer';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export default function GoLive({ onClose }) {
    const [peer, setPeer] = useState(null);
    const [stream, setStream] = useState(null);
    const videoRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                setStream(stream);
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch(err => console.error('Error accessing media devices.', err));
    }, []);

    const startStreaming = () => {
        const peer = new SimplePeer({
            initiator: true,
            stream: stream,
            trickle: false
        });

        peer.on('signal', data => {
            socket.emit('broadcaster', data);
        });

        socket.on('viewer', signal => {
            peer.signal(signal);
        });

        peer.on('connect', () => {
            console.log('Peer connected');
        });

        peer.on('stream', stream => {
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        });

        peer.on('close', () => {
            console.log('Stream closed');
            onClose();
        });

        setPeer(peer);
    };

    useEffect(() => {
        startStreaming();
    }, [stream]);

    const handleStopStreaming = () => {
        stream.getTracks().forEach(track => track.stop());
        onClose();
    };

    return (
        <div>
            <video ref={videoRef} autoPlay muted style={{ width: '100%' }} />
            <button onClick={handleStopStreaming}>Stop Live</button>
        </div>
    );
}
