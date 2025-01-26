const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS
app.use(cors({
	origin: 'http://localhost:3000',
	methods: ['GET', 'POST', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Serve static files (e.g., videos, if needed) from the "public" directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve static files from "node_modules" so we can access video.js CSS and other libraries
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Serve the index.html file at the root route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/hls', express.static(path.join('/var/www/html', 'hls')));

// Start the server on port 3000
app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
