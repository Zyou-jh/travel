// ==================== 个人中心功能 ====================

document.addEventListener('DOMContentLoaded', function() {
    initProfileFeatures();
});

function initProfileFeatures() {
    // 个人中心菜单
    const menuItems = document.querySelectorAll('.profile-menu .menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.dataset.tab;
            if (window.Utils && window.Utils.switchProfileTab) {
                window.Utils.switchProfileTab(targetTab);
            }
        });
    });

    // 下拉菜单导航
    const dropdownItems = document.querySelectorAll('.user-dropdown .dropdown-item[href^="#profile"]');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetTab = this.dataset.tab;
            
            if (targetId && window.Utils && window.Utils.switchSection) {
                window.Utils.switchSection(targetId);
            }
            
            if (window.Utils && window.Utils.switchProfileTab) {
                setTimeout(() => {
                    if (targetTab) {
                        window.Utils.switchProfileTab(targetTab);
                    } else {
                        window.Utils.switchProfileTab('plans');
                    }
                }, 50);
            }
            
            document.body.click();
        });
    });

    // 我的计划点击事件
    const planItems = document.querySelectorAll('.plan-item');
    planItems.forEach(item => {
        item.addEventListener('click', function() {
            const planName = this.querySelector('h4')?.textContent || '旅行计划';
            openPlanDetailModal(planName);
        });
    });

    // 我的喜欢点击事件
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach(card => {
        card.addEventListener('click', function() {
            const favoriteName = this.querySelector('h4')?.textContent || '收藏内容';
            window.Utils.showToast('info', '查看详情', `正在查看: ${favoriteName}`);
        });
    });

    // 旅行日志点击事件
    const travelogItems = document.querySelectorAll('.travelog-item');
    travelogItems.forEach(item => {
        item.addEventListener('click', function() {
            const logName = this.querySelector('h4')?.textContent || '旅行日志';
            openTravelogDetailModal(logName);
        });
    });

    // 个人私信点击事件
    const messageItems = document.querySelectorAll('.message-item');
    messageItems.forEach(item => {
        item.addEventListener('click', function() {
            const userName = this.querySelector('h4')?.textContent || '用户';
            openMessageDetailModal(userName);
        });
    });

    // 设置页面编辑按钮
    const editBtns = document.querySelectorAll('.btn-edit');
    editBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const settingItem = this.closest('.settings-item');
            const label = settingItem?.querySelector('.settings-label')?.textContent || '设置项';
            window.Utils.showToast('info', '编辑', `正在编辑: ${label}`);
        });
    });
}

// 打开计划详情弹窗
function openPlanDetailModal(planName) {
    const modal = document.getElementById('planDetailModal');
    if (modal) {
        document.getElementById('planDetailTitle').textContent = planName;
        modal.classList.add('active');
    }
}

function closePlanDetailModal() {
    const modal = document.getElementById('planDetailModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// 打开旅行日志详情弹窗
function openTravelogDetailModal(logName) {
    const modal = document.getElementById('travelogDetailModal');
    if (modal) {
        document.getElementById('travelogDetailTitle').textContent = logName;
        modal.classList.add('active');
    }
}

function closeTravelogDetailModal() {
    const modal = document.getElementById('travelogDetailModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// 打开私信详情弹窗
function openMessageDetailModal(userName) {
    const modal = document.getElementById('messageModal');
    if (modal) {
        document.getElementById('messageUserName').textContent = userName;
        modal.classList.add('active');
    }
}

function closeMessageModal() {
    const modal = document.getElementById('messageModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

window.Profile = {
    openPlanDetailModal,
    closePlanDetailModal,
    openTravelogDetailModal,
    closeTravelogDetailModal,
    openMessageDetailModal,
    closeMessageModal
};
