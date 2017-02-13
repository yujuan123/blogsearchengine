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
/*点击修改任何一篇博客
router.put('/:id', (req, res)=> {
  Blog.findOneAndUpdate({
    _id: req.params.id
  }, (req.body) ,(err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});
*/


module.exports = router;
// export default router;