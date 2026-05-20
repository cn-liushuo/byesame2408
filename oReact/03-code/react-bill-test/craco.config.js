// 路径别名配置
// 1、安装 craco：npm install @craco/craco --save-dev
// 2、在项目根目录创建 craco.config.js 文件，添加以下内容：
// 3、修改 package.json 中的 start 和 build 命令
// 4、重启开发服务器
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};

// 联想路径配置
// 1、在项目根目录创建 jsconfig.json 文件，并添加以下内容：
// 2、重启开发服务器
// {
//   "compilerOptions": {