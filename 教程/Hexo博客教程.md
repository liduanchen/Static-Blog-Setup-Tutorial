# Hexo 博客教程 - 快速搭建

## 介绍

Hexo 是一个快速、简洁且高效的博客框架。它可以让你用 Markdown 写文章，然后自动生成静态网站。

**为什么选择 Hexo？**
- 用 Markdown 写文章，就像写 Word 文档一样简单
- 一个命令就能部署到网上
- 丰富的主题和插件
- 中文文档完善
- 完全免费

## 准备工作

在开始之前，你需要安装：
1. Node.js（JavaScript 运行环境）
2. Git（版本控制工具）

## 第一步：安装 Node.js

### Windows 用户

1. 访问 [Node.js 官网](https://nodejs.org/zh-cn/)
2. 下载 LTS（长期支持）版本
3. 运行安装程序，一路点击"下一步"
4. 安装完成后，打开命令提示符（CMD），输入：
```bash
node -v
npm -v
```
如果显示版本号，说明安装成功！

### Mac 用户

1. 打开终端
2. 推荐使用 Homebrew 安装：
```bash
brew install node
```

### Linux 用户

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# CentOS/Fedora
sudo yum install nodejs npm
```

## 第二步：安装 Git

### Windows 用户
1. 访问 [Git 官网](https://git-scm.com/)
2. 下载并安装
3. 安装时选择默认选项即可

### Mac 用户
```bash
brew install git
```

### Linux 用户
```bash
# Ubuntu/Debian
sudo apt install git

# CentOS/Fedora
sudo yum install git
```

验证安装：
```bash
git --version
```

## 第三步：安装 Hexo

打开命令行工具（Windows 用 CMD 或 PowerShell，Mac/Linux 用终端），输入：

```bash
npm install -g hexo-cli
```

等待安装完成（可能需要几分钟）。验证安装：

```bash
hexo version
```

如果显示版本信息，恭喜你，Hexo 安装成功！

## 第四步：创建博客

### 1. 创建博客文件夹

```bash
hexo init my-blog
cd my-blog
npm install
```

这会创建一个名为 `my-blog` 的文件夹，里面包含了博客的所有文件。

### 2. 文件夹结构

```
my-blog/
├── _config.yml         # 网站配置文件
├── package.json        # 应用程序信息
├── scaffolds/          # 文章模板
├── source/             # 资源文件夹（文章、图片等）
│   └── _posts/         # 博客文章存放位置
└── themes/             # 主题文件夹
```

### 3. 启动本地服务器

```bash
hexo server
```

或者简写：
```bash
hexo s
```

现在打开浏览器，访问 `http://localhost:4000`，你就能看到你的博客了！

**提示：** 按 `Ctrl + C` 可以停止服务器。

## 第五步：配置你的博客

打开 `_config.yml` 文件（用记事本或任何文本编辑器），修改以下内容：

```yaml
# 网站信息
title: 我的个人博客
subtitle: 记录学习与生活
description: 这是我的个人博客，分享技术和生活
keywords: 博客, 学习, 技术
author: 你的名字
language: zh-CN
timezone: Asia/Shanghai

# 网址
url: https://你的用户名.github.io
root: /
permalink: :year/:month/:day/:title/

# 主题
theme: landscape
```

**重要提示：** YAML 格式对空格很敏感，冒号后面必须有一个空格！

修改后保存，刷新浏览器就能看到变化。

## 第六步：写你的第一篇文章

### 1. 创建新文章

在命令行输入：

```bash
hexo new "我的第一篇文章"
```

这会在 `source/_posts/` 文件夹中创建一个新的 Markdown 文件。

### 2. 编辑文章

用文本编辑器打开刚创建的文件，你会看到：

```markdown
---
title: 我的第一篇文章
date: 2024-01-15 10:00:00
tags:
---
```

在下面写你的内容：

```markdown
---
title: 我的第一篇文章
date: 2024-01-15 10:00:00
tags: 
  - 博客
  - 学习
categories: 日常
---

## 前言

这是我的第一篇博客文章！我很激动能够搭建自己的博客。

## 我学到了什么

在搭建博客的过程中，我学习了：

1. 如何安装 Node.js 和 Hexo
2. 如何使用 Markdown 写文章
3. 如何部署博客到互联网

## 下一步计划

接下来我计划：
- 学习更多 Markdown 语法
- 美化博客主题
- 持续更新内容

希望能坚持写下去！

<!-- more -->

## 详细内容

这里可以写更详细的内容...
```

**Markdown 基础语法：**

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体文字**
*斜体文字*

- 列表项1
- 列表项2

1. 有序列表1
2. 有序列表2

[链接文字](https://网址)
![图片描述](图片地址)

> 引用文字

`行内代码`

​```
代码块
​```
```

### 3. 查看文章

保存文章后，回到命令行，重新启动服务器（如果已经在运行，按 `Ctrl+C` 停止，然后再次运行）：

```bash
hexo server
```

刷新浏览器，你就能看到新文章了！

## 第七步：选择和安装主题

Hexo 默认主题是 Landscape，但你可以更换其他主题。

### 推荐主题

1. **NexT** - 最流行，简洁优雅
   - [官网](https://theme-next.js.org/)
   - [GitHub](https://github.com/next-theme/hexo-theme-next)

2. **Fluid** - 现代化，功能丰富
   - [官网](https://hexo.fluid-dev.com/)
   - [GitHub](https://github.com/fluid-dev/hexo-theme-fluid)

3. **Butterfly** - 漂亮，动画效果好
   - [文档](https://butterfly.js.org/)
   - [GitHub](https://github.com/jerryc127/hexo-theme-butterfly)

### 安装 NexT 主题（示例）

1. 在博客根目录执行：

```bash
npm install hexo-theme-next
```

2. 修改 `_config.yml` 中的主题配置：

```yaml
theme: next
```

3. 重启服务器：

```bash
hexo clean
hexo server
```

4. 刷新浏览器查看新主题！

### 自定义主题

每个主题都有自己的配置文件，通常在 `themes/主题名称/_config.yml`。

你可以修改：
- 配色方案
- 侧边栏设置
- 菜单项
- 社交链接
- 等等...

查看主题的文档了解详细配置方法。

## 第八步：常用命令

```bash
# 创建新文章
hexo new "文章标题"

# 创建新页面
hexo new page "页面名称"

# 生成静态文件
hexo generate
# 简写：hexo g

# 启动本地服务器
hexo server
# 简写：hexo s

# 部署到网站
hexo deploy
# 简写：hexo d

# 清理缓存
hexo clean

# 生成并部署（组合命令）
hexo g -d
```

## 第九步：添加其他页面

### 创建"关于"页面

```bash
hexo new page about
```

这会在 `source/about/` 创建 `index.md` 文件。编辑它：

```markdown
---
title: 关于我
date: 2024-01-15
---

## 个人介绍

你好！我是...

## 联系方式

- 邮箱：your.email@example.com
- GitHub：https://github.com/yourusername
```

然后在 `_config.yml` 中添加菜单链接：

```yaml
menu:
  首页: /
  归档: /archives
  关于: /about
```

### 创建"标签"页面

```bash
hexo new page tags
```

编辑 `source/tags/index.md`：

```markdown
---
title: 标签
date: 2024-01-15
type: "tags"
---
```

### 创建"分类"页面

```bash
hexo new page categories
```

编辑 `source/categories/index.md`：

```markdown
---
title: 分类
date: 2024-01-15
type: "categories"
---
```

## 第十步：使用标签和分类

在文章的 Front-matter（开头部分）中添加：

```markdown
---
title: 文章标题
date: 2024-01-15
tags:
  - 标签1
  - 标签2
categories:
  - 分类名称
---
```

## 插件推荐

### 1. 搜索功能

```bash
npm install hexo-generator-search --save
```

### 2. 站点地图（有利于 SEO）

```bash
npm install hexo-generator-sitemap --save
```

### 3. RSS 订阅

```bash
npm install hexo-generator-feed --save
```

### 4. 文章字数统计

```bash
npm install hexo-wordcount --save
```

## 常见问题

### 1. 执行命令时出现错误

**解决方法：**
- 先执行 `hexo clean` 清理缓存
- 确保在博客根目录执行命令
- 检查 `_config.yml` 格式是否正确

### 2. 本地能看到文章，部署后看不到

**解决方法：**
- 执行 `hexo clean` 清理缓存
- 重新生成：`hexo g`
- 重新部署：`hexo d`

### 3. 主题显示不正常

**解决方法：**
- 检查主题是否正确安装
- 查看主题文档，确认配置正确
- 清理缓存后重新生成

### 4. 端口 4000 被占用

**解决方法：**
```bash
hexo server -p 5000
```
使用其他端口。

## 写作技巧

### 1. 使用摘要

在文章中添加 `<!-- more -->` 标记，前面的内容会显示在首页，后面的需要点击"阅读全文"才能看到。

### 2. 插入图片

将图片放在 `source/images/` 文件夹中（需要手动创建），然后在文章中引用：

```markdown
![图片描述](/images/图片名称.jpg)
```

### 3. 插入代码

使用三个反引号：

````markdown
```javascript
console.log('Hello World!');
```
````

### 4. 设置文章永久链接

在文章的 Front-matter 中添加：

```markdown
---
title: 文章标题
permalink: my-custom-url
---
```

## 下一步

现在你已经掌握了 Hexo 的基本使用，接下来：

1. 查看[部署指南](./部署指南.md)，把博客发布到互联网
2. 探索更多主题和插件
3. 学习更多 Markdown 语法
4. 开始持续写作！

## 资源推荐

- [Hexo 官方文档](https://hexo.io/zh-cn/docs/)
- [Markdown 教程](https://markdown.com.cn/)
- [Hexo 主题列表](https://hexo.io/themes/)
- [Hexo 插件列表](https://hexo.io/plugins/)

祝你写作愉快！✍️
