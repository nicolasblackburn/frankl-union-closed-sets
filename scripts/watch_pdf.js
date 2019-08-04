const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

fs.watchFile(path.resolve(__dirname, 'readme.md'), (stats) => {
    child_process.execSync('pandoc readme.md --latex-engine=xelatex -o union-closed-sets.pdf');
});