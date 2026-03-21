// ==================== 规划功能 ====================

document.addEventListener('DOMContentLoaded', function() {
    // 规划筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            filterPlansByDestination(filter);
        });
    });
    
    // 筛选栏目收束功能
    const filterToggle = document.getElementById('filterToggle');
    const filterContent = document.querySelector('.filter-content');
    
    if (filterToggle && filterContent) {
        filterToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            filterContent.classList.toggle('collapsed');
        });
        
        filterContent.classList.remove('collapsed');
    }
    
    // 获取位置按钮功能
    const getLocationBtn = document.getElementById('getLocationBtn');
    if (getLocationBtn) {
        getLocationBtn.addEventListener('click', function() {
            if (navigator.geolocation) {
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 定位中...';
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        getLocationBtn.innerHTML = '<i class="fas fa-location-dot"></i> 附近';
                        window.Utils.showToast('success', '定位成功', '已为您筛选附近的旅游规划');
                        filterPlansByDistance(latitude, longitude);
                    },
                    function(error) {
                        getLocationBtn.innerHTML = '<i class="fas fa-location-dot"></i> 附近';
                        window.Utils.showToast('error', '定位失败', '无法获取您的位置信息');
                    }
                );
            } else {
                window.Utils.showToast('error', '不支持定位', '您的浏览器不支持地理定位功能');
            }
        });
    }
});

// 根据距离筛选规划
function filterPlansByDistance(latitude, longitude) {
    const planCards = document.querySelectorAll('.plan-card');
    let visibleCount = 0;
    
    planCards.forEach(card => {
        const randomDistance = Math.random() * 150;
        
        if (randomDistance <= 50) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    updateEmptyTip(visibleCount, '附近暂无旅游规划');
}

// 根据目的地筛选规划
function filterPlansByDestination(destination) {
    const planCards = document.querySelectorAll('.plan-card');
    let visibleCount = 0;
    
    planCards.forEach(card => {
        if (destination === 'all') {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            const cardDestination = card.dataset.destination;
            if (cardDestination === destination) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        }
    });
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === destination) {
            btn.classList.add('active');
        }
    });
    
    updateEmptyTip(visibleCount, `暂无 "${destination}" 的相关规划`);
}

function updateEmptyTip(visibleCount, message) {
    let emptyTip = document.getElementById('plansEmptyTip');
    if (visibleCount === 0) {
        if (!emptyTip) {
            emptyTip = document.createElement('div');
            emptyTip.id = 'plansEmptyTip';
            emptyTip.className = 'plans-empty-tip';
            emptyTip.innerHTML = `
                <i class="fas fa-search"></i>
                <p>${message}</p>
                <span>试试其他筛选条件...</span>
            `;
            document.getElementById('plansContainer')?.appendChild(emptyTip);
        } else {
            emptyTip.querySelector('p').textContent = message;
            emptyTip.style.display = 'block';
        }
    } else if (emptyTip) {
        emptyTip.style.display = 'none';
    }
}

window.Plans = {
    filterPlansByDestination,
    filterPlansByDistance
};
