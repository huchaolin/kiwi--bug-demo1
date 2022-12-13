## bug 描述

1. `src`的`index.tsx`中有中文，但执行 ` kiwi --extract src `提示'false, 没有发现可替换的文案'

2. 将`kiwi-clis": "1.0.24"`, 改为`kiwi-clis": "1.0.23"`重新安装后， 再次执行 `kiwi --extract src`， 能看到终端有打印提取中文的日志, 但首行仍会打印`false`
## bug 复现步骤

1. 开发者在 `./kiwi-config.json`中 换上自己的`baiduApiKey` (不影响bug复现，可先暂时跳过)

2. `nvm use 14`, node是`14.21.1` npm 是`6.14.7` (npm是用 nvm安装node时自带的版本)

3. `npm i`

4. 执行 `npm run kiwi_init` , 第一个提示输入y按回车, 第二个提示输入 `./i18n/lang`

5. 执行 `npm run kiwi_extract`， 会提示 `false
没有发现可替换的文案！`
