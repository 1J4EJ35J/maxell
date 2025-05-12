// 初始化時檢查，並確保在 767px 以下時添加 'mobile', 'changed'
function handleResponsiveTable() {
  const tables = document.querySelectorAll('.table.style-1');

  tables.forEach(table => {
      if (window.innerWidth < 767) {
          if (!table.classList.contains('mobile')) {
              table.classList.add('mobile', 'changed');
          }
      } else if (window.innerWidth >= 768) {
          if (table.classList.contains('mobile')) {
              table.classList.remove('mobile', 'changed');
          }
      }
  });
}

// 確保在 DOMContentLoaded 時檢查並添加 class
window.addEventListener('DOMContentLoaded', handleResponsiveTable);

// 螢幕尺寸變化時重新檢查
window.addEventListener('resize', handleResponsiveTable);