// ==UserScript==
// @name         知乎回答右侧栏隐藏
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  隐藏/显示知乎的右边栏，并调整左边主栏宽度
// @author       https://constansino.serv00.net/
// @match        *://www.zhihu.com/question/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建按钮并设置样式
    const toggleButton = document.createElement('div');
    toggleButton.innerHTML = '<div style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: flex-end; background: linear-gradient(140.91deg, rgba(255, 135, 183, 0.5) 12.61%, rgba(236, 76, 140, 0.5) 76.89%); border-top-left-radius: 36px; border-bottom-left-radius: 36px; cursor: pointer; color: white; font-size: 12px; font-weight: bold;">右:开</div>';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '50%';
    toggleButton.style.right = '0';
    toggleButton.style.zIndex = '9999';
    toggleButton.style.margin = '0';
    toggleButton.style.padding = '0';
    document.body.appendChild(toggleButton);

    // 定义一个变量来跟踪右边栏的状态
    let isSidebarHidden = true; // 默认右边栏为隐藏状态

    // 获取右边栏和主栏元素
    const getRightSidebar = () => document.querySelector('div.Question-sideColumn');
    const getMainColumn = () => document.querySelector('div.Question-mainColumn');

    // 初始化右边栏状态
    function initializeSidebar() {
        const sidebar = getRightSidebar();
        const main = getMainColumn();
        if (sidebar && main) {
            sidebar.style.display = 'none';  // 隐藏右边栏
            main.style.width = '100%';        // 将左边主栏宽度设置为 100%
        }
    }

    // 定义一个函数来切换右边栏的显示状态
    function toggleRightSidebar() {
        const sidebar = getRightSidebar();
        const main = getMainColumn();
        if (sidebar && main) {
            isSidebarHidden = !isSidebarHidden;

            if (isSidebarHidden) {
                sidebar.style.display = 'none';  // 隐藏右边栏
                main.style.width = '100%';       // 将左边主栏宽度设置为 100%
                toggleButton.firstChild.textContent = '右:开';  // 更新按钮文本
            } else {
                sidebar.style.display = '';       // 显示右边栏
                main.style.width = '';            // 重置左边主栏宽度
                toggleButton.firstChild.textContent = '右:关';  // 更新按钮文本
            }
        }
    }

    // 点击按钮时切换右边栏的显示状态
    toggleButton.addEventListener('click', toggleRightSidebar);

    // 初始化右边栏状态
    initializeSidebar();

    // 监测DOM变化，以便在展开回答后保持右边栏隐藏状态
    const observer = new MutationObserver(() => {
        const sidebar = getRightSidebar();
        const main = getMainColumn();

        // 确保右边栏保持隐藏
        if (sidebar && main && isSidebarHidden) {
            sidebar.style.display = 'none'; // 确保右边栏隐藏
            main.style.width = '100%';       // 确保左边主栏宽度为 100%
        }

        // 监听点击事件以隐藏右边栏
        const viewAllButtons = document.querySelectorAll('div.Card.ViewAll a.ViewAll-QuestionMainAction');
        viewAllButtons.forEach(button => {
            button.removeEventListener('click', handleViewAllClick); // 移除之前的事件监听器
            button.addEventListener('click', handleViewAllClick); // 添加新的事件监听器
        });
    });

    // 点击“查看全部”按钮的处理函数
    function handleViewAllClick() {
        const sidebar = getRightSidebar();
        const main = getMainColumn();
        if (sidebar && main) {
            sidebar.style.display = 'none'; // 确保右边栏隐藏
            main.style.width = '100%';       // 确保左边主栏宽度为 100%
        }
    }

    observer.observe(document.body, { childList: true, subtree: true });
})();