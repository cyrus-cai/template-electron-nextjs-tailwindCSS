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
  // 复制当前目录到新项目的目录
  // 复制模板项目到新项目的目录
  fs.copySync(
    path.join(__dirname, "template", "my-electron-next-tailwind-template"),
    path.join(__dirname, "..", projectName)
  );

  console.log(`Project created: ${projectName}`);
}
