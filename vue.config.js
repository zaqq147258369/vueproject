const path = require('path');
function resolve(dir) {
    return path.join(__dirname,dir);
}
module.exports = {
    chainWebpack:(config)=>{
        config.resolve.alias
            .set( 'styles', resolve('@/assets/styles'))
            .set( 'images', resolve('@/assets/images'))
            .set( 'css', resolve('@/assets/css'))
            .set( 'components', resolve('@/components'))
            .set( 'views', resolve('@/views'))
    }
}
