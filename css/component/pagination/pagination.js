function updatePaginationDisplay() {
    const allItems = document.querySelectorAll('.pagination > li');
    const isSmallScreen = window.innerWidth < 767;

    if (isSmallScreen) {
        // 對於小螢幕，僅顯示前 5 個和最後 2 個 li
        allItems.forEach((item, index) => {
            if (index < 5 || index >= allItems.length - 2) {
                item.style.display = 'inline-block';
            } else {
                item.style.display = 'none';
            }
        });
    } else {
        // 對於大螢幕，顯示前 7 個和最後 2 個 li
        allItems.forEach((item, index) => {
            if (index < 7 || index >= allItems.length - 2) {
                item.style.display = 'inline-block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

// 初始化
//updatePaginationDisplay();

// 在視窗大小改變時更新顯示
//window.addEventListener('resize', updatePaginationDisplay);