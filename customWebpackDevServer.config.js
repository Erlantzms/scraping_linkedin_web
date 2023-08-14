const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const fs = require('fs');
const paths = require('react-scripts/config/paths');

module.exports = {
  setupMiddlewares: (middlewares, devServer) => {
    if (!devServer) {
      throw new Error('webpack-dev-server is not defined');
    }

    if (fs.existsSync(paths.proxySetup)) {
      require(paths.proxySetup)(devServer.app);
    }

    middlewares.push(
      evalSourceMapMiddleware(devServer),
      redirectServedPath(paths.publicUrlOrPath),
      noopServiceWorkerMiddleware(paths.publicUrlOrPath)
    );

    return middlewares;
  },
};
