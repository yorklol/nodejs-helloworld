# 使用官方 Node.js 运行时作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制应用源代码
COPY server.js ./

# 暴露端口 3000
EXPOSE 3000

# 启动应用
CMD ["node", "server.js"]