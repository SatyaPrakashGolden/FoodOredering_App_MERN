const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const connectDB = require('./config/db.js'); 
const PORT = process.env.PORT || 3000;
const authController = require('./controllers/authController');
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
// routes & middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// connect our db
connectDB();
//route
app.use('/auth', authController);
app.use('/product', productController)
app.use('/upload', uploadController)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
