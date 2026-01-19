# 静态博客网站使用文档

## 项目简介

这是一个使用纯静态技术（HTML + CSS + JavaScript）搭建的个人博客网站。采用极简主义设计风格，注重留白和排版，使用柔和的中性色调，为读者提供优雅舒适的阅读体验。

### 核心特性

- ✅ **纯静态实现**：无需后端服务器和数据库
- ✅ **JSON 数据管理**：文章信息通过 JSON 文件管理，易于维护
- ✅ **动态加载**：使用 JavaScript 动态加载和展示文章
- ✅ **响应式设计**：完美支持桌面端和移动端
- ✅ **极简美学**：优雅的排版和配色，注重用户体验
- ✅ **易于部署**：可部署到 GitHub Pages、Netlify、Vercel 等平台
- ✅ **完全免费**：无需任何费用

## 项目结构

```
static-blog/
├── index.html              # 首页（文章列表）
├── article.html            # 文章详情页模板
├── archive.html            # 归档页面
├── about.html              # 关于页面
├── css/
│   └── style.css           # 样式文件
├── js/
│   ├── main.js             # 首页逻辑
│   ├── article.js          # 文章详情页逻辑
│   └── archive.js          # 归档页逻辑
├── data/
│   └── articles.json       # 文章元数据
├── articles/               # 文章内容目录
│   ├── first-blog-post.html
│   ├── minimalist-design.html
│   └── ...
└── assets/                 # 资源文件
    └── images/             # 图片资源
```

## 快速开始

### 1. 查看网站

直接在浏览器中打开 `index.html` 文件即可查看网站效果。

**推荐使用本地服务器：**

如果安装了 Python：
```bash
# 进入项目目录
cd static-blog

# Python 3
python -m http.server 8000

# 然后在浏览器访问 http://localhost:8000
```

如果安装了 Node.js：
```bash
# 安装 http-server（仅需一次）
npm install -g http-server

# 启动服务器
cd static-blog
http-server

# 然后在浏览器访问显示的地址
```

### 2. 浏览功能

- **首页**：展示所有文章的卡片列表
- **文章详情**：点击文章标题查看完整内容
- **归档**：按年份分组查看所有文章
- **关于**：博客和作者介绍

## 如何添加新文章

添加新文章非常简单，只需要两个步骤：

### 步骤 1：创建文章内容文件

在 `articles/` 目录下创建一个新的 HTML 文件，例如 `my-new-article.html`：

```html
<p>这是文章的第一段内容...</p>

<h2>一级标题</h2>
<p>更多内容...</p>

<h3>二级标题</h3>
<ul>
    <li>列表项 1</li>
    <li>列表项 2</li>
</ul>

<blockquote>
    这是一段引用文字。
</blockquote>
```

**支持的 HTML 标签：**
- `<p>` - 段落
- `<h2>`, `<h3>` - 标题
- `<ul>`, `<ol>`, `<li>` - 列表
- `<blockquote>` - 引用
- `<strong>`, `<em>` - 加粗、斜体
- `<a>` - 链接
- `<code>`, `<pre>` - 代码
- `<img>` - 图片

### 步骤 2：更新文章元数据

编辑 `data/articles.json` 文件，添加新文章的信息：

```json
{
  "id": "my-new-article",
  "title": "我的新文章标题",
  "date": "2024-01-20",
  "author": "博主",
  "summary": "这是文章的简短摘要，会显示在首页的文章卡片中。",
  "tags": ["标签1", "标签2"],
  "contentFile": "articles/my-new-article.html"
}
```

**字段说明：**
- `id`：文章唯一标识符，用于 URL，建议使用英文和连字符
- `title`：文章标题
- `date`：发布日期，格式为 YYYY-MM-DD
- `author`：作者名称
- `summary`：文章摘要，建议 100-150 字
- `tags`：文章标签数组
- `contentFile`：文章内容文件的路径

完成后刷新网站，新文章就会自动显示！

## 如何修改样式

### 修改配色方案

编辑 `css/style.css` 文件，在文件开头的 `:root` 部分修改颜色变量：

```css
:root {
    /* 修改这些颜色值 */
    --color-primary: #2c2c2c;        /* 主要文字颜色 */
    --color-accent: #8b7355;         /* 强调色 */
    --color-bg: #fafafa;             /* 背景色 */
    /* ... 更多颜色变量 */
}
```

### 修改字体

在 `:root` 中修改字体变量：

```css
:root {
    --font-sans: "你喜欢的字体", sans-serif;
    --font-serif: "你喜欢的字体", serif;
}
```

### 修改间距和大小

调整 `--spacing-*` 变量来改变整体的间距感：

```css
:root {
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    /* ... */
}
```

## 个性化设置

### 修改网站标题和信息

1. **修改首页标题**

编辑 `index.html`：
```html
<h1 class="page-title">你的标题</h1>
<p class="page-subtitle">你的副标题</p>
```

2. **修改导航栏品牌名**

在所有 HTML 文件中找到：
```html
<a href="index.html" class="brand-link">博客</a>
```
改为你想要的名称。

3. **修改关于页面**

编辑 `about.html`，修改个人介绍、兴趣爱好、联系方式等内容。

4. **修改页脚**

