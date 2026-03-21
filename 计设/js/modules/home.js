// ==================== 主页功能 ====================

document.addEventListener('DOMContentLoaded', function() {
    // 初始化词云
    if (window.Utils && window.Utils.renderWordCloud) {
        window.Utils.renderWordCloud();
    }
    
    // 搜索功能
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                console.log('搜索:', query);
                window.Utils.showToast('info', '搜索', `正在搜索: ${query}`);
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // 目的地卡片点击
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('click', function() {
            const destName = this.dataset.destination;
            if (destName) {
                showCityAttractions(destName);
            }
        });
    });

    // 窗口大小改变时重新渲染词云
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (document.getElementById('home').classList.contains('active')) {
                if (window.Utils && window.Utils.renderWordCloud) {
                    window.Utils.renderWordCloud();
                }
            }
        }, 250);
    });
});

// 显示城市景点详情
function showCityAttractions(cityName) {
    const cityAttractions = window.AppData?.cityAttractions || {};
    const cityData = cityAttractions[cityName];
    if (!cityData) return;

    const modalContent = `
        <div class="city-attractions-modal">
            <div class="city-header">
                <h2>${cityName}</h2>
                <p class="city-desc">${cityData.description}</p>
                <div class="city-meta">
                    <span class="best-time"><i class="fas fa-calendar-alt"></i> ${cityData.bestTime}</span>
                </div>
            </div>
            
            <div class="attractions-section">
                <h3><i class="fas fa-map-marked-alt"></i> 热门景点</h3>
                <div class="attractions-grid">
                    ${cityData.attractions.map((attr, index) => `
                        <div class="attraction-card" data-city="${cityName}" data-attraction-index="${index}">
                            <div class="attraction-img">
                                <img src="${attr.image}" alt="${attr.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                <i class="fas fa-image" style="display: none;"></i>
                                <span class="attraction-tag">${attr.tag}</span>
                            </div>
                            <div class="attraction-info">
                                <h4>${attr.name}</h4>
                                <p>${attr.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="food-section">
                <h3><i class="fas fa-utensils"></i> 特色美食</h3>
                <div class="food-tags">
                    ${cityData.food.map(f => `<span class="food-tag">${f}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    showModal(cityName, modalContent);
    
    setTimeout(() => {
        const attractionCards = document.querySelectorAll('.attraction-card');
        attractionCards.forEach(card => {
            card.addEventListener('click', function() {
                const cityName = this.dataset.city;
                const index = parseInt(this.dataset.attractionIndex);
                showAttractionDetail(cityName, index);
            });
        });
    }, 100);
}

// 显示景点详情
function showAttractionDetail(cityName, attractionIndex) {
    const cityAttractions = window.AppData?.cityAttractions || {};
    const cityData = cityAttractions[cityName];
    if (!cityData || !cityData.attractions[attractionIndex]) return;
    
    const attraction = cityData.attractions[attractionIndex];
    
    closeCityModal();
    
    setTimeout(() => {
        const modalContent = `
            <div class="attraction-detail-modal">
                <div class="detail-hero">
                    <div class="detail-hero-image">
                        <img src="${attraction.image}" alt="${attraction.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <i class="fas fa-image" style="display: none;"></i>
                        <div class="detail-overlay">
                            <div class="detail-badge">${attraction.tag}</div>
                        </div>
                    </div>
                </div>
                
                <div class="detail-content">
                    <div class="detail-header">
                        <h1>${attraction.name}</h1>
                        <div class="detail-location">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${cityName}</span>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-info-circle"></i> 景点简介</h3>
                        <p class="detail-description">${attraction.desc}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-clock"></i> 开放时间</h3>
                        <p class="detail-info">旺季 08:00-18:00 / 淡季 08:30-17:30</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-ticket-alt"></i> 门票价格</h3>
                        <p class="detail-info">成人票 ¥60-120 / 学生票 ¥30-60</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-lightbulb"></i> 游览建议</h3>
                        <ul class="detail-tips">
                            <li>建议游览时间：2-3小时</li>
                            <li>最佳游览季节：${cityData.bestTime}</li>
                            <li>建议提前预约，避开节假日高峰期</li>
                            <li>注意保护文物，文明游览</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-utensils"></i> 周边美食</h3>
                        <div class="detail-foods">
                            ${cityData.food.slice(0, 4).map(f => `<span class="food-tag">${f}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="detail-actions">
                        <button class="btn-back" onclick="backToCity('${cityName}')">
                            <i class="fas fa-arrow-left"></i> 返回${cityName}
                        </button>
                        <button class="btn-plan" onclick="addToPlan('${attraction.name}', '${cityName}')">
                            <i class="fas fa-plus"></i> 加入行程
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        showAttractionModal(attraction.name, modalContent);
    }, 350);
}

// 通用弹窗函数
function showModal(title, content) {
    const existingModal = document.getElementById('cityAttractionsModal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'cityAttractionsModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeCityModal()"></div>
        <div class="modal-container city-modal-container">
            <button class="modal-close" onclick="closeCityModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-content">
                ${content}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeCityModal() {
    const modal = document.getElementById('cityAttractionsModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

function showAttractionModal(title, content) {
    const existingModal = document.getElementById('attractionDetailModal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'attractionDetailModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeAttractionModal()"></div>
        <div class="modal-container attraction-detail-container">
            <button class="modal-close" onclick="closeAttractionModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-content">
                ${content}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeAttractionModal() {
    const modal = document.getElementById('attractionDetailModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

function backToCity(cityName) {
    closeAttractionModal();
    setTimeout(() => {
        showCityAttractions(cityName);
    }, 350);
}

function addToPlan(attractionName, cityName) {
    window.Utils.showToast('success', '已加入行程', `"${attractionName}"已加入您的行程！`);
}

window.Home = {
    showCityAttractions,
    showAttractionDetail,
    showModal,
    closeCityModal,
    showAttractionModal,
    closeAttractionModal,
    backToCity,
    addToPlan
};
