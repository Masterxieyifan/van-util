###
 # @Descripttion: 版本更新脚本
 # @Author: 蔡远程
 # @Date: 2021-05-25 14:51:16
 # @LastEditTime: 2021-05-26 14:16:58
 # @LastEditors: 蔡远程
### 
VERSION_VALUE=$1
VERSION_MASTER="patch"
VERSION_PRERELEASE="alpha"
CURRENT_BRANCH=`git symbolic-ref --short -q HEAD`

if [ $VERSION_VALUE = $VERSION_MASTER ]
then
    npm version patch \
    && git fetch \
    && git checkout master \
    && git pull \
    && git merge develop \
    && git push \
    && git checkout develop

elif [ $VERSION_VALUE = $VERSION_PRERELEASE ]
then
    npm version prerelease --preid=alpha \
    && git fetch \
    && git checkout alpha \
    && git pull \
    && git merge $CURRENT_BRANCH \
    && git push \
    && git checkout $CURRENT_BRANCH
else
    echo "sorry! publish failed"
fi