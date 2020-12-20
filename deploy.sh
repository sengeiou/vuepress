#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn
echo "module.exports={clientId: '${VSSUE_CLIENTID}',clientSecret: '${VUSSE_CLIENTSECRET}',}" > docs/.vuepress/config/secret.js
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# <--Deploy to GitHub
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:TienOUC/vuepress.git
else
  msg='GitHub Action CI/CD'
  # githubUrl=https://TienOUC:${GITHUB_TOKEN}@TienOUC.com/TienOUC/vuepress.git
fi
git init
git add -A
git commit -m "${msg}：$(TZ="Asia/Beijing" date +"%Y-%m-%d %T %Z")"
# git push -f $githubUrl master:gh-pages
git push -f git@github.com:TienOUC/vuepress.git master:gh-pages
#-->

# 如果发布到 https://<USERNAME>.github.io
#git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:TienOUC/vuepress.git master:gh-pages

cd -
