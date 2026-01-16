# 博客示例代码说明

## 📁 文件结构

```
my-blog/
├── index.html          # 博客首页
├── about.html          # 关于页面
├── post1.html          # 示例文章页面
├── css/
│   └── style.css       # 样式文件
└── js/
    └── script.js       # JavaScript 脚本
```

## 🚀 如何使用

### 方法一：直接在浏览器中打开

1. 下载或复制这个 `my-blog` 文件夹到你的电脑
2. 双击 `index.html` 文件
3. 文件会在你的浏览器中打开
4. 你可以点击链接浏览不同的页面

### 方法二：使用本地服务器（推荐）

如果你已经安装了 Python：

```bash
# 进入 my-blog 文件夹
cd my-blog

# Python 3
python -m http.server 8000

# 或者 Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器中访问 `http://localhost:8000`

如果你已经安装了 Node.js：

```bash
# 安装 http-server（只需要安装一次）
npm install -g http-server

# 进入 my-blog 文件夹并启动服务器
cd my-blog
http-server
```

然后在浏览器中访问显示的地址（通常是 `http://localhost:8080`）

## ✏️ 如何修改

### 修改个人信息

1. **修改博客标题**
   - 打开 `index.html`
   - 找到 `<h1 class="logo">我的博客</h1>`
   - 把"我的博客"改成你想要的名字

2. **修改关于页面**
   - 打开 `about.html`
   - 修改里面的个人介绍、兴趣爱好、联系方式等

3. **修改页脚**
   - 在每个 HTML 文件的底部找到 `<footer>` 标签
   - 修改里面的版权信息

### 修改颜色和样式

打开 `css/style.css`，找到对应的部分进行修改：

```css
/* 修改主题色 */
.navbar {
    background-color: #你的颜色代码;
}

.hero {
    background: linear-gradient(135deg, #颜色1 0%, #颜色2 100%);
}
```

**常用颜色代码：**
- 蓝色：#3498db
- 绿色：#2ecc71
- 红色：#e74c3c
- 紫色：#9b59b6
- 橙色：#e67e22

### 添加新文章

1. 复制 `post1.html` 文件
2. 重命名为 `post2.html`（或其他名字）
3. 打开并修改文章标题和内容
4. 在 `index.html` 中添加新文章的链接：

```html
<article class="post-card">
    <h4><a href="post2.html">你的新文章标题</a></h4>
    <p class="post-date">2024年1月20日</p>
    <p class="post-excerpt">
        文章简介...
    </p>
    <a href="post2.html" class="read-more">阅读更多 →</a>
</article>
```

## 🎨 功能特性

### 已实现的功能

- ✅ 响应式设计（支持手机、平板、电脑）
- ✅ 导航栏
- ✅ 文章列表
- ✅ 文章详情页
- ✅ 关于页面
- ✅ 平滑滚动
- ✅ 返回顶部按钮
- ✅ 阅读进度条（文章页面）
- ✅ 动画效果
- ✅ 现代化的设计

### 可以添加的功能

- [ ] 搜索功能
- [ ] 标签分类
- [ ] 评论系统
- [ ] 深色模式
- [ ] 文章分享
- [ ] 更多...

## 🌐 部署到网上

当你完成修改后，可以把博客发布到互联网上：

### 使用 GitHub Pages（免费）

1. 创建 GitHub 账号
2. 创建名为 `你的用户名.github.io` 的仓库
3. 上传所有文件
4. 访问 `https://你的用户名.github.io`

详细步骤请查看：[部署指南](../教程/部署指南.md)

## 📚 学习资源

- [HTML 教程](https://www.runoob.com/html/html-tutorial.html)
- [CSS 教程](https://www.runoob.com/css/css-tutorial.html)
- [JavaScript 教程](https://www.runoob.com/js/js-tutorial.html)
- [MDN Web 文档](https://developer.mozilla.org/zh-CN/)

## 💡 提示

- 修改代码后记得保存
- 如果浏览器没有显示更新，按 `Ctrl+F5`（Windows）或 `Cmd+Shift+R`（Mac）强制刷新
- 可以使用浏览器的开发者工具（按 `F12`）查看和调试代码
- 不要害怕尝试修改代码，坏了可以重新下载

## 🤝 需要帮助？

如果遇到问题：
1. 检查浏览器控制台是否有错误信息（按 F12）
2. 确认文件路径是否正确
3. 查看教程文档
4. 搜索错误信息

## 📝 版本历史

- v1.0 (2024-01-15) - 初始版本
  - 基础的博客功能
  - 响应式设计
  - 简洁美观的界面

祝你使用愉快！🎉
