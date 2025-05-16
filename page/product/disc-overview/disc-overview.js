console.log('草莓鮮奶茶')
document.addEventListener('DOMContentLoaded', function () {
    // 為每個 .card-container 加入點擊事件
    document.querySelectorAll('.card-container').forEach(container => {
        container.addEventListener('click', function (event) {
            // 檢查點擊目標是否是 .close，避免誤觸
            if (event.target.closest('.close')) return;

            const popup = this.querySelector('.popup.style-1');
            if (popup) {
                popup.classList.add('active');
                // 觸發 proportional-tool.js 的功能
            if (typeof adjustToolHeights === 'function') {
                adjustToolHeights("ratio25x36");
                adjustToolHeights("ratio1x1");
                adjustToolHeights("ratio1x2");
            }
            }
        });
    });

    // 為所有 .close 按鈕加上點擊事件
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('close')) {
            const popup = event.target.closest('.popup.style-1.active');
            if (popup) {
                popup.classList.remove('active');
            }
        }
    });

    
});