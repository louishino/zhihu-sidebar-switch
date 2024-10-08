// ==UserScript==
// @name         知乎首页右侧栏隐藏
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  隐藏/显示知乎的右边栏，并调整左边主栏宽度
// @author       https://constansino.serv00.net/
// @match        *://www.zhihu.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建按钮并设置样式
    const toggleButton = document.createElement('div');
toggleButton.innerHTML = '<div style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: flex-end; background: linear-gradient(140.91deg, rgba(255, 135, 183, 0.5) 12.61%, rgba(236, 76, 140, 0.5) 76.89%); border-top-left-radius: 36px; border-bottom-left-radius: 36px; cursor: pointer; color: white; font-size: 12px; font-weight: bold;">右:开</div>';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '50%'; // 根据需要调整位置
toggleButton.style.right = '0';
toggleButton.style.zIndex = '9999';
toggleButton.style.margin = '0';
toggleButton.style.padding = '0';
document.body.appendChild(toggleButton);
    // 定义一个变量来跟踪右边栏的状态
    let isSidebarHidden = true; // 默认右边栏为隐藏状态

    // 获取右边栏和主栏元素
    const rightSidebar = document.querySelector('div.css-1qyytj7');
    const mainColumn = document.querySelector('div.Topstory-mainColumn');

    // 初始化右边栏状态
    if (rightSidebar && mainColumn) {
        rightSidebar.style.display = 'none';  // 隐藏右边栏
        mainColumn.style.width = '100%';  // 将左边主栏宽度设置为 100%
    }

    // 定义一个函数来切换右边栏的显示状态
    function toggleRightSidebar() {
        if (rightSidebar && mainColumn) {
            isSidebarHidden = !isSidebarHidden;

            if (isSidebarHidden) {
                rightSidebar.style.display = 'none';  // 隐藏右边栏
                mainColumn.style.width = '100%';  // 将左边主栏宽度设置为 100%
                toggleButton.firstChild.textContent = '右:关';  // 更新按钮文本
            } else {
                rightSidebar.style.display = '';  // 显示右边栏
                mainColumn.style.width = '';  // 重置左边主栏宽度
                toggleButton.firstChild.textContent = '右:开';  // 更新按钮文本
            }
        }
    }

    // 点击按钮时切换右边栏的显示状态
    toggleButton.addEventListener('click', toggleRightSidebar);
})();