const fs = require('fs');
const path = require('path');

function renameToJsx(filePath) {
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fs.readdirSync(filePath).forEach(file => {
        const subFilePath = path.join(filePath, file);
        renameToJsx(subFilePath);
      });
    } else if (stat.isFile() && path.extname(filePath) === '.js') {
      const newFilePath = path.join(path.dirname(filePath), path.basename(filePath, '.js') + '.jsx');
      fs.renameSync(filePath, newFilePath);
      console.log(`Renamed: ${path.basename(filePath)} to ${path.basename(newFilePath)}`);
    } else {
      console.log(`File "${path.basename(filePath)}" is not a .js file. Skipping...`);
    }
  } else {
    console.error(`File or directory "${filePath}" not found.`);
  }
}

// Usage: node rename_to_jsx.js "D:\react work\onewb_react\ONEWEB_VITE\src\components\shared"
const targetPath = process.argv[2];

if (!targetPath) {
  console.error('Usage: node rename_to_jsx.js <path>');
  process.exit(1);
}

renameToJsx(targetPath);
