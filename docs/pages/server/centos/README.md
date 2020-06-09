---
title: centOS-v7服务器运行Node.js脚本爬取数据
date: 2020-05-20
isTimeLine: true
categories:
 - Server
tags:
 - Selenium
 - Node
---

:::tip
Selenium + Node + Chrome
:::

<!-- more -->

### 1. 安装 Selenium

`pip install selenium`

### 2. 安装 Chrome

因国内无法访问 Google，所以需要自己配置 yum 源，在目录 `/etc/yum.repos.d/` 下新建 `google-chrome.repo` 文件，

```
cd /etc/yum.repos.d/

vim google-chrome.repo
```

写入如下内容:

```
[google-chrome]
name=google-chrome
baseurl=http://dl.google.com/linux/chrome/rpm/stable/$basearch
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
```

然后执行

`yum -y install google-chrome-stable --nogpgcheck`

- 安装路径是：\opt\google\chrome

此时 chrome 安装成功！

### 3. 安装 chromedriver

去[ chromedriver 官网 ](https://sites.google.com/a/chromium.org/chromedriver/downloads)下载与 `chrome版本号` 对应的 `chromedriver`压缩包 ，解压后放在脚本所在目录下

```
[root@blog server]# ls
app.js  chromedriver_linux64.zip chromedriver  crawler.js
```

### 3. 运行脚本

#### 3.1 服务器终端模式

需要修改 google-chrome 文件

```
vim /opt/google/chrome/google-chrome  // vim打开文件，最后一行做如下修改：

- exec -a "$0" "$HERE/chrome" "$@" $HOME
+ exec -a "$0" "$HERE/chrome" "$@" --no-sandbox --headless $HOME
```

#### 3.2 服务器 GUI 模式

root 用户下，找到`/usr/share/applications/Google Chrome.desktop`，鼠标右键弹出菜单->属性->命令，

由原来的字符串`/usr/bin/google-chrome-stable %U`修改为：

`/usr/bin/google-chrome-stable %U --no-sandbox`

然后，把文件 Google Chrome.desktop 拷贝一份到桌面。

最后启动脚本即可。

爬虫示例：

```js

// 爬取万矿疫情数据  需注册账号并登陆才能爬取数据，官方Web API使用说明 :（ https://www.windquant.com/qntcloud/help/id-fdc2e335-7f50-4b63-b79c-07a2582cf15c 

）

const dataUrl = 'https://www.windquant.com/qntcloud/data/edb?userid=43a1bf78-8e78-48b7-bdff-65e041ffe268&indicators=S6274770,S6274772,S6274771,S6274773,S6274775,S6274778,S6274777,S6274776,S6274780,S6274782,S6274784&startdate=2020-01-20&enddate=2020-05-05'

function getHistorydata () {
    superagent.get(dataUrl)
      .then(res => {
        fs.writeFile(path.join(__dirname, './historyData.json'), res.text, err => {
          if (err) throw err;
          console.log('historyData.json写入成功');
        })
      })
      .catch(err => {
        throw err
      });
  }

 // 引入selenium 和 node nodeSchedule模块
const { Builder, By, Key, until } = require('selenium-webdriver')
const nodeSchedule = require('node-schedule')

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get(
      'https://www.windquant.com/cas/login?service=https%3A%2F%2Fwww.windquant.com%2Fqntcloud%2Flogin%2Fcas.go'
    )
    await driver.findElement(By.id('username')).sendKeys('万矿ID', Key.TAB)
    await driver.findElement(By.id('password')).sendKeys('密码', Key.RETURN)
    await driver.wait(until.titleIs('万矿-高端量化分析云平台-Wind'), 1000)
  } finally {
      // 每天的凌晨1点1分30秒触发
      nodeSchedule.scheduleJob('30 1 1 * * *', function () {
        getHistorydata();
      });
    })
  }
})();
```
