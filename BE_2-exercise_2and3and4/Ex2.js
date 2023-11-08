const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);
const readdir = promisify(fs.readdir);
const mkdir = promisify(fs.mkdir);

async function copyFilesWithExtensions(sourceDir, targetDir, extensions) {
  try {

    await mkdir(targetDir, { recursive: true });

    const files = await readdir(sourceDir);

    const filteredFiles = files.filter((file) => {
      const fileExtension = path.extname(file);
      return extensions.includes(fileExtension);
    });

    for (const file of filteredFiles) {
      const sourceFilePath = path.join(sourceDir, file);
      const targetFilePath = path.join(targetDir, file);
      await copyFile(sourceFilePath, targetFilePath);
      console.log(`Copied: ${file}`);
    }

    console.log('Files copied successfully.');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

if (process.argv.length !== 4) {
  console.log('Usage: node Ex2.js <source-directory> <target-directory>');
  process.exit(1);
}

const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];

const fileExtensionsToCopy = ['.txt', '.jpg', '.csv', '.md', '.pptx']; 

copyFilesWithExtensions(sourceDirectory, targetDirectory, fileExtensionsToCopy);
