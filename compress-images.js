const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminSvgo = require('imagemin-svgo');

const outputFolder = "./src/assets/images/";

imagemin(['./src/assets/images uncompressed/*.{jpg,png}'], outputFolder, {
    use: [
        imageminWebp({quality: 85})
    ]
}).then(() => {
    console.log('WEBP Images created');
});



imagemin(['./src/assets/images uncompressed/*.png'], outputFolder, {
  use: [
    imageminPngquant({quality: [0.5, 0.6],speed: 3,strip: true})
  ]
}).then(() => {
    console.log('PNG Images optimized');
});



imagemin(['./src/assets/images uncompressed/*.jpg'], outputFolder, {
  use: [
    imageminJpegtran({progressive: true})
  ]
}).then(() => {
    console.log('JPG Images optimized');
});


imagemin(['./src/assets/images uncompressed/*.svg'], outputFolder, {
  use: [
    imageminSvgo({plugins: [{removeViewBox: false}]})
  ]
}).then(() => {
    console.log('SVG Images optimized');
});
