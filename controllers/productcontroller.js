const express=require('express');

exports.getProduct=(req,res,next)=>
{
 res.render('masterindex'); 
}
exports.postProduct=(req,res,next)=>
{
 res.send(req.body.email); 
}