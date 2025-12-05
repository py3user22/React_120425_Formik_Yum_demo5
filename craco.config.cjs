module.exports = {
  devServer: (devServerConfig) => {
    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      console.log("Custom middleware setup");
      return middlewares;
    };
    return devServerConfig;
  },
};


