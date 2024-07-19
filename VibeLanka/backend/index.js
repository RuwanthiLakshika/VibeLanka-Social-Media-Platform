const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const http = require('http');
const socketIo = require('socket.io');

const prisma = new PrismaClient();
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  const { caption,location } = req.body;
  try {
    const user = await prisma.user.create({
      data: { 
        image: req.file.filename,
        caption: caption,
        location: location,
       },
    });
    res.json(user); 
  } catch (err) {
    res.json(err);
  }
});

app.get('/getImage', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

app.delete('/deleteImage/:id', async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

// WebSocket implementation for Go Live feature
io.on('connection', (socket) => {
  socket.on('broadcaster', (data) => {
    socket.broadcast.emit('viewer', data);
  });

  socket.on('viewer', (data) => {
    socket.broadcast.emit('broadcaster', data);
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('disconnectPeer');
  });
});

app.listen(3001, () => {
  console.log('Server started');
});
