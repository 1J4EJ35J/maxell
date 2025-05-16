 window.onload = function() {
    adjustToolHeights("ratio25x36");
    adjustToolHeights("ratio1x1");
    adjustToolHeights("ratio1x2");

    window.addEventListener('resize', function() {
        adjustToolHeights("ratio25x36");
        adjustToolHeights("ratio1x1");
        adjustToolHeights("ratio1x2");
    });
};

function adjustToolHeights(option) {
    let aspect_ratio = 0;

    if (option === 'ratio25x36') {
        aspect_ratio = 250 / 360; 
    } else if (option === 'ratio1x1') {
        aspect_ratio = 100 / 100; 
    } else if (option === 'ratio1x2') {
        aspect_ratio = 600 / 1200; 
    } 

    var tools = document.getElementsByClassName('proportional-tool-' + option);
    for (var i = 0; i < tools.length; i++) {
        var tool = tools[i];
        var width = tool.clientWidth;

        // 使用固定比例計算新的高度
        var newHeight = width * aspect_ratio;

        // 設置新的高度
        tool.style.height = newHeight + 'px';
    }
}


//

// document.addEventListener('DOMContentLoaded', function() {
//     let iconContainers = document.querySelectorAll('.icon-container');

//     iconContainers.forEach(function(container) {
//         container.addEventListener('click', function() {
//             let icon = container.querySelector('i');

//             // 切換 fa-heart 的圖標
//             if (icon.classList.contains('fa-regular') && icon.classList.contains('fa-heart')) {
//                 icon.classList.remove('fa-regular');
//                 icon.classList.add('fa-solid');
//             } else if (icon.classList.contains('fa-solid') && icon.classList.contains('fa-heart')) {
//                 icon.classList.remove('fa-solid');
//                 icon.classList.add('fa-regular');
//             }

//             // 切換 fa-bookmark 的圖標
//             if (icon.classList.contains('fa-regular') && icon.classList.contains('fa-bookmark')) {
//                 icon.classList.remove('fa-regular');
//                 icon.classList.add('fa-solid');
//             } else if (icon.classList.contains('fa-solid') && icon.classList.contains('fa-bookmark')) {
//                 icon.classList.remove('fa-solid');
//                 icon.classList.add('fa-regular');
//             }
//         });
//     });
// });