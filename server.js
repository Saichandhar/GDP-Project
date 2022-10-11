/* 
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase, ref, set, onValue, update, remove } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //****************** add your configaration here *******************
  apiKey: "AIzaSyDghAAvMSGvON4Lmd-jop0VyjOiAC5t8lM",
authDomain: "smart-mobility-ios.firebaseapp.com",
databaseURL: "https://smart-mobility-ios-default-rtdb.firebaseio.com",
projectId: "smart-mobility-ios",
storageBucket: "smart-mobility-ios.appspot.com",
messagingSenderId: "727144855934",
appId: "1:727144855934:web:2ca21a0d262114a85ddb2f",
measurementId: "G-5SNWQ6NS22"

};

  // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);






const { initializeApp } = require('firebase-admin/app');
import { initializeApp } from 'firebase-admin/app';


const admin = require("firebase-admin")
admin.initializeApp()

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'vijayusa146@gmail.com',
        pass: 'hkikbhbdhdgsqcjq'
    }
});


exports.sendEmail = functions.firestore
    .document('riders/{riderID}}')
    .onCreate((snap, context) => {
        const mailOptions = {
            from: `vijayusa146@gmail.com`,
            to: snap.data().email,
            subject: 'contact form message',
            html: `<h1>From Smart Mobility</h1>
             <p> <b>Email: </b>${snap.data().email} </p>`

};


 return transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("Sent!")
   });
});

exports.sendMailOverHTTP = functions.https.onRequest((req, res) => {
    const mailOptions = {
        from: `vijayusa146@gmail.com`,
        to: req.body.email,
        subject: 'From Smart Mobility',
        html: `<h1>From admin page</h1>
                            <p>
                               <b>Email: </b>${req.body.email}<br>
                            </p>`
    };


    return transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
            return res.send(error.toString());
        }
        var data = JSON.stringify(data)
        return res.send(`Sent! ${data}`);
    });

});
*/


 
const express = require('express');
const app = express();

const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000 ;

//Middleware

app.use(express.static('public'));
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/emailriders.html')
})

app.post('/',(req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
            user: 'vijayusa146@gmail.com',
            pass: 'pvktjpklezqqqmvi'
       }
    })

    const mailOptions = {
        from: 'vijayusa146@gmail.com',
        to: req.body.email ,
        subject: `Message from vijayusa146@gmail.com: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent:' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})  