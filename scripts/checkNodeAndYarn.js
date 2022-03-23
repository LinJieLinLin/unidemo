const LOCK_NODE_VERSION = 'v14.17.6'

console.log('开始检查yarn以及node版本...\n')

if (!/yarn\.js$/.test(process.env.npm_execpath || '')) {
    console.warn('\u001b[33m 请使用yarn install命令安装依赖包! \u001b[39m\n')
    process.exit(1)
}

if (process.version !== LOCK_NODE_VERSION) {
    console.warn(
        `\u001b[33m 你当前NodeJS版本为${process.version}, 请手动通过nvm或n切换到${LOCK_NODE_VERSION}版本 \u001b[39m\n`,
    )
    process.exit(1)
}

console.log('版本检查通过！\n')
