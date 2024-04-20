import express from "express";
import jwtAuth from "../Middelware/Jwt.js";
import moviesController from '../src/MoviesController.js'
const moviesControllers=new moviesController()
const router = express.Router();
router.get('/test',jwtAuth,(req,res)=>{
    moviesControllers.category(req,res)
})
router.get('/allMovies',jwtAuth,(req,res)=>{
    moviesControllers.getAllMovies(req,res)
})
router.post('/search',jwtAuth,(req,res)=>{
    moviesControllers.searchmovies(req,res)
})
export  default router