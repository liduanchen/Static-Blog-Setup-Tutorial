/**
 * 主页面 JavaScript
 * 负责加载和显示文章列表
 */

// 文章数据文件路径
const ARTICLES_DATA_PATH = 'data/articles.json';

/**
 * 初始化页面
 */
document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
});

/**
 * 加载文章列表
 */
async function loadArticles() {
    try {
        const response = await fetch(ARTICLES_DATA_PATH);
        
        if (!response.ok) {
            throw new Error('无法加载文章数据');
        }
        
        const articles = await response.json();
        
        // 按日期降序排序
        articles.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        displayArticles(articles);
    } catch (error) {
        console.error('加载文章失败:', error);
        displayError('抱歉，文章加载失败。请稍后再试。');
    }
}

/**
 * 显示文章列表
 * @param {Array} articles - 文章数组
 */
function displayArticles(articles) {
    const container = document.getElementById('articles-container');
    
    if (!articles || articles.length === 0) {
        container.innerHTML = '<p class="loading">暂无文章</p>';
        return;
    }
    
    // 清空容器
    container.innerHTML = '';
    
    // 生成文章卡片
    articles.forEach((article, index) => {
        const articleCard = createArticleCard(article, index);
        container.appendChild(articleCard);
    });
}

/**
 * 创建文章卡片元素
 * @param {Object} article - 文章对象
 * @param {number} index - 索引
 * @returns {HTMLElement} 文章卡片元素
 */
function createArticleCard(article, index) {
    const card = document.createElement('article');
    card.className = 'article-card';
    
    // 格式化日期
    const formattedDate = formatDate(article.date);
    
    // 创建标签 HTML
    const tagsHtml = article.tags && article.tags.length > 0
        ? `<div class="article-card-tags">
            ${article.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
           </div>`
        : '';
    
    card.innerHTML = `
        <h2 class="article-card-title">
            <a href="article.html?id=${article.id}">${escapeHtml(article.title)}</a>
        </h2>
        <div class="article-card-meta">
            <span class="meta-date">${formattedDate}</span>
            <span class="meta-divider">·</span>
            <span class="meta-author">${escapeHtml(article.author)}</span>
        </div>
        <p class="article-card-summary">${escapeHtml(article.summary)}</p>
        ${tagsHtml}
    `;
    
    return card;
}

/**
 * 显示错误信息
 * @param {string} message - 错误消息
 */
function displayError(message) {
    const container = document.getElementById('articles-container');
    container.innerHTML = `<p class="loading" style="color: var(--color-text-light);">${escapeHtml(message)}</p>`;
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
