#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件
#npm run build
 
# 进入生成的文件夹

git add -A
git commit -m 'deploy'
git push github main
git push origin main:master
 
cd -