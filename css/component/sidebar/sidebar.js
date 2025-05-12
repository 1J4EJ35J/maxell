customElements.define('nav-sidebar', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="nav-sidebar">
                <div class="nav-sidebar-head">
                    <div class="img-container">
                        <img src="/FrontEnd/accests/img/avatar.svg">
                    </div>
                    <div class="member-container">
                        <div class="text-container">
                            <span class="text">Hi~</span>
                            <div class="account-box">
                                <span class="account">
                                    shimon@gmail.com
                                </span> 
                            </div>
                        </div>
                    </div>
                </div>
                <section class="nav-sidebar-body outter-container">
                    <div class="scroll-box-1">
                        <ul class="menu-zone">
                            <li class="pointer menu-container active">
                                <div class="title-box">
                                    <span class="title">通用功能</span>
                                    <i class="fa-solid fa-chevron-down icon-control"></i>
                                </div>
                                <div class="list">
                                    <a class="option-container active">
                                        <div class="dot"></div>
                                        <span class="text">使用者資訊</span>
                                    </a>
                                    <a href="#" class="option-container">
                                        <div class="dot"></div>
                                        <span class="text">後台權限</span>
                                    </a>
                                </div>
                            </li>
                            <li class="pointer menu-container active">
                                <div class="title-box">
                                    <span class="title">APP功能</span>
                                    <i class="fa-solid fa-chevron-down icon-control"></i>
                                </div>
                                <div class="list">
                                    <a class="option-container">
                                        <div class="dot"></div>
                                        <span class="text">用戶資訊</span>
                                    </a>
                                    <a href="#" class="option-container">
                                        <div class="dot"></div>
                                        <span class="text">APP Banner</span>
                                    </a>
                                    <a href="#" class=" option-container sub-sidebar-option sub-sidebar-title message active">
                                        <div class="dot"></div>
                                        <span class="text">推播設定</span>
                                    </a>
                                    <a href="#" class="option-container sub-sidebar-option active">
                                        <div class="dot"></div>
                                        <span class="text">推播紀錄</span>
                                    </a>
                                    <a href="#" class="option-container sub-sidebar-option">
                                        <div class="dot"></div>
                                        <span class="text">推播種機</span>
                                    </a>
                                    <a href="#" class="option-container sub-sidebar-option sub-sidebar-title coupon">
                                        <div class="dot"></div>
                                        <span class="text">兌換代碼設定</span>
                                    </a>
                                    <a href="#" class="option-container sub-sidebar-option ">
                                        <div class="dot"></div>
                                        <span class="text">兌換紀錄</span>
                                    </a>
                                </div>
                            </li>
                            <li class="pointer menu-container">
                                <div class="title-box">
                                    <span class="title">跑者攻略</span>
                                    <i class="fa-solid fa-chevron-down icon-control"></i>
                                </div>
                                <div class="list">
                                    <a class="option-container">
                                        <div class="dot"></div>
                                        <span class="text">知識專欄</span>
                                    </a>
                                    <a href="#" class="option-container">
                                        <div class="dot"></div>
                                        <span class="text">影音專區</span>
                                    </a>
                                    <a class="option-container">
                                        <div class="dot"></div>
                                        <span class="text">知識專欄(會員)</span>
                                    </a>
                                    <a href="#" class="option-container">
                                        <div class="dot"></div>
                                        <span class="text">影音專區(會員)</span>
                                    </a>
                                </div>
                            </li>
                            
                        </ul>
                    <div>
                </section>
                <div class="logout-btn-zone">
                    <a class="logout-btn pointer">
                        <span class="btn-text label-xl w4">登出</span>
                    </a>
                </div>
            </div>
        `;
    }
});

