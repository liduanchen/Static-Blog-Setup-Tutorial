# HTML 静态博客教程 - 从零开始

## 介绍

这个教程将教你用最基础的方式创建一个博客网站。你会学到：
- HTML（网页结构）
- CSS（网页样式）
- JavaScript（网页交互）

完成后，你将拥有一个完全属于自己的博客！

## 第一步：创建项目文件夹

1. 在你的电脑上创建一个文件夹，比如叫 `my-blog`
2. 在这个文件夹里，我们会创建以下文件：
```
my-blog/
├── index.html          (首页)
├── about.html          (关于页面)
├── post1.html          (文章1)
├── css/
│   └── style.css       (样式文件)
└── js/
    └── script.js       (脚本文件)
```

## 第二步：创建首页 (index.html)

打开文本编辑器，创建一个新文件，保存为 `index.html`，输入以下内容：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的个人博客</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- 导航栏 -->
    <nav class="navbar">
        <div class="container">
            <h1 class="logo">我的博客</h1>
            <ul class="nav-links">
                <li><a href="index.html">首页</a></li>
                <li><a href="about.html">关于我</a></li>
            </ul>
        </div>
    </nav>

    <!-- 主要内容 -->
    <main class="container">
        <section class="hero">
            <h2>欢迎来到我的博客！</h2>
            <p>在这里，我分享我的想法、学习和生活。</p>
        </section>

        <!-- 文章列表 -->
        <section class="posts">
            <h3>最新文章</h3>
            
            <article class="post-card">
                <h4><a href="post1.html">我的第一篇博客文章</a></h4>
                <p class="post-date">2024年1月15日</p>
                <p class="post-excerpt">
                    这是我的第一篇博客文章，我很高兴能够搭建自己的博客网站...
                </p>
                <a href="post1.html" class="read-more">阅读更多 →</a>
            </article>

            <article class="post-card">
                <h4><a href="#">如何开始学习编程</a></h4>
                <p class="post-date">2024年1月10日</p>
                <p class="post-excerpt">
                    编程看起来很难，但其实入门并不复杂。让我分享一些学习经验...
                </p>
                <a href="#" class="read-more">阅读更多 →</a>
            </article>
        </section>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 我的博客. 保留所有权利。</p>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

### HTML 代码解释

让我解释一下这些代码的含义：

- `<!DOCTYPE html>` - 告诉浏览器这是 HTML5 文档
- `<html lang="zh-CN">` - HTML 的开始标签，指定语言为中文
- `<head>` - 头部信息，包含标题、样式等
- `<body>` - 网页的可见内容
- `<nav>` - 导航栏
- `<main>` - 主要内容
- `<article>` - 文章内容
- `<footer>` - 页脚

## 第三步：创建样式文件 (css/style.css)

创建 `css` 文件夹，然后在里面创建 `style.css` 文件：

```css
/* 基础样式重置 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
}

/* 容器 */
.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 导航栏 */
.navbar {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s;
}

.nav-links a:hover {
    opacity: 0.8;
}

/* 主要内容区域 */
main {
    margin: 2rem auto;
    min-height: calc(100vh - 200px);
}

/* 欢迎区域 */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 3rem 2rem;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 2rem;
}

.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
}

/* 文章列表 */
.posts {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.posts h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #2c3e50;
}

/* 文章卡片 */
.post-card {
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
    transition: background-color 0.3s;
}

.post-card:last-child {
    border-bottom: none;
}

.post-card:hover {
    background-color: #f9f9f9;
}

.post-card h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.post-card h4 a {
    color: #2c3e50;
    text-decoration: none;
}

.post-card h4 a:hover {
    color: #667eea;
}

.post-date {
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.post-excerpt {
    color: #666;
    margin-bottom: 1rem;
}

.read-more {
    color: #667eea;
    text-decoration: none;
    font-weight: bold;
}

.read-more:hover {
    text-decoration: underline;
}

/* 页脚 */
.footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem 0;
    margin-top: 2rem;
}

/* 响应式设计 - 手机端 */
@media (max-width: 768px) {
    .navbar .container {
        flex-direction: column;
        gap: 1rem;
    }
    
    .hero h2 {
        font-size: 1.8rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
}
```

### CSS 代码解释

CSS 控制网页的外观：
- `color` - 文字颜色
- `background-color` - 背景颜色
- `padding` - 内边距
- `margin` - 外边距
- `font-size` - 字体大小
- `border-radius` - 圆角

## 第四步：创建文章页面 (post1.html)

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一篇博客文章 - 我的博客</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .article-header {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            margin-bottom: 2rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .article-title {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        
        .article-meta {
            color: #999;
            margin-bottom: 1rem;
        }
        
        .article-content {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            line-height: 1.8;
        }
        
        .article-content p {
            margin-bottom: 1rem;
        }
        
        .article-content h3 {
            color: #2c3e50;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        
        .back-link {
            display: inline-block;
            margin-bottom: 1rem;
            color: #667eea;
            text-decoration: none;
        }
        
        .back-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <h1 class="logo">我的博客</h1>
            <ul class="nav-links">
                <li><a href="index.html">首页</a></li>
                <li><a href="about.html">关于我</a></li>
            </ul>
        </div>
    </nav>

    <main class="container">
        <a href="index.html" class="back-link">← 返回首页</a>
        
        <article class="article-header">
            <h1 class="article-title">我的第一篇博客文章</h1>
            <div class="article-meta">
                发布于 2024年1月15日 · 作者：我
            </div>
        </article>

        <div class="article-content">
            <p>
                你好！欢迎来到我的第一篇博客文章。今天我要分享我搭建这个博客的经历。
            </p>

            <h3>为什么要搭建博客？</h3>
            <p>
                我一直想有一个自己的空间，可以记录学习过程、分享想法。经过一段时间的学习，
                我终于搭建起了这个博客。虽然它现在还很简单，但这是一个开始！
            </p>

            <h3>学到了什么？</h3>
            <p>
                在搭建博客的过程中，我学习了：
            </p>
            <ul>
                <li>HTML - 用于创建网页结构</li>
                <li>CSS - 用于美化网页</li>
                <li>Git - 用于管理代码</li>
                <li>GitHub Pages - 用于免费托管网站</li>
            </ul>

            <h3>遇到的挑战</h3>
            <p>
                刚开始的时候，我对 HTML 和 CSS 完全不了解。但通过不断学习和实践，
                我慢慢掌握了基础知识。最大的收获是：不要害怕犯错，每一次错误都是学习的机会。
            </p>

            <h3>下一步计划</h3>
            <p>
                接下来，我计划：
            </p>
            <ul>
                <li>学习更多的 JavaScript，让网站更有交互性</li>
                <li>添加评论功能，与读者互动</li>
                <li>持续分享我的学习笔记</li>
                <li>优化网站的设计和用户体验</li>
            </ul>

            <h3>给新手的建议</h3>
            <p>
                如果你也想搭建自己的博客，我的建议是：
            </p>
            <ul>
                <li>从简单开始，不要追求完美</li>
                <li>遇到问题多搜索，答案就在互联网上</li>
                <li>动手实践比看一百个教程都重要</li>
                <li>保持耐心，一步一步来</li>
            </ul>

            <p>
                谢谢你阅读我的第一篇文章！希望我的经历能给你一些启发。
                如果你有任何问题或建议，欢迎在下面留言！
            </p>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 我的博客. 保留所有权利。</p>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

## 第五步：创建关于页面 (about.html)

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>关于我 - 我的博客</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .about-section {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }
        
        .about-section h2 {
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        
        .about-section p {
            line-height: 1.8;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <h1 class="logo">我的博客</h1>
            <ul class="nav-links">
                <li><a href="index.html">首页</a></li>
                <li><a href="about.html">关于我</a></li>
            </ul>
        </div>
    </nav>

    <main class="container">
        <div class="about-section">
            <h2>关于我</h2>
            <p>
                你好！我是一名对技术充满热情的学习者。我创建这个博客是为了记录我的学习旅程，
                分享我的想法和经验。
            </p>
            <p>
                我相信通过分享和交流，我们可以共同成长。如果你对我的文章有任何想法或建议，
                欢迎通过邮件联系我。
            </p>
        </div>

        <div class="about-section">
            <h2>联系方式</h2>
            <p>邮箱：your.email@example.com</p>
            <p>GitHub：https://github.com/你的用户名</p>
        </div>

        <div class="about-section">
            <h2>关于这个博客</h2>
            <p>
                这个博客使用纯 HTML、CSS 和 JavaScript 搭建，托管在 GitHub Pages 上。
                代码完全开源，你可以在我的 GitHub 仓库中查看。
            </p>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 我的博客. 保留所有权利。</p>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

## 第六步：添加 JavaScript (js/script.js)

创建 `js` 文件夹，然后在里面创建 `script.js` 文件：

```javascript
// 当页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('博客已加载完成！');
    
    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 为文章卡片添加点击动画
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果点击的不是链接，则添加动画效果
            if (e.target.tagName !== 'A') {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            }
        });
    });
    
    // 显示欢迎消息（仅在首页）
    if (document.querySelector('.hero')) {
        console.log('欢迎来到我的博客！');
    }
});

// 添加返回顶部功能（可选）
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
```

## 第七步：在浏览器中查看

1. 打开你的文件管理器
2. 找到 `my-blog` 文件夹
3. 双击 `index.html` 文件
4. 它会在你的默认浏览器中打开

恭喜！你的第一个博客网站已经完成了！

## 第八步：添加更多文章

要添加新文章，只需：
1. 复制 `post1.html`
2. 重命名为 `post2.html`
3. 修改里面的内容
4. 在 `index.html` 中添加新文章的链接

## 下一步

现在你已经有了一个基本的博客，可以：
1. 学习更多 CSS 来美化你的博客
2. 添加更多功能（搜索、标签等）
3. 查看[部署指南](./部署指南.md)，把博客发布到互联网上

## 常见问题

**Q: 我修改了代码但看不到变化？**
A: 按 Ctrl+F5（Windows）或 Cmd+Shift+R（Mac）强制刷新浏览器

**Q: 样式没有生效？**
A: 检查 CSS 文件路径是否正确，确保 `css` 文件夹和 `style.css` 文件都存在

**Q: 我想改变颜色怎么办？**
A: 在 `style.css` 中找到对应的 `color` 或 `background-color` 属性，修改颜色值即可

## 资源推荐

- [MDN Web 文档](https://developer.mozilla.org/zh-CN/) - 最权威的 Web 技术文档
- [菜鸟教程](https://www.runoob.com/) - 中文的编程教程
- [W3School](https://www.w3school.com.cn/) - HTML/CSS/JavaScript 教程

继续加油！🎉
