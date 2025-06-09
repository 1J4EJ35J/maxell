document.querySelector('.dropdown-btn').addEventListener('click', function() {
  const tabZone = document.querySelector('.tab-zone');
  const dropdownBtn = this;

  // 切換 .tab-zone 的 active class
  if (tabZone.classList.contains('active')) {
    tabZone.classList.remove('active');
  } else {
    tabZone.classList.add('active');
  }

  // 切換 .dropdown-btn 的 active class
  if (dropdownBtn.classList.contains('active')) {
    dropdownBtn.classList.remove('active');
  } else {
    dropdownBtn.classList.add('active');
  }
});

document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', function () {
    // 如果按鈕已經有 active 類別，則不進行任何操作
    if (this.classList.contains('active')) return;

    // 移除所有 .tab-btn 和 .news-list 的 active 類別
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.news-list').forEach(list => list.classList.remove('active'));

    // 取得點擊按鈕的 data-title 值
    const targetYear = this.getAttribute('data-title');

    // 加上 active 到當前按鈕
    this.classList.add('active');

    // 找出 data-year 等於 data-title 的 .news-list，加上 active
    document.querySelectorAll(`.news-list[data-year="${targetYear}"]`).forEach(list => {
      list.classList.add('active');
    });
  });
});