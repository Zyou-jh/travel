// ==================== 工具函数 ====================

// Toast 提示函数
function showToast(type, title, message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${icons[type]} toast-icon"></i>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close"><i class="fas fa-times"></i></button>
    `;
    
    container.appendChild(toast);
    
    // 关闭按钮
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.remove();
    });
    
    // 自动关闭
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 渲染圆形词云（螺旋布局）
function renderWordCloud() {
    const wordCloudContainer = document.getElementById('wordCloud');
    if (!wordCloudContainer) return;
    
    wordCloudContainer.innerHTML = '';
    
    const containerWidth = wordCloudContainer.offsetWidth;
    const containerHeight = wordCloudContainer.offsetHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    
    const hotDestinations = window.AppData?.hotDestinations || [];
    const sortedWords = [...hotDestinations].sort((a, b) => a.freq - b.freq);
    
    const placedWords = [];
    
    sortedWords.forEach((dest, index) => {
        const wordItem = document.createElement('span');
        wordItem.className = `word-item freq-${dest.freq}`;
        wordItem.textContent = dest.name;
        wordItem.title = `搜索次数: ${dest.count.toLocaleString()}`;
        
        wordItem.style.visibility = 'hidden';
        wordItem.style.position = 'absolute';
        wordCloudContainer.appendChild(wordItem);
        
        const wordWidth = wordItem.offsetWidth;
        const wordHeight = wordItem.offsetHeight;
        
        let angle = 0;
        let radius = 0;
        const angleStep = 0.5;
        const radiusStep = 8;
        let x = centerX;
        let y = centerY;
        let maxIterations = 500;
        let placed = false;
        
        const startRadius = dest.freq === 1 ? 0 : (dest.freq - 1) * 40;
        radius = startRadius;
        
        while (!placed && maxIterations > 0) {
            const randomOffset = (Math.random() - 0.5) * 20;
            x = centerX + radius * Math.cos(angle) + randomOffset;
            y = centerY + radius * Math.sin(angle) * 0.8 + randomOffset;
            
            let overlap = false;
            for (const placedWord of placedWords) {
                const dx = x - placedWord.x;
                const dy = y - placedWord.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = (wordWidth + placedWord.width) / 2 + 8;
                
                if (distance < minDistance) {
                    overlap = true;
                    break;
                }
            }
            
            const distFromCenter = Math.sqrt(
                Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
            );
            
            if (!overlap && distFromCenter < (containerWidth / 2 - wordWidth / 2 - 10)) {
                placed = true;
            } else {
                angle += angleStep;
                radius += radiusStep * angleStep / (2 * Math.PI);
            }
            
            maxIterations--;
        }
        
        if (!placed) {
            const randomAngle = Math.random() * 2 * Math.PI;
            const randomRadius = Math.random() * (containerWidth / 2 - 60);
            x = centerX + randomRadius * Math.cos(randomAngle);
            y = centerY + randomRadius * Math.sin(randomAngle) * 0.8;
        }
        
        wordItem.style.left = `${x - wordWidth / 2}px`;
        wordItem.style.top = `${y - wordHeight / 2}px`;
        wordItem.style.visibility = 'visible';
        
        placedWords.push({
            x: x,
            y: y,
            width: wordWidth,
            height: wordHeight
        });
        
        wordItem.addEventListener('click', function() {
            const searchInput = document.querySelector('.search-box input');
            if (searchInput) {
                searchInput.value = dest.name;
                searchInput.focus();
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
}

// 切换页面部分
function switchSection(sectionId) {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    
    navItems.forEach(item => item.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    
    const targetSection = document.getElementById(sectionId);
    const targetNavItem = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    
    if (targetSection) {
        targetSection.classList.add('active');
    }
    if (targetNavItem && targetNavItem.parentElement) {
        targetNavItem.parentElement.classList.add('active');
    }
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 切换个人中心标签页
function switchProfileTab(tabName) {
    const menuItems = document.querySelectorAll('.profile-menu .menu-item');
    const sections = document.querySelectorAll('.profile-section');
    
    menuItems.forEach(mi => {
        mi.classList.remove('active');
        if (mi.dataset.tab === tabName) {
            mi.classList.add('active');
        }
    });
    
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.dataset.section === tabName) {
            section.classList.add('active');
        }
    });
}

// 导出工具函数
window.Utils = {
    showToast,
    renderWordCloud,
    switchSection,
    switchProfileTab
};
