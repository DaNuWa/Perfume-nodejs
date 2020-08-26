const express=require('express');

exports.getLogin=(req,res,next)=>
{
 res.render('masterindex'); 
}
exports.postLogin=(req,res,next)=>
{
 res.send(req.body.email); 
}