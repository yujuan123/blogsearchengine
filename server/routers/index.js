const regRouter = (app)=> {
  app.use('/todos', require('./todos'));
};

export default regRouter;