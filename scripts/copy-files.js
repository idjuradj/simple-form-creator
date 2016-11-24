import path from 'path';
import fs from 'fs';
import utils from 'nms-core-utils';

const rootDir = `${__dirname}/../`;
const buildDir = `${rootDir}/build`;
const packagePath = `${rootDir}/package.json`;
const files = [
    `${rootDir}/README.md`,
    `${rootDir}/LICENSE`,
];

function copyFile (path) {
    utils.writeFile(path, utils.readFile(path));
}

function createPackageFile () {
    const packageData = JSON.parse(utils.readFile(packagePath));
    delete packageData.scripts;
    delete packageData.devDependencies;
    utils.writeFile(`${buildDir}/package.json`, JSON.stringify(packageData, null, 2));
}

if (!utils.isDir(buildDir)) {
    utils.writeDir(buildDir);
}

files.map((file) => {
    copyFile(file);
});
createPackageFile();