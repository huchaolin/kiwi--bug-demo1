## bug 描述
1. src的inde.js中有中文，但执行  kiwi --extract src 提示没有发现可替换的文案

## bug 复现步骤

1. 开发者在 ./kiwi-config.json中 换上自己的baiduApiKey

2. nvm use 14, node是14.21.1 npm 是6.14.7 (npm是用 nvm安装node时自带的版本)

3. npm i 

4. 执行 `npm run kiwi_init` , 第一个提示输入y按回车, 第二个提示输入 `./i18n/lang`

5. 执行 `npm run kiwi_extract`， 会提示 `false
没有发现可替换的文案！`
