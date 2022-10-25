const test = require('./psd.js');
const fs = require('fs');

console.log('Starting...');

const elements = [];
// test.testPSD()
//     .then(function (psd) {
//         console.log('PSD read');
//
//         traversePSDNode(psd.tree())
//
//     });

const psd = test.testAGPSD()
console.log(psd);
traverseAGNode(psd);

console.log(elements);

function traverseAGNode(node) {
    if (node.canvas) {
        const imagePath = "./output/" + elements.length + ".png";
        fs.writeFileSync(imagePath, node.canvas.toBuffer());
        elements.push({
            type: node.type,
            name: node.name,
            position: {
                top: node.top,
                left: node.left,
                bottom: node.bottom,
                right: node.right
            },
            url: imagePath
        });
    }

    if (node.children) {
        node.children.forEach(function (node) {
            traverseAGNode(node);
        });
    }
}

function traversePSDNode(root) {
    if (!root.isGroup() && !root.isRoot()) {
        const imagePath = "./output/" + elements.length + ".png";
        root.saveAsPng(imagePath);
        elements.push({type: root.type, name: root.name, position: root.coords, url: imagePath});
    }

    if (root.hasChildren()) {
        root.children().forEach(function (node) {
            traversePSDNode(node);
        });
    }
}
