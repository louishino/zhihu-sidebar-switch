# zhihu-sidebar-switch
给知乎添加一个隐藏/显示侧边栏的按钮 默认隐藏 增大可读面积
![image](https://github.com/user-attachments/assets/ceb18668-1a10-4577-9cd3-991b3724054a)
![image](https://github.com/user-attachments/assets/82af924b-ef2a-4084-93a3-eec394095b62)
![image](https://github.com/user-attachments/assets/6bf29c2d-f541-414f-8b47-62b0c137c2a7)
![image](https://github.com/user-attachments/assets/835889cc-cbb9-402e-8937-bcc5f4d4c9af)
浪费阅读空间且没得选可耻

复制下面两段到
tampermonkey.net油猴脚本


// ==UserScript==
// @name         Toggle Zhihu Right Sidebar
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  隐藏/显示知乎的右边栏，并调整左边主栏宽度
// @author       You
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




// ==UserScript==
// @name         Toggle Zhihu Right Sidebar
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  隐藏/显示知乎的右边栏，并调整左边主栏宽度
// @author       You
// @match        *://www.zhihu.com/question/*
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
    const rightSidebar = document.querySelector('div.Question-sideColumn');
    const mainColumn = document.querySelector('div.Question-mainColumn');

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