在所有 HTML 文件的 `<footer>` 部分修改版权信息：
```html
<p class="footer-text">&copy; 2024 你的名字. 你的座右铭</p>
```

### 添加自定义图片

1. 将图片放在 `assets/images/` 目录
2. 在文章内容中引用：
```html
<img src="../assets/images/your-image.jpg" alt="图片描述">
```

## 部署到互联网

### 方案一：GitHub Pages（推荐）

**优点**：免费、稳定、易用

**步骤：**

1. 在 GitHub 创建新仓库（例如：`my-blog`）

2. 将项目文件上传到仓库：
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/my-blog.git
git push -u origin main
```

3. 在仓库设置中启用 GitHub Pages：
   - 进入仓库的 Settings
   - 找到 Pages 选项
   - Source 选择 `main` 分支
   - 点击 Save

4. 访问 `https://你的用户名.github.io/my-blog`

### 方案二：Netlify

**优点**：部署简单、支持自定义域名

**步骤：**

1. 注册 [Netlify](https://www.netlify.com) 账号
2. 点击 "New site from Git"
3. 连接你的 GitHub 仓库
4. Netlify 会自动部署
5. 获得一个 `.netlify.app` 域名

### 方案三：Vercel

**优点**：速度快、支持自定义域名

**步骤：**

1. 注册 [Vercel](https://vercel.com) 账号
2. 导入 GitHub 仓库
3. Vercel 会自动部署
4. 获得一个 `.vercel.app` 域名

### 自定义域名（可选）

如果你有自己的域名，可以在部署平台的设置中添加自定义域名。

## 常见问题

### Q1: 文章不显示怎么办？

**A**: 检查以下几点：
1. `data/articles.json` 格式是否正确（使用 JSON 验证工具）
2. 文章内容文件路径是否正确
3. 浏览器控制台是否有错误信息（按 F12 查看）

### Q2: 如何修改文章？

**A**: 直接编辑对应的文章 HTML 文件即可，无需修改其他文件。

### Q3: 如何删除文章？

**A**: 
1. 从 `data/articles.json` 中删除对应的文章条目
2. （可选）删除 `articles/` 目录下的文章文件

### Q4: 样式修改后没有生效？

**A**: 
1. 清除浏览器缓存（Ctrl + Shift + Delete）
2. 强制刷新页面（Ctrl + F5）

### Q5: 如何添加评论功能？

**A**: 可以集成第三方评论服务：
- **Gitalk**：使用 GitHub Issues 作为评论系统
- **Disqus**：国外流行的评论系统
- **Valine**：轻量级评论系统

### Q6: 如何优化网站速度？

**A**: 
1. 压缩图片（使用 TinyPNG 等工具）
2. 压缩 CSS 和 JavaScript 文件
3. 使用 CDN 加速
4. 开启浏览器缓存

### Q7: 可以使用 Markdown 写文章吗？

**A**: 目前版本不直接支持 Markdown。可以：
1. 使用 Markdown 编辑器写作
2. 转换为 HTML
3. 粘贴到文章文件中

或者使用支持 Markdown 的静态博客生成器（如 Hexo、Hugo）。

## 进阶功能

### 添加搜索功能

可以使用 JavaScript 实现客户端搜索：

```javascript
function searchArticles(keyword) {
    // 从 JSON 中搜索匹配的文章
    // 显示搜索结果
}
```

### 添加标签筛选

根据标签筛选文章：

```javascript
function filterByTag(tag) {
    // 筛选包含该标签的文章
    // 更新显示
}
```

### 添加阅读统计

可以集成 Google Analytics 或其他统计服务。

### RSS 订阅

生成 `rss.xml` 文件，让读者可以订阅你的博客。

## 技术细节

### 浏览器兼容性

- Chrome（推荐）
- Firefox
- Safari
- Edge

支持现代浏览器的所有版本。

### 使用的技术

- **HTML5**：语义化标签
- **CSS3**：Flexbox、Grid、动画
- **JavaScript (ES6+)**：Fetch API、模板字符串、箭头函数

### 安全性

- 所有用户输入都进行了 HTML 转义，防止 XSS 攻击
- 使用 `textContent` 而非 `innerHTML` 处理用户数据
- 静态网站没有后端，天然避免了 SQL 注入等攻击

## 维护建议

1. **定期备份**：定期备份你的文章和网站文件
2. **版本控制**：使用 Git 管理代码
3. **持续更新**：定期发布新文章，保持博客活跃
4. **监控性能**：使用 Google PageSpeed Insights 检查性能
5. **收集反馈**：关注读者反馈，持续改进

## 学习资源

- **MDN Web Docs**：https://developer.mozilla.org/zh-CN/
- **CSS-Tricks**：https://css-tricks.com/
- **JavaScript.info**：https://javascript.info/
- **菜鸟教程**：https://www.runoob.com/

## 贡献与反馈

如果你在使用过程中遇到问题或有改进建议，欢迎：

1. 提交 Issue
2. 发起 Pull Request
3. 分享你的使用经验

## 许可证

本项目采用 MIT 许可证，你可以自由使用和修改。

## 致谢

感谢所有为开源社区做出贡献的开发者。

---

**开始创作吧！** 🚀

愿你在文字中找到乐趣，在代码中获得成长。
