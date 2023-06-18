#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const readline = require("readline");

// 获取命令行参数
const args = process.argv.slice(2);

// 获取新项目的名称
let projectName = args[0];

// 创建 readline.Interface 实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 确保项目名称已提供
if (!projectName) {
  rl.question("Please provide a project name: ", (answer) => {
    projectName = answer;
    createProject(projectName);
    rl.close();
  });
} else {
  createProject(projectName);
  rl.close();
}

function createProject(projectName) {
  fs.copySync(__dirname, path.join(process.cwd(), projectName), {
    filter: (src) => {
      // 忽略 cli.js 文件
      return path.basename(src) !== 'cli.js';
    }
  });


  console.log(`Project created: ${projectName}`);
}
