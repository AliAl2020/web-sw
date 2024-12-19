const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.hightechfrankfurt.de', // Replace with your API base URL
            changeOrigin: true,
        })
    );
};
