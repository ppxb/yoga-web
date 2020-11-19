git pull
yarn --registry=https://registry.npm.taobao.org/ && yarn build
docker exec -it idlex bash
nginx -s reload
exit