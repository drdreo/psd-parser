const PSD = require('psd');
const AG_PSD = require('ag-psd');
const fs  = require('fs');
require('ag-psd/initialize-canvas'); // only needed for reading image data and thumbnails

const TEST_PSD = './test.psd';

function testPSD() {
    console.log('opening psd...');
    // You can also use promises syntax for opening and parsing
    return PSD.open(TEST_PSD).catch(console.log);
    // .then(function (psd) {
    //     return psd.image.saveAsPng('./output.png');
    // })
    // .then(function () {
    //     console.log('Finished!');
    // });
}

function testAGPSD() {
    const buffer = fs.readFileSync(TEST_PSD);
    return AG_PSD.readPsd(buffer);
}


exports.testPSD = testPSD;
exports.testAGPSD = testAGPSD;
