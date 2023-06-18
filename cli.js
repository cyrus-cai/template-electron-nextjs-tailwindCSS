#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);

// 获取新项目的名称
const projectName = args[0];

// 确保项目名称已提供
if (!projectName) {
    console.error('Please provide a project name.');
    process.exit(1);
}

// 复制当前目录到新项目的目录
fs.copySync(__dirname, path.join(__dirname, '..', projectName), {
    filter: (src) => {
        // 忽略 cli.js 文件
        return path.basename(src) !== 'cli.js';
    }
});

console.log(`Project created: ${projectName}`);
