const regRouter = (app)=> {
  app.use('/blogs', require('./blogs'));
};

export default regRouter;