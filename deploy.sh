#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
#git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:TienOUC/vuepress.git master:gh-pages

cd -


# #!/usr/bin/env sh

# # 确保脚本抛出遇到的错误
# set -e

# # 生成静态文件
# yarn
# echo "module.exports={clientId: '${appID}',clientSecret: '${appKey}'}" > github_src/.vuepress/config/secret.js
# yarn github:build

# # 进入生成的文件夹
# cd github_src/.vuepress/dist

# # Deploy to GitHub
# if [ -z "$GITHUB_TOKEN" ]; then
#   msg='deploy'
#   githubUrl=git@github.com:qcyblm/qcyblm.github.io.git
# else
#   msg='来自GitHub Action的自动部署'
#   githubUrl=https://qcyblm:${GITHUB_TOKEN}@github.com/qcyblm/qcyblm.github.io.git
#   git config --global user.name "qcyblm"
#   git config --global user.email "${GITHUB_EMAIL}"
# fi
# git init
# git add -A
# git commit -m "${msg}：$(TZ="Asia/Shanghai" date +"%Y-%m-%d %T %Z")"
# git push -f $githubUrl master:gh-pages # 推送到github

# cd -
