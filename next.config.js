const withSvgr = require('next-svgr');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
};

module.exports = () => {
    const plugins = [withSvgr];
     return plugins.reduce((acc, plugin) => plugin(acc), {...nextConfig});
};
