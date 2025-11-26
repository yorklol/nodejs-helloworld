// server.js
const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // 返回 Hello World 响应
  res.end('Hello, World!\n');
});

// 监听端口
const PORT = 3000;
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${PORT}/`);
});
