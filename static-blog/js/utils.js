/**
 * 共享工具函数
 * 提供跨页面使用的通用功能
 */

// 配置常量
export const ARTICLES_DATA_PATH = 'data/articles.json';

/**
 * 格式化日期
 * @param {string} dateString - ISO 日期字符串 (YYYY-MM-DD)
 * @returns {string} 格式化的日期 (YYYY年MM月DD日)
 */
export function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

/**
 * 转义 HTML 特殊字符，防止 XSS 攻击
 * @param {string} text - 要转义的文本
 * @returns {string} 转义后的文本
 */
export function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * 显示错误信息
 * @param {HTMLElement} container - 容器元素
 * @param {string} message - 错误消息
 */
export function displayError(container, message) {
    if (container) {
        container.innerHTML = `<p class="loading" style="color: var(--color-text-light);">${escapeHtml(message)}</p>`;
    }
}

/**
 * 加载 JSON 数据
 * @param {string} url - JSON 文件路径
 * @returns {Promise<any>} JSON 数据
 */
export async function loadJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`无法加载数据: ${response.statusText}`);
    }
    return await response.json();
}
