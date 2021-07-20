/* rollup打包脚本
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2021-04-12 10:58:08
 * @LastEditTime: 2021-04-19 16:50:43
 * @LastEditors: 蔡远程
 */
//node
const fs = require('fs');
const path = require('path');
// rollup
import run from '@rollup/plugin-run';
import del from 'rollup-plugin-delete';
import { terser, } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve, } from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.ts']; // 需要解析的文件后缀名
const inputArr = ['index.ts']; //需要打包的文件夹
const blacklist = ['types', 'error-handle']; //无需打包的文件夹

function getBuildPath(directory, callback) {
    const fileArr = fs.readdirSync(directory);
    for (let i = 0, len = fileArr.length; i < len; i++) {
        const item = fileArr[i];

        if (blacklist.includes(item) || item.indexOf('_') === 0) continue;

        const filePath = `${directory}/${item}`;
        const stat = fs.lstatSync(filePath);

        if (!!stat.isDirectory()) {
            getBuildPath(filePath, callback);
        } else if (!!stat.isFile()) {
            callback(filePath);
        }
    }
}

getBuildPath('./src', (input)=>{
    inputArr.push(input);
});

const config = {
    production: {
        input: inputArr,
        output: [
            {
                dir: 'lib',
                format: 'cjs',
                exports: 'auto',
            },
            {
                dir: 'es',
                format: 'esm',
                exports: 'auto',
            }
        ],
        plugins: [
            del({ targets: ['lib/', 'es/'], }),
            nodeResolve({ extensions: extensions, }),
            typescript(),
            terser()
        ],
    },
    cdn: {
        input: 'index.ts',
        output: {
            file: 'cdn/index.js',
            format: 'umd',
            name: 'VantopUtil',
        },
        plugins: [
            del({ targets: ['cdn/'], }),
            nodeResolve({ extensions: extensions, }),
            typescript(),
            terser()
        ],
    },
    development: {
        input: 'index.ts',
        output: {
            file: 'lib/index.js',
            format: 'cjs',
        },
        plugins: [
            del({ targets: ['lib/', 'es/', 'cdn/'], }),
            nodeResolve({ extensions: extensions, }),
            typescript(),
            run()
        ],
    },
};

export default {
    ...config[process.env.NODE_ENV],
};
