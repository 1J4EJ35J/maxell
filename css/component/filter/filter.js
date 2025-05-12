document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.querySelector('.filter-sheet .nav-top-btn-zone .filter-bt');
    const searchBtn = document.querySelector('.filter-sheet .nav-top-btn-zone .search-bt');
    const filterSheetWrapper = document.querySelector('.filter-sheet .filter-sheet-wrapper');
    const cancelBtn = document.querySelector('.filter-sheet-wrapper .cancel');
    const searchInput = document.querySelector('.search-bar.style-1 input');
  
    if (filterBtn && filterSheetWrapper) {
      filterBtn.addEventListener('click', function() {
        filterSheetWrapper.classList.add('active');
      });
    }
  
    if (cancelBtn && filterSheetWrapper) {
      cancelBtn.addEventListener('click', function() {
        filterSheetWrapper.classList.remove('active');
      });
    }
  
    if (searchBtn && filterSheetWrapper && searchInput) {
      searchBtn.addEventListener('click', function() {
        filterSheetWrapper.classList.add('active');
        searchInput.focus();
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.filter-sheet .filter-list .filter-item');
  
    filterItems.forEach(function(filterItem) {
      const titleBox = filterItem.querySelector('.title-box');
      if (titleBox) {
        titleBox.addEventListener('click', function() {
          filterItem.classList.toggle('active');
        });
      }
    });
  });