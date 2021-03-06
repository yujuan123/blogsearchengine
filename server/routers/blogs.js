import express from 'express';
import Blog from '../models/Blog';

let router = express.Router();

/*把blog数据库现在的数据返回去,并按时间倒叙排列*/
router.get('/',(req,res)=>{
  Blog.find({}).sort({_id:-1}).exec(function(err,data){
    res.send(data);
  })
});

/*把一条博客数据存进去*/
router.post('/blogContent', (req, res, next)=> {
  new Blog(req.body).save((err) => {
    if(err) {
      return next(err);
    } else {
      res.status(200).send("success");
    }
  });
});

/*点击查看任何一篇博客*/
router.get('/:id',(req,res)=>{
  Blog.findOne({_id:req.params.id},(err,data)=>{
    console.log("你所点击的博客"+data);
    res.send(data);
  })
});
/*点击删除任何一篇博客*/
router.delete('/:id', (req, res)=> {
  Blog.findByIdAndRemove(req.params.id, (err)=> {
    res.send({
      error: err
    });
  });
});
/*点击修改任何一篇博客*/
router.put('/:id', (req, res)=> {
  console.log("修改后的博客内容！"+req.body.blogContent);
  Blog.findOneAndUpdate({
    _id: req.body.blogId
  }, ({blogName:req.body.blogName,blogContent:req.body.blogContent}) ,(err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});



module.exports = router;
// export default router;