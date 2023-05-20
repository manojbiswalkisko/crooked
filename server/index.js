const dotenv = require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const User = require('./model/userModel');
const nodemailer = require('nodemailer');

const app = express();
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);

app.use(express.json());

// Database Connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


//Router
app.get('/', (req, res) => {
    res.send("This is server home page");
});

//Fill form router
app.post('/signup', async (req, res) => {
    try {
        const { fname, lname, email, phone, service } = req.body;

        //check fill all the details
        if (!fname || !lname || !email || !phone || !service) {
            return res.status(400).json({ message: "Please fill all the details" });
        }

        // Create a new user
        const newUser = new User({ fname, lname, email, phone, service });
        await newUser.save();
 
        /*
        // Compose the email body with user's data
        const emailBody = `
    New user registration:
    Name: ${fname} ${lname}
    Email: ${email}
    Phone: ${phone}
    Service: ${service}
  `;

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // e.g., Gmail, Yahoo
            auth: {
                user: 'manojbiswalkisko@gmail.com',
                pass: 'Manoj@250',
            },
        });


        // Define the email options
        const mailOptions = {
            from: 'biswalm653@gmail.com',
            to: 'manojbiswalkisko@gmail.com', // Replace with the recipient's email address
            subject: 'New User Registration',
            text: emailBody,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        */

        res.json({ status: 'ok' })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }

});


/*
//new form
app.post('/api/register', async (req, res) => {
	
    try {
    	
        await User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            service: req.body.service,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: 'Please fill all the details' })
    }
})
*/


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})