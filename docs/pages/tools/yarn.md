---
autoGroup-5: Other
title: yarn.lock与package-lock.json互转
sidebarDepth: 2
date: 2020-08-18
categories:
- Tools
tags:
- Other
---

`npm install -g synp`

+ 1. yarn.lock => package-lock.json
```
yarn # be sure the node_modules folder dir and is updated
synp --source-file /path/to/yarn.lock
# will create /path/to/package-lock.json
```
转换生成package-lock.json后，删除node_models文件夹，然后用npm install   

+ 2. package-lock.json => yarn.lock
```
npm install # be sure the node_modules dir exists and is updated
synp --source-file /path/to/package-lock.json
# will create /path/to/yarn.lock
```
转换生成yarn.lock后，删除node_models文件夹，然后用yarn install  
