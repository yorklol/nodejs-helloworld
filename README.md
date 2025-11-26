# README

## 构建和运行镜像

```shell
docker build -t nodejs-helloworld .
docker run -p 3000:3000 nodejs-helloworld
```

## 测试

```shell
# 打开新的命令行窗口
curl http://localhost:3000 # 返回Hello, World!
```
