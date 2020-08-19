git pull
echo "更新utils"
cd src/utils
git pull
echo "更新components"
cd ../components/lj
git pull
echo '更新完成！git'
ping -n 3 127.0.0.1 >nul
