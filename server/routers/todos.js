import express from 'express';
import Todo from '../models/Todo';

let router = express.Router();

router.get('/', (req, res)=> {
  Todo.find((err, data)=> {
    console.log(data + 'server')
    res.send(data);
  });
});

router.get('/:id', (req, res)=> {
  Todo.findOne({
    _id: req.params.id
  }, (err, data)=> {
    res.send(data);
  });
});

router.put('/:id', (req, res)=> {
  Todo.update({
    _id: req.params.id
  }, {
    text: req.body.text
  }, (err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});

router.post('/', (req, res, next)=> {
  new Todo({
    val1: req.body.val1,
    val2: req.body.val2
  }).save((err, todo) => {
    if(err) {
      return next(err);
    } else {
      res.send(todo);
    }
  });
});

router.delete('/:id', (req, res)=> {
  Todo.findByIdAndRemove(req.params.id, (err)=> {
    res.send({
      error: err
    });
  });
});

module.exports = router;
// export default router;