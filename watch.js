const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

fs.watchFile(path.resolve(__dirname, 'union-closed-sets.md'), (stats) => {
    child_process.execSync('pandoc union-closed-sets.md -o union-closed-sets.pdf');
});