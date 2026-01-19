/**
 * 归档页面 JavaScript
 * 负责按年份分组显示所有文章
 */

// 文章数据文件路径
const ARTICLES_DATA_PATH = 'data/articles.json';

/**
 * 初始化页面
 */
document.addEventListener('DOMContentLoaded', function() {
    loadArchive();
});

/**
 * 加载归档数据
 */
async function loadArchive() {
    try {
        const response = await fetch(ARTICLES_DATA_PATH);
        
        if (!response.ok) {
            throw new Error('无法加载文章数据');
        }
        
        const articles = await response.json();
        
        // 按日期降序排序
        articles.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        displayArchive(articles);
    } catch (error) {
        console.error('加载归档失败:', error);
        displayError('抱歉，归档加载失败。请稍后再试。');
    }
}

/**
 * 显示归档列表
 * @param {Array} articles - 文章数组
 */
function displayArchive(articles) {
    const container = document.getElementById('archive-container');
    
    if (!articles || articles.length === 0) {
        container.innerHTML = '<p class="loading">暂无文章</p>';
        return;
    }
    
    // 按年份分组
    const articlesByYear = groupArticlesByYear(articles);
    
    // 清空容器
    container.innerHTML = '';
    
    // 生成每年的归档
    const years = Object.keys(articlesByYear).sort((a, b) => b - a);
    
    years.forEach(year => {
        const yearSection = createYearSection(year, articlesByYear[year]);
        container.appendChild(yearSection);
    });
}

/**
 * 按年份分组文章
 * @param {Array} articles - 文章数组
 * @returns {Object} 按年份分组的文章对象
 */
function groupArticlesByYear(articles) {
    const grouped = {};
    
    articles.forEach(article => {
        const year = new Date(article.date).getFullYear();
        
        if (!grouped[year]) {
            grouped[year] = [];
        }
        
        grouped[year].push(article);
    });
    
    return grouped;
}

/**
 * 创建年份分区
 * @param {string} year - 年份
 * @param {Array} articles - 该年的文章数组
 * @returns {HTMLElement} 年份分区元素
 */
function createYearSection(year, articles) {
    const section = document.createElement('div');
    section.className = 'archive-year';
    
    const title = document.createElement('h2');
    title.className = 'archive-year-title';
    title.textContent = `${year} 年`;
    
    section.appendChild(title);
    
    // 添加该年的所有文章
    articles.forEach(article => {
        const item = createArchiveItem(article);
        section.appendChild(item);
    });
    
    return section;
}

/**
 * 创建归档条目
 * @param {Object} article - 文章对象
 * @returns {HTMLElement} 归档条目元素
 */
function createArchiveItem(article) {
    const item = document.createElement('div');
    item.className = 'archive-item';
    
    // 格式化日期（只显示月-日）
    const date = new Date(article.date);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${month}-${day}`;
    
    item.innerHTML = `
        <span class="archive-date">${formattedDate}</span>
        <div class="archive-title">
            <a href="article.html?id=${article.id}">${escapeHtml(article.title)}</a>
        </div>
    `;
    
    return item;
}

/**
 * 显示错误信息
 * @param {string} message - 错误消息
 */
function displayError(message) {
    const container = document.getElementById('archive-container');
    container.innerHTML = `<p class="loading" style="color: var(--color-text-light);">${escapeHtml(message)}</p>`;
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
