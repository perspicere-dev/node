const Jimp = require('jimp');

const addTextWatermarkToImage = async function(inputFile, outputFile, text) {
  const image = await Jimp.read(inputFile);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const textData = {
    text,
    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
    alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
  };

  image.print(font, 0, 0, textData, image.getWidth(), image.getHeight());
  await image.quality(100).writeAsync(outputFile);
};

addTextWatermarkToImage('./test.jpg', './test-with-watermark.jpg', 'XXX')

// const Jimp = require('jimp');

// const addTextWatermarkToImage = async function(inputFile, outputFile, text) {
//   const image = await Jimp.read(inputFile);
//   const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
//   image.print(font, 50, 50, text);
//   await image.quality(100).writeAsync(outputFile);
// };

// addTextWatermarkToImage('./test.jpg', './test-with-watermark.jpg', 'XXX')