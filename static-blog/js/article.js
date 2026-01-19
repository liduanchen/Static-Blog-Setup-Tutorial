/**
 * 文章详情页 JavaScript
 * 负责加载和显示文章内容
 */

// 文章数据文件路径
const ARTICLES_DATA_PATH = 'data/articles.json';

/**
 * 初始化页面
 */
document.addEventListener('DOMContentLoaded', function() {
    const articleId = getArticleIdFromUrl();
    
    if (!articleId) {
        displayError('文章 ID 不存在');
        return;
    }
    
    loadArticle(articleId);
});

/**
 * 从 URL 获取文章 ID
 * @returns {string|null} 文章 ID
 */
function getArticleIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

/**
 * 加载文章数据
 * @param {string} articleId - 文章 ID
 */
async function loadArticle(articleId) {
    try {
        const response = await fetch(ARTICLES_DATA_PATH);
        
        if (!response.ok) {
            throw new Error('无法加载文章数据');
        }
        
        const articles = await response.json();
        const article = articles.find(a => a.id === articleId);
        
        if (!article) {
            displayError('文章不存在');
            return;
        }
        
        // 显示文章元数据
        displayArticleMeta(article);
        
        // 加载文章内容
        loadArticleContent(article);
        
    } catch (error) {
        console.error('加载文章失败:', error);
        displayError('抱歉，文章加载失败。请稍后再试。');
    }
}

/**
 * 显示文章元数据（标题、日期、作者等）
 * @param {Object} article - 文章对象
 */
function displayArticleMeta(article) {
    // 更新页面标题
    document.title = `${article.title} - 个人博客`;
    
    // 显示文章标题
    const titleElement = document.getElementById('article-title');
    titleElement.textContent = article.title;
    
    // 显示文章元信息
    const metaElement = document.getElementById('article-meta');
    const formattedDate = formatDate(article.date);
    
    const tagsHtml = article.tags && article.tags.length > 0
        ? article.tags.map(tag => `#${escapeHtml(tag)}`).join(' ')
        : '无标签';
    
    metaElement.innerHTML = `
        <span class="meta-date">${formattedDate}</span>
        <span class="meta-divider">·</span>
        <span class="meta-author">${escapeHtml(article.author)}</span>
        <span class="meta-divider">·</span>
        <span class="meta-tags">${tagsHtml}</span>
    `;
}

/**
 * 加载文章内容
 * @param {Object} article - 文章对象
 */
async function loadArticleContent(article) {
    const contentElement = document.getElementById('article-content');
    
    try {
        const response = await fetch(article.contentFile);
        
        if (!response.ok) {
            throw new Error('无法加载文章内容');
        }
        
        const content = await response.text();
        
        // 显示内容
        contentElement.innerHTML = content;
        
        // 添加平滑滚动效果
        addSmoothScrolling();
        
    } catch (error) {
        console.error('加载文章内容失败:', error);
        contentElement.innerHTML = '<p class="loading" style="color: var(--color-text-light);">抱歉，文章内容加载失败。</p>';
    }
}

/**
 * 显示错误信息
 * @param {string} message - 错误消息
 */
function displayError(message) {
    const titleElement = document.getElementById('article-title');
    const contentElement = document.getElementById('article-content');
    const metaElement = document.getElementById('article-meta');
    
    titleElement.textContent = '加载失败';
    metaElement.innerHTML = '';
    contentElement.innerHTML = `<p class="loading" style="color: var(--color-text-light);">${escapeHtml(message)}</p>`;
}

/**
 * 格式化日期
 * @param {string} dateString - ISO 日期字符串
 * @returns {string} 格式化的日期
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

/**
 * 转义 HTML 特殊字符，防止 XSS
 * @param {string} text - 要转义的文本
 * @returns {string} 转义后的文本
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * 添加平滑滚动效果
 */
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
