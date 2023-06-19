#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

// 获取命令行参数
const args = process.argv.slice(2);

let projectName = '';

// Check for '--' pattern and extract project name
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    // If project name is immediately following '--'
    if (args[i].length > 2) {
      projectName = args[i].slice(2);
    }
    // If project name is the next argument
    else if (i < args.length - 1) {
      projectName = args[i + 1];
    }
    break;
  }
}

if (!projectName) {
  console.error("Command must be in the format: 'command --projectname' or 'command -- projectname'");
  process.exit(1);
}

const templateDir = path.join(__dirname, 'template');

createProject(projectName);

function createProject(projectName) {
  fs.copySync(templateDir, path.join(process.cwd(), projectName), {
    filter: (src) => {
      // 忽略 node_modules 文件夹
      return !src.includes('node_modules');
    }
  });

  console.log(`Project created: ${projectName}`);
}
