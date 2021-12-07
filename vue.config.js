const path = require('path');
function resolve(dir) {
    return path.join(__dirname,dir);
}
module.exports = {
    chainWebpack:(config)=>{
        config.resolve.alias
            .set( 'src', resolve('src'))
            .set( 'styles', resolve('src/assets/styles'))
            .set( 'images', resolve('src/assets/images'))
            .set( 'css', resolve('src/assets/css'))
            .set( 'components', resolve('src/components'))
            .set( 'views', resolve('src/views'))
    }
}
