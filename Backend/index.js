import express from 'express'

import dotenv from 'dotenv';
import cors from'cors'
dotenv.config();
import router from './src/router.js';
import connectUsingMongoose from './Config/connectionDB.js';
import bodyParser from 'body-parser';
const server=express();
server.use(cors());
server.use(bodyParser.json());
server.use('/movies',router);
server.listen(8009,()=>{
    console.log("server is running");
    connectUsingMongoose()
})