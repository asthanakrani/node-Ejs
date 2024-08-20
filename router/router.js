const express =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log(__dirname);
    res.render('index');
})
router.get('/about',(req,res)=>{
    console.log(__dirname);
    res.render('pages/about');
})
router.get('/blog-1',(req,res)=>{
    console.log(__dirname);
    res.render('pages/blog-1');
})
router.get('/blog-2',(req,res)=>{
    console.log(__dirname);
    res.render('pages/blog-2');
})
router.get('/contact',(req,res)=>{
    console.log(__dirname);
    res.render('pages/contact');
})
router.get('/menu',(req,res)=>{
    console.log(__dirname);
    res.render('pages/menu');
})
router.get('/portfolio-1',(req,res)=>{
    console.log(__dirname);
    res.render('pages/portfolio-1');
})
router.get('/portfolio-2',(req,res)=>{
    console.log(__dirname);
    res.render('pages/portfolio-2');
})
router.get('/single_post_sidebar',(req,res)=>{
    console.log(__dirname);
    res.render('pages/single_post_sidebar');
})
router.get('/single_post',(req,res)=>{
    console.log(__dirname);
    res.render('pages/single_post');
})
module.exports =router;