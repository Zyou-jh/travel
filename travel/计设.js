// 景点详情数据现在从后端API获取

// ==================== 城市景点数据 ====================
const cityAttractions = {
    '北京': [
        { id: 1, name: '故宫', location: '北京市东城区景山前街4号', rating: 4.9, hours: '8:30-17:00', ticket: '60元（旺季）', transportation: '地铁1号线天安门东站', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop', introduction: '故宫是中国明清两代的皇家宫殿，旧称紫禁城，位于北京中轴线的中心。故宫以三大殿为中心，占地面积约72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，房屋九千余间。' },
        { id: 2, name: '天安门广场', location: '北京市东城区长安街', rating: 4.8, hours: '全天开放', ticket: '免费', transportation: '地铁1号线天安门东站', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=600&fit=crop', introduction: '天安门广场位于北京市中心，南北长880米，东西宽500米，面积达44万平方米，可容纳100万人举行盛大集会，是世界上最大的城市广场。' },
        { id: 3, name: '长城', location: '北京市延庆区', rating: 4.9, hours: '7:30-17:30', ticket: '45元', transportation: '公交877路直达', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop', introduction: '长城，又称万里长城，是中国古代的军事防御工程，是一道高大、坚固而连绵不断的长垣，用以限隔敌骑的行动。' },
        { id: 4, name: '颐和园', location: '北京市海淀区新建宫门路19号', rating: 4.7, hours: '6:30-18:00', ticket: '30元', transportation: '地铁4号线北宫门站', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop', introduction: '颐和园，中国清朝时期皇家园林，前身为清漪园，坐落在北京西郊，距城区15公里，占地约290公顷，与圆明园毗邻。' }
    ],
    '上海': [
        { id: 5, name: '外滩', location: '上海市黄浦区中山东一路', rating: 4.8, hours: '全天开放', ticket: '免费', transportation: '地铁2号线南京东路站', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&h=600&fit=crop', introduction: '外滩位于上海市黄浦区的黄浦江畔，即外黄浦滩，为中国历史文化街区。1844年（清道光廿四年）起，外滩一带被划为英国租界，成为上海十里洋场。' },
        { id: 6, name: '东方明珠', location: '上海市浦东新区世纪大道1号', rating: 4.7, hours: '9:00-21:30', ticket: '220元', transportation: '地铁2号线陆家嘴站', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&h=600&fit=crop', introduction: '东方明珠广播电视塔是上海的标志性文化景观之一，位于浦东新区陆家嘴，塔高约468米。该建筑于1991年7月兴建，1995年5月投入使用。' },
        { id: 7, name: '迪士尼乐园', location: '上海市浦东新区川沙镇黄赵路310号', rating: 4.9, hours: '8:30-21:00', ticket: '399元起', transportation: '地铁11号线迪士尼站', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&h=600&fit=crop', introduction: '上海迪士尼乐园是中国内地首座迪士尼主题乐园，位于上海市浦东新区川沙新镇，于2016年6月16日正式开园。' }
    ],
    '西安': [
        { id: 8, name: '兵马俑', location: '西安市临潼区秦陵北路', rating: 4.9, hours: '8:30-17:30', ticket: '120元', transportation: '游5（306）路公交', image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800&h=600&fit=crop', introduction: '秦始皇兵马俑，简称秦兵马俑或秦俑，位于今陕西省西安市临潼区秦始皇陵以东1.5千米处的兵马俑坑内。' },
        { id: 9, name: '大雁塔', location: '西安市雁塔区雁塔路', rating: 4.7, hours: '8:00-18:00', ticket: '50元', transportation: '地铁3号线大雁塔站', image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800&h=600&fit=crop', introduction: '大雁塔位于唐长安城晋昌坊（今陕西省西安市南）的大慈恩寺内，又名"慈恩寺塔"。唐永徽三年（652年），玄奘为保存由天竺经丝绸之路带回长安的经卷佛像主持修建了大雁塔。' },
        { id: 10, name: '回民街', location: '西安市莲湖区北院门', rating: 4.6, hours: '全天开放', ticket: '免费', transportation: '地铁2号线钟楼站', image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800&h=600&fit=crop', introduction: '回民街是西安著名的美食文化街区，是西安特色小吃最集中的街区，也是来西安必去的地方。' }
    ],
    '成都': [
        { id: 11, name: '大熊猫基地', location: '成都市成华区熊猫大道1375号', rating: 4.8, hours: '7:30-18:00', ticket: '55元', transportation: '地铁3号线熊猫大道站', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop', introduction: '成都大熊猫繁育研究基地，是一个专门从事濒危野生动物研究、繁育、保护教育和教育旅游的非营利性机构。' },
        { id: 12, name: '宽窄巷子', location: '成都市青羊区长顺上街127号', rating: 4.6, hours: '全天开放', ticket: '免费', transportation: '地铁4号线宽窄巷子站', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop', introduction: '宽窄巷子由宽巷子、窄巷子、井巷子平行排列组成，全为青黛砖瓦的仿古四合院落，这里也是成都遗留下来的较成规模的清朝古街道。' },
        { id: 13, name: '锦里', location: '成都市武侯区武侯祠大街231号', rating: 4.7, hours: '全天开放', ticket: '免费', transportation: '地铁3号线高升桥站', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop', introduction: '锦里是成都知名的步行商业街，紧邻武侯祠，传说中锦里曾是西蜀历史上最古老、最具有商业气息的街道之一。' }
    ],
    '南京': [
        { id: 14, name: '中山陵', location: '南京市玄武区石象路7号', rating: 4.8, hours: '8:30-17:00', ticket: '免费', transportation: '地铁2号线苜蓿园站', image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800&h=600&fit=crop', introduction: '中山陵是中国近代民主革命先行者孙中山的陵墓，及其附属纪念建筑群，面积共8万余平方米。中山陵自1926年春动工，至1929年夏建成。' },
        { id: 15, name: '夫子庙', location: '南京市秦淮区贡院街', rating: 4.6, hours: '9:00-22:00', ticket: '30元', transportation: '地铁3号线夫子庙站', image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800&h=600&fit=crop', introduction: '夫子庙是一组规模宏大的古建筑群，历经沧桑，几番兴废，是供奉和祭祀孔子的地方，中国四大文庙之一。' },
        { id: 16, name: '玄武湖', location: '南京市玄武区玄武门1号', rating: 4.5, hours: '5:00-22:00', ticket: '免费', transportation: '地铁1号线玄武门站', image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800&h=600&fit=crop', introduction: '玄武湖位于南京市玄武区，东枕紫金山，西靠明城墙，北邻南京站，是江南地区最大的城内公园，也是中国最大的皇家园林湖泊。' }
    ],
    '金华': [
        { id: 17, name: '横店影视城', location: '金华市东阳市横店镇', rating: 4.7, hours: '8:00-17:00', ticket: '280元', transportation: '横店客运站班车', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=600&fit=crop', introduction: '横店影视城，位于中国浙江省金华东阳市横店镇，自1996年以来，横店集团累计投入30个亿资金兴建广州街·香港街、明清宫苑、秦王宫、清明上河图、华夏文化园、明清民居博览城等13个跨越几千年历史时空。' },
        { id: 18, name: '诸葛八卦村', location: '金华市兰溪市诸葛镇', rating: 4.5, hours: '7:30-17:30', ticket: '100元', transportation: '兰溪客运站班车', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=600&fit=crop', introduction: '诸葛八卦村，原名高隆村，是迄今发现的诸葛亮后裔的最大聚居地。村中建筑格局按"八阵图"样式布列，且保存了大量明清古民居。' }
    ]
};

// ==================== 词云数据 ====================
const hotDestinations = [
    { name: '北京', freq: 1, count: 12580 },
    { name: '上海', freq: 1, count: 11230 },
    { name: '杭州', freq: 2, count: 9860 },
    { name: '西安', freq: 2, count: 8950 },
    { name: '成都', freq: 2, count: 8720 },
    { name: '三亚', freq: 3, count: 7650 },
    { name: '云南', freq: 3, count: 7420 },
    { name: '厦门', freq: 3, count: 6980 },
    { name: '重庆', freq: 3, count: 6540 },
    { name: '青岛', freq: 4, count: 5230 },
    { name: '桂林', freq: 4, count: 4890 },
    { name: '西藏', freq: 4, count: 4560 },
    { name: '新疆', freq: 4, count: 4320 },
    { name: '张家界', freq: 5, count: 3890 },
    { name: '苏州', freq: 5, count: 3650 },
    { name: '丽江', freq: 5, count: 3420 },
    { name: '大理', freq: 5, count: 3180 },
    { name: '长沙', freq: 5, count: 2950 }
];

// 渲染圆形词云（螺旋布局）
function renderWordCloud() {
    const wordCloudContainer = document.getElementById('wordCloud');
    if (!wordCloudContainer) return;
    
    wordCloudContainer.innerHTML = '';
    
    const containerWidth = wordCloudContainer.offsetWidth;
    const containerHeight = wordCloudContainer.offsetHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    
    // 按频率排序，高频词放在中心
    const sortedWords = [...hotDestinations].sort((a, b) => a.freq - b.freq);
    
    // 已放置的词语位置记录
    const placedWords = [];
    
    sortedWords.forEach((dest, index) => {
        const wordItem = document.createElement('span');
        wordItem.className = `word-item freq-${dest.freq}`;
        wordItem.textContent = dest.name;
        wordItem.title = `搜索次数: ${dest.count.toLocaleString()}`;
        
        // 先临时添加到DOM以获取尺寸
        wordItem.style.visibility = 'hidden';
        wordItem.style.position = 'absolute';
        wordCloudContainer.appendChild(wordItem);
        
        const wordWidth = wordItem.offsetWidth;
        const wordHeight = wordItem.offsetHeight;
        
        // 螺旋参数
        let angle = 0;
        let radius = 0;
        const angleStep = 0.5; // 角度增量
        const radiusStep = 8;  // 半径增量
        let x = centerX;
        let y = centerY;
        let maxIterations = 500;
        let placed = false;
        
        // 根据频率调整起始半径
        const startRadius = dest.freq === 1 ? 0 : (dest.freq - 1) * 40;
        radius = startRadius;
        
        while (!placed && maxIterations > 0) {
            // 计算位置（添加随机偏移使布局更自然）
            const randomOffset = (Math.random() - 0.5) * 20;
            x = centerX + radius * Math.cos(angle) + randomOffset;
            y = centerY + radius * Math.sin(angle) * 0.8 + randomOffset; // 0.8使椭圆更美观
            
            // 检查是否与已放置的词语重叠
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
            
            // 检查是否在圆形边界内
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
        
        // 如果没找到合适位置，放在随机位置
        if (!placed) {
            const randomAngle = Math.random() * 2 * Math.PI;
            const randomRadius = Math.random() * (containerWidth / 2 - 60);
            x = centerX + randomRadius * Math.cos(randomAngle);
            y = centerY + randomRadius * Math.sin(randomAngle) * 0.8;
        }
        
        // 设置最终位置
        wordItem.style.left = `${x - wordWidth / 2}px`;
        wordItem.style.top = `${y - wordHeight / 2}px`;
        wordItem.style.visibility = 'visible';
        
        // 记录位置
        placedWords.push({
            x: x,
            y: y,
            width: wordWidth,
            height: wordHeight
        });
        
        // 点击词云进行搜索
        wordItem.addEventListener('click', function() {
            const searchInput = document.querySelector('.search-box input');
            if (searchInput) {
                searchInput.value = dest.name;
                searchInput.focus();
                // 添加点击动画
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
}

// 窗口大小改变时重新渲染词云
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        if (document.getElementById('home').classList.contains('active')) {
            renderWordCloud();
        }
    }, 250);
});

// ==================== 导航功能 ====================
document.addEventListener('DOMContentLoaded', function() {
    // 初始化词云
    renderWordCloud();
    
    // 初始化登录状态
    checkLoginStatus();
    // 获取所有导航链接和页面部分
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // 导航点击事件
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 获取目标部分的ID
            const targetId = this.getAttribute('href').substring(1);
            
            // 切换活动状态
            switchSection(targetId);
            
            // 移动端关闭菜单
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 切换页面部分的函数
    function switchSection(sectionId) {
        // 移除所有活动状态
        navItems.forEach(item => item.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
        
        // 添加新的活动状态
        const targetSection = document.getElementById(sectionId);
        const targetNavItem = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (targetSection) {
            targetSection.classList.add('active');
        }
        if (targetNavItem && targetNavItem.parentElement) {
            targetNavItem.parentElement.classList.add('active');
        }
        
        // 滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // 暴露到全局
    window.switchSection = switchSection;

    // 移动端菜单切换
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // ==================== 搜索功能 ====================
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                searchDestination(query);
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    function searchDestination(query) {
        const recommendationsSection = document.querySelector('.recommendations');
        const destinationCards = document.querySelectorAll('.destination-card');
        
        if (!recommendationsSection) {
            showToast('error', '搜索失败', '未找到热门目的地区域');
            return;
        }

        let found = false;
        let firstMatch = null;

        destinationCards.forEach(card => {
            const destName = card.dataset.destination;
            if (destName && destName.includes(query)) {
                found = true;
                card.classList.add('search-highlight');
                if (!firstMatch) {
                    firstMatch = card;
                }
            } else {
                card.classList.remove('search-highlight');
            }
        });

        if (found && firstMatch) {
            recommendationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
            showToast('success', '搜索成功', `找到与"${query}"相关的目的地`);
        } else {
            showToast('info', '搜索结果', `未找到与"${query}"相关的目的地，请尝试其他关键词`);
        }
    }

    // ==================== AI 聊天功能 ====================
    const chatInput = document.querySelector('.chat-input');
    const sendBtn = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');

    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', function() {
            sendMessage();
        });

        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // 添加用户消息
        addMessage(message, 'user');
        chatInput.value = '';

        // 模拟AI回复
        setTimeout(() => {
            const aiResponse = generateAIResponse(message);
            addMessage(aiResponse, 'ai');
        }, 1000);
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        avatarDiv.innerHTML = sender === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = `<p>${escapeHtml(text)}</p>`;
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateAIResponse(userMessage) {
        // 简单的关键词回复逻辑
        const keywords = {
            '北京': '北京是个绝佳的选择！您可以游览故宫、长城、颐和园等著名景点。建议安排3-4天的行程。',
            '上海': '上海是现代化的国际大都市，外滩、东方明珠、迪士尼乐园都是必去的地方！',
            '云南': '云南风景如画，大理、丽江、香格里拉都是非常受欢迎的目的地。',
            '预算': '我可以帮您规划不同预算的旅行方案。请告诉我您的预算范围和出行天数。',
            '美食': '各地都有特色美食，我可以根据您的目的地推荐当地最好的餐厅和特色小吃。',
            '酒店': '我可以帮您查找性价比高的酒店，或者推荐特色民宿。请告诉我您的偏好。'
        };

        for (const [key, response] of Object.entries(keywords)) {
            if (userMessage.includes(key)) {
                return response;
            }
        }

        const defaultResponses = [
            '这是一个很好的旅行想法！让我为您规划一下。',
            '收到您的需求，我可以帮您制定详细的旅行计划。',
            '我很乐意为您推荐合适的行程路线，请告诉我更多细节。',
            '旅行规划需要考虑很多因素，让我们一步步来。'
        ];

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ==================== 社区发布功能 ====================
    const postInput = document.querySelector('.post-input');
    const postBtn = document.querySelector('.post-btn');
    const postsList = document.querySelector('.posts-list');

    if (postBtn && postInput) {
        postBtn.addEventListener('click', function() {
            createPost();
        });

        postInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                createPost();
            }
        });
    }

    function createPost() {
        const content = postInput.value.trim();
        if (!content) return;

        // 获取用户信息
        const session = JSON.parse(
            localStorage.getItem('travel_session') || 
            sessionStorage.getItem('travel_session') || 
            'null'
        );
        
        if (!session || !session.userId) {
            showToast('warning', '请先登录', '登录后才能发布帖子');
            openModal();
            return;
        }

        // 调用API发布帖子
        fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                userId: session.userId, 
                content: content,
                location: ''
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success && data.post) {
                const postCard = document.createElement('div');
                postCard.className = 'post-card';
                postCard.innerHTML = `
                    <div class="post-header">
                        <div class="user-avatar">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div class="user-info">
                            <h4>${session.username}</h4>
                            <span>刚刚 · 发布</span>
                        </div>
                    </div>
                    <div class="post-content">
                        <p>${escapeHtml(content)}</p>
                    </div>
                    <div class="post-actions">
                        <button class="action-btn"><i class="far fa-heart"></i> 0</button>
                        <button class="action-btn"><i class="far fa-comment"></i> 0</button>
                        <button class="action-btn"><i class="far fa-share-square"></i> 分享</button>
                    </div>
                `;

                postsList.insertBefore(postCard, postsList.firstChild);
                postInput.value = '';
                showToast('success', '发布成功', '您的帖子已发布');
            } else {
                showToast('error', '发布失败', data.message || '帖子发布失败');
            }
        })
        .catch(error => {
            console.error('发布失败:', error);
            showToast('error', '发布失败', '网络错误，请稍后重试');
        });
    }

    // ==================== 点赞功能 ====================
    document.addEventListener('click', function(e) {
        const actionBtn = e.target.closest('.action-btn');
        if (actionBtn && actionBtn.querySelector('.fa-heart')) {
            // 检查是否已登录
            const session = JSON.parse(
                localStorage.getItem('travel_session') || 
                sessionStorage.getItem('travel_session') || 
                'null'
            );
            
            if (!session || !session.isLoggedIn) {
                showToast('warning', '请先登录', '登录后才能点赞');
                openModal();
                return;
            }
            
            const icon = actionBtn.querySelector('.fa-heart');
            const postCard = actionBtn.closest('.post-card');
            
            // 获取帖子ID和内容
            let postId;
            let postContent;
            let postLocation;
            let postAuthor;
            
            if (postCard) {
                // 从DOM获取帖子信息
                const user_info = postCard.querySelector('.user-info h4');
                const locationSpan = postCard.querySelector('.user-info span');
                const contentP = postCard.querySelector('.post-content p');
                
                postAuthor = user_info ? user_info.textContent : '未知用户';
                postLocation = locationSpan ? locationSpan.textContent.split('·')[1]?.trim() || '' : '';
                postContent = contentP ? contentP.textContent : '';
                
                // 根据内容生成唯一ID
                postId = 'post_' + postContent.substring(0, 20).replace(/\s/g, '_');
            } else {
                postId = 'post_' + Date.now();
            }
            
            // 获取当前点赞状态
            const likedPosts = JSON.parse(localStorage.getItem('travel_liked_posts') || '[]');
            const isLiked = likedPosts.some(p => p.id === postId);
            
            // 获取当前点赞数
            const text = actionBtn.textContent;
            let count = parseInt(text) || 0;
            
            if (isLiked) {
                // 取消点赞
                const updatedLikedPosts = likedPosts.filter(p => p.id !== postId);
                localStorage.setItem('travel_liked_posts', JSON.stringify(updatedLikedPosts));
                
                // 更新UI
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
                actionBtn.innerHTML = `<i class="far fa-heart"></i> ${count - 1}`;
                
                showToast('success', '已取消点赞', '不再喜欢此文章');
                
                // 更新个人中心的喜欢列表
                updateFavoritesList();
            } else {
                // 点赞
                const newLikedPost = {
                    id: postId,
                    content: postContent,
                    location: postLocation,
                    author: postAuthor,
                    likedAt: new Date().toISOString()
                };
                likedPosts.push(newLikedPost);
                localStorage.setItem('travel_liked_posts', JSON.stringify(likedPosts));
                
                // 更新UI
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ff4757';
                actionBtn.innerHTML = `<i class="fas fa-heart" style="color: #ff4757;"></i> ${count + 1}`;
                
                showToast('success', '点赞成功', '感谢您的支持');
                
                // 更新个人中心的喜欢列表
                updateFavoritesList();
            }
        }
    });

    // ==================== 热门目的地文章点赞功能 ====================
    document.addEventListener('click', function(e) {
        const likeBtn = e.target.closest('.destination-like-btn');
        if (likeBtn) {
            e.stopPropagation();
            
            // 检查是否已登录
            const session = JSON.parse(
                localStorage.getItem('travel_session') || 
                sessionStorage.getItem('travel_session') || 
                'null'
            );
            
            if (!session || !session.isLoggedIn) {
                showToast('warning', '请先登录', '登录后才能点赞');
                openModal();
                return;
            }
            
            const icon = likeBtn.querySelector('.fa-heart');
            const destinationCard = likeBtn.closest('.destination-card');
            
            // 获取目的地文章ID和内容
            let postId;
            let postContent;
            let postLocation;
            let postAuthor;
            
            if (destinationCard) {
                const destName = destinationCard.dataset.destination;
                const usernameEl = destinationCard.querySelector('.post-username');
                const textEl = destinationCard.querySelector('.post-text');
                
                postLocation = destName || '';
                postAuthor = usernameEl ? usernameEl.textContent : '未知用户';
                postContent = textEl ? textEl.textContent : '';
                
                // 根据目的地和内容生成唯一ID
                postId = 'dest_' + destName + '_' + postContent.substring(0, 15).replace(/\s/g, '_');
            } else {
                postId = 'dest_' + Date.now();
            }
            
            // 获取当前点赞状态
            const likedPosts = JSON.parse(localStorage.getItem('travel_liked_posts') || '[]');
            const isLiked = likedPosts.some(p => p.id === postId);
            
            // 获取当前点赞数
            const text = likeBtn.textContent;
            let count = parseInt(text) || 0;
            
            if (isLiked) {
                // 取消点赞
                const updatedLikedPosts = likedPosts.filter(p => p.id !== postId);
                localStorage.setItem('travel_liked_posts', JSON.stringify(updatedLikedPosts));
                
                // 更新UI
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
                likeBtn.innerHTML = `<i class="far fa-heart"></i> ${count - 1}`;
                
                showToast('success', '已取消点赞', '不再喜欢此文章');
                
                // 更新个人中心的喜欢列表
                updateFavoritesList();
            } else {
                // 点赞
                const newLikedPost = {
                    id: postId,
                    content: postContent,
                    location: postLocation,
                    author: postAuthor,
                    type: 'destination',
                    likedAt: new Date().toISOString()
                };
                likedPosts.push(newLikedPost);
                localStorage.setItem('travel_liked_posts', JSON.stringify(likedPosts));
                
                // 更新UI
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ff4757';
                likeBtn.innerHTML = `<i class="fas fa-heart" style="color: #ff4757;"></i> ${count + 1}`;
                
                showToast('success', '点赞成功', '感谢您的支持');
                
                // 更新个人中心的喜欢列表
                updateFavoritesList();
            }
        }
    });

    // ==================== 规划卡片点击 ====================
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        const detailBtn = card.querySelector('.btn-primary');
        if (detailBtn) {
            detailBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const planData = getPlanData(card);
                openPlanDetail(planData);
            });
        }
    });

    // 获取规划卡片数据
    function getPlanData(card) {
        const title = card.querySelector('h3').textContent;
        const badge = card.querySelector('.plan-badge')?.textContent || '';
        const details = card.querySelector('.plan-details').textContent;
        const desc = card.querySelector('p').textContent;
        const destination = card.dataset.destination;
        
        // 解析天数和价格
        const daysMatch = details.match(/(\d+)天/);
        const priceMatch = details.match(/(\d+)起/);
        
        return {
            title,
            badge,
            destination,
            days: daysMatch ? daysMatch[1] + '天' + (daysMatch[1] - 1) + '晚' : '',
            price: priceMatch ? priceMatch[1] + '起' : '',
            description: desc
        };
    }

    // ==================== 目的地卡片点击 ====================
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('click', function() {
            const destName = this.dataset.destination;
            if (destName) {
                showAttractionsList(destName);
            }
        });
    });

    function showAttractionsList(cityName) {
        const attractions = cityAttractions[cityName];
        if (!attractions || attractions.length === 0) {
            showToast('info', '暂无数据', `${cityName}暂无景点信息`);
            return;
        }

        let attractionsHtml = `
            <div class="attractions-list-modal">
                <div class="attractions-list-header">
                    <h2>${cityName}景点列表</h2>
                    <button class="close-btn" onclick="closeAttractionsList()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="attractions-list-content">
        `;

        attractions.forEach(attraction => {
            attractionsHtml += `
                <div class="attraction-item" data-attraction-id="${attraction.id}" data-city="${cityName}">
                    <div class="attraction-item-img">
                        <img src="${attraction.image}" alt="${attraction.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <i class="fas fa-image" style="display: none;"></i>
                    </div>
                    <div class="attraction-item-info">
                        <h3>${attraction.name}</h3>
                        <div class="attraction-item-meta">
                            <span><i class="fas fa-star"></i> ${attraction.rating}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${attraction.location}</span>
                        </div>
                        <p class="attraction-item-desc">${attraction.introduction.substring(0, 80)}...</p>
                    </div>
                    <button class="view-detail-btn">
                        查看详情 <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            `;
        });

        attractionsHtml += `
                </div>
            </div>
        `;

        const modalContainer = document.createElement('div');
        modalContainer.id = 'attractionsListModal';
        modalContainer.className = 'modal-overlay';
        modalContainer.innerHTML = attractionsHtml;
        document.body.appendChild(modalContainer);

        setTimeout(() => {
            modalContainer.classList.add('active');
        }, 10);

        bindAttractionItemEvents();
    }

    function closeAttractionsList() {
        const modal = document.getElementById('attractionsListModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    }

    function bindAttractionItemEvents() {
        const attractionItems = document.querySelectorAll('.attraction-item');
        attractionItems.forEach(item => {
            item.addEventListener('click', function() {
                const attractionId = this.dataset.attractionId;
                const cityName = this.dataset.city;
                const attractions = cityAttractions[cityName];
                const attraction = attractions.find(a => a.id === parseInt(attractionId));
                
                if (attraction) {
                    closeAttractionsList();
                    setTimeout(() => {
                        window.switchSection('attraction');
                        loadAttractionDetailData(attraction);
                    }, 300);
                }
            });
        });

        const closeBtn = document.querySelector('.attractions-list-modal .close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeAttractionsList);
        }
    }

    function loadAttractionDetailData(attraction) {
        document.getElementById('attractionName').textContent = attraction.name;
        document.getElementById('attractionTitle').textContent = attraction.name;
        document.getElementById('attractionLocation').textContent = attraction.location;
        document.getElementById('attractionRating').textContent = attraction.rating + '分';
        document.getElementById('attractionHours').textContent = attraction.hours;
        document.getElementById('attractionIntroduction').textContent = attraction.introduction;
        document.getElementById('attractionTicket').textContent = attraction.ticket;
        document.getElementById('attractionTransportation').textContent = attraction.transportation;

        const mainImage = document.getElementById('attractionMainImage');
        if (mainImage) {
            mainImage.innerHTML = `<img src="${attraction.image}" alt="${attraction.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><i class="fas fa-image" style="display: none;"></i>`;
        }

        const thumbnails = document.getElementById('attractionThumbnails');
        if (thumbnails) {
            thumbnails.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                const thumb = document.createElement('div');
                thumb.className = 'thumbnail' + (i === 0 ? ' active' : '');
                thumb.innerHTML = `<img src="${attraction.image}" alt="${attraction.name}">`;
                thumbnails.appendChild(thumb);
            }
        }

        const reviews = document.getElementById('attractionReviews');
        if (reviews) {
            reviews.innerHTML = `
                <div class="review-item">
                    <div class="review-header">
                        <div class="review-avatar">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div class="review-user">
                            <span class="review-username">游客${Math.floor(Math.random() * 1000)}</span>
                            <span class="review-time">${Math.floor(Math.random() * 30) + 1}天前</span>
                        </div>
                        <div class="review-rating">
                            ${'★'.repeat(Math.floor(attraction.rating))}${'☆'.repeat(5 - Math.floor(attraction.rating))}
                        </div>
                    </div>
                    <p class="review-content">${attraction.name}真的太棒了！强烈推荐大家来参观，绝对不虚此行！</p>
                </div>
            `;
        }
    }

    // ==================== 围炉交游功能 ====================
    initGatheringFeature();

    function initGatheringFeature() {
        // 模拟旅伴数据
        const mockTravelers = [
            { id: 1, name: '小雨', avatar: '', location: '北京', date: '2024-04-15', type: '自由行', tags: ['摄影', '美食'], status: 'online', distance: '0.5km', bio: '喜欢拍照的吃货，正在北京旅行' },
            { id: 2, name: '阿杰', avatar: '', location: '北京', date: '2024-04-15', type: '背包客', tags: ['徒步', '历史'], status: 'online', distance: '1.2km', bio: '历史爱好者，想找人一起逛故宫' },
            { id: 3, name: 'Lisa', avatar: '', location: '上海', date: '2024-04-20', type: '自由行', tags: ['购物', '咖啡'], status: 'online', distance: '0.8km', bio: '来自广州，喜欢探索城市角落' },
            { id: 4, name: '大伟', avatar: '', location: '西安', date: '2024-04-18', type: '自驾游', tags: ['自驾', '美食'], status: 'offline', distance: '2.1km', bio: '自驾穿越中国，寻找地道美食' },
            { id: 5, name: '晓晓', avatar: '', location: '成都', date: '2024-04-22', type: '自由行', tags: ['熊猫', '火锅'], status: 'online', distance: '0.3km', bio: '来看大熊猫，求火锅搭子' },
            { id: 6, name: '旅行者007', avatar: '', location: '杭州', date: '2024-04-25', type: '跟团游', tags: ['西湖', '茶文化'], status: 'online', distance: '1.5km', bio: '第一次来杭州，想找人一起游西湖' }
        ];

        // 模拟记忆墙数据
        const mockMemories = [
            { id: 1, user: '小雨', avatar: '', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop', location: '北京·故宫', message: '红墙黄瓦，历史的厚重感扑面而来', likes: 23 },
            { id: 2, user: '阿杰', avatar: '', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400&h=300&fit=crop', location: '上海·外滩', message: '夜景真的太美了！', likes: 45 },
            { id: 3, user: 'Lisa', avatar: '', image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=400&h=300&fit=crop', location: '西安·兵马俑', message: '震撼人心的古代工艺', likes: 32 },
            { id: 4, user: '晓晓', avatar: '', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop', location: '成都·大熊猫基地', message: '滚滚太可爱了！', likes: 67 }
        ];

        // 模拟活动数据
        const mockEvents = [
            { id: 1, name: '故宫摄影约拍', location: '北京·故宫博物院', time: '2024-04-16 09:00', type: 'photo', creator: '小雨', participants: 3, limit: 6, status: 'open' },
            { id: 2, name: '外滩夜景漫步', location: '上海·外滩', time: '2024-04-17 19:00', type: 'night', creator: 'Lisa', participants: 5, limit: 8, status: 'open' },
            { id: 3, name: '回民街美食探索', location: '西安·回民街', time: '2024-04-18 18:00', type: 'food', creator: '大伟', participants: 2, limit: 4, status: 'open' },
            { id: 4, name: '宽窄巷子咖啡时光', location: '成都·宽窄巷子', time: '2024-04-19 15:00', type: 'coffee', creator: '晓晓', participants: 4, limit: 6, status: 'full' }
        ];

        // 渲染旅伴列表
        function renderTravelers(travelers) {
            const grid = document.getElementById('travelersGrid');
            if (!grid) return;

            grid.innerHTML = travelers.map(traveler => `
                <div class="traveler-card" data-id="${traveler.id}">
                    <div class="traveler-status ${traveler.status}">
                        <i class="fas fa-circle"></i>
                    </div>
                    <div class="traveler-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <h3 class="traveler-name">${traveler.name}</h3>
                    <p class="traveler-bio">${traveler.bio}</p>
                    <div class="traveler-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${traveler.location}</span>
                        <span><i class="fas fa-calendar"></i> ${traveler.date}</span>
                    </div>
                    <div class="traveler-tags">
                        ${traveler.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="traveler-actions">
                        <button class="btn-message" onclick="openChat(${traveler.id}, '${traveler.name}')">
                            <i class="fas fa-comment"></i> 私信
                        </button>
                        <button class="btn-memory" onclick="openExchangeMemory(${traveler.id}, '${traveler.name}')">
                            <i class="fas fa-camera"></i> 交换记忆
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // 渲染记忆墙
        function renderMemoryWall(memories) {
            const wall = document.getElementById('memoryWall');
            if (!wall) return;

            wall.innerHTML = memories.map(memory => `
                <div class="memory-card" data-id="${memory.id}">
                    <div class="memory-image">
                        <img src="${memory.image}" alt="${memory.location}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <i class="fas fa-image" style="display: none;"></i>
                    </div>
                    <div class="memory-info">
                        <div class="memory-user">
                            <i class="fas fa-user-circle"></i>
                            <span>${memory.user}</span>
                        </div>
                        <p class="memory-location"><i class="fas fa-map-marker-alt"></i> ${memory.location}</p>
                        <p class="memory-message">${memory.message}</p>
                        <div class="memory-stats">
                            <span><i class="fas fa-heart"></i> ${memory.likes}</span>
                            <button class="btn-exchange" onclick="exchangeThisMemory(${memory.id})">
                                <i class="fas fa-exchange-alt"></i> 交换
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // 渲染活动列表
        function renderEvents(events) {
            const list = document.getElementById('eventsList');
            if (!list) return;

            const typeIcons = {
                coffee: 'fa-coffee',
                hiking: 'fa-hiking',
                food: 'fa-utensils',
                photo: 'fa-camera',
                night: 'fa-moon'
            };

            list.innerHTML = events.map(event => `
                <div class="event-card ${event.status}" data-id="${event.id}">
                    <div class="event-icon">
                        <i class="fas ${typeIcons[event.type] || 'fa-calendar'}"></i>
                    </div>
                    <div class="event-info">
                        <h4>${event.name}</h4>
                        <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                        <p class="event-time"><i class="fas fa-clock"></i> ${event.time}</p>
                        <div class="event-creator">发起人：${event.creator}</div>
                    </div>
                    <div class="event-status">
                        <span class="participants">${event.participants}/${event.limit}人</span>
                        <button class="btn-join ${event.status === 'full' ? 'disabled' : ''}" ${event.status === 'full' ? 'disabled' : ''}>
                            ${event.status === 'full' ? '已满员' : '加入'}
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // 初始化渲染
        renderTravelers(mockTravelers);
        renderMemoryWall(mockMemories);
        renderEvents(mockEvents);

        // 搜索按钮事件
        const searchBtn = document.getElementById('searchTravelersBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', function() {
                const location = document.getElementById('gatheringLocation')?.value;
                const date = document.getElementById('gatheringDate')?.value;
                const type = document.getElementById('gatheringType')?.value;

                let filtered = mockTravelers;

                if (location) {
                    filtered = filtered.filter(t => t.location === location);
                }
                if (date) {
                    filtered = filtered.filter(t => t.date === date);
                }
                if (type) {
                    filtered = filtered.filter(t => t.type === type);
                }

                renderTravelers(filtered);

                if (filtered.length === 0) {
                    showToast('info', '搜索结果', '未找到符合条件的旅伴，试试其他条件吧');
                } else {
                    showToast('success', '搜索成功', `找到 ${filtered.length} 位旅伴`);
                }
            });
        }

        // 发起活动按钮
        const createEventBtn = document.getElementById('createEventBtn');
        if (createEventBtn) {
            createEventBtn.addEventListener('click', function() {
                const modal = document.getElementById('createEventModal');
                if (modal) {
                    modal.classList.add('active');
                }
            });
        }

        // 关闭活动模态框
        const closeEventModal = document.getElementById('closeEventModal');
        const cancelEventBtn = document.getElementById('cancelEventBtn');
        if (closeEventModal) {
            closeEventModal.addEventListener('click', () => {
                document.getElementById('createEventModal')?.classList.remove('active');
            });
        }
        if (cancelEventBtn) {
            cancelEventBtn.addEventListener('click', () => {
                document.getElementById('createEventModal')?.classList.remove('active');
            });
        }

        // 发布活动
        const submitEventBtn = document.getElementById('submitEventBtn');
        if (submitEventBtn) {
            submitEventBtn.addEventListener('click', function() {
                const name = document.getElementById('eventName')?.value;
                const location = document.getElementById('eventLocation')?.value;
                const time = document.getElementById('eventTime')?.value;
                const description = document.getElementById('eventDescription')?.value;
                const limit = document.getElementById('eventLimit')?.value;

                if (!name || !location || !time) {
                    showToast('warning', '信息不完整', '请填写活动名称、地点和时间');
                    return;
                }

                showToast('success', '发布成功', '您的活动已发布，等待其他旅伴加入！');
                document.getElementById('createEventModal')?.classList.remove('active');
            });
        }

        // 活动类型选择
        const eventTypeBtns = document.querySelectorAll('.event-type-btn');
        eventTypeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                eventTypeBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // 打开私信聊天
    window.openChat = function(userId, userName) {
        const modal = document.getElementById('chatModal');
        const userNameEl = document.getElementById('chatUserName');
        const messagesContainer = document.getElementById('chatMessagesContainer');

        if (modal) {
            modal.classList.add('active');
            if (userNameEl) userNameEl.textContent = userName;

            // 模拟历史消息
            if (messagesContainer) {
                messagesContainer.innerHTML = `
                    <div class="chat-message system">
                        <span>你们现在可以开始聊天了</span>
                    </div>
                    <div class="chat-message received">
                        <div class="message-avatar"><i class="fas fa-user-circle"></i></div>
                        <div class="message-content">
                            <p>你好！我也在计划去这里旅行，有兴趣一起吗？</p>
                            <span class="message-time">10:30</span>
                        </div>
                    </div>
                `;
            }
        }
    };

    // 打开交换记忆
    window.openExchangeMemory = function(userId, userName) {
        const modal = document.getElementById('exchangeMemoryModal');
        if (modal) {
            modal.classList.add('active');
        }
    };

    // 交换特定记忆
    window.exchangeThisMemory = function(memoryId) {
        const modal = document.getElementById('exchangeMemoryModal');
        if (modal) {
            modal.classList.add('active');
        }
    };

    // 关闭私信聊天
    const closeChatModal = document.getElementById('closeChatModal');
    if (closeChatModal) {
        closeChatModal.addEventListener('click', () => {
            document.getElementById('chatModal')?.classList.remove('active');
        });
    }

    // 发送消息
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const chatMessageInput = document.getElementById('chatMessageInput');

    if (sendMessageBtn && chatMessageInput) {
        sendMessageBtn.addEventListener('click', sendChatMessage);
        chatMessageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }

    function sendChatMessage() {
        const input = document.getElementById('chatMessageInput');
        const container = document.getElementById('chatMessagesContainer');

        if (!input || !container) return;

        const message = input.value.trim();
        if (!message) return;

        // 添加发送的消息
        const time = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
        const messageEl = document.createElement('div');
        messageEl.className = 'chat-message sent';
        messageEl.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">${time}</span>
            </div>
        `;
        container.appendChild(messageEl);
        input.value = '';
        container.scrollTop = container.scrollHeight;

        // 模拟对方回复
        setTimeout(() => {
            const replyEl = document.createElement('div');
            replyEl.className = 'chat-message received';
            replyEl.innerHTML = `
                <div class="message-avatar"><i class="fas fa-user-circle"></i></div>
                <div class="message-content">
                    <p>收到！我们可以详细聊聊行程安排。</p>
                    <span class="message-time">${new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            `;
            container.appendChild(replyEl);
            container.scrollTop = container.scrollHeight;
        }, 1500);
    }

    // 交换记忆功能
    const memoryUploadArea = document.getElementById('memoryUploadArea');
    const memoryFileInput = document.getElementById('memoryFileInput');
    const memoryPreview = document.getElementById('memoryPreview');
    const memoryPreviewImg = document.getElementById('memoryPreviewImg');
    const removeMemoryBtn = document.getElementById('removeMemoryBtn');

    if (memoryUploadArea && memoryFileInput) {
        memoryUploadArea.addEventListener('click', () => memoryFileInput.click());
        memoryFileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    if (memoryPreviewImg) memoryPreviewImg.src = e.target.result;
                    if (memoryPreview) memoryPreview.style.display = 'block';
                    memoryUploadArea.style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (removeMemoryBtn) {
        removeMemoryBtn.addEventListener('click', function() {
            if (memoryPreview) memoryPreview.style.display = 'none';
            if (memoryUploadArea) memoryUploadArea.style.display = 'block';
            if (memoryFileInput) memoryFileInput.value = '';
        });
    }

    // 关闭交换记忆模态框
    const closeMemoryModal = document.getElementById('closeMemoryModal');
    const cancelMemoryBtn = document.getElementById('cancelMemoryBtn');

    if (closeMemoryModal) {
        closeMemoryModal.addEventListener('click', () => {
            document.getElementById('exchangeMemoryModal')?.classList.remove('active');
        });
    }
    if (cancelMemoryBtn) {
        cancelMemoryBtn.addEventListener('click', () => {
            document.getElementById('exchangeMemoryModal')?.classList.remove('active');
        });
    }

    // 提交交换记忆
    const submitMemoryBtn = document.getElementById('submitMemoryBtn');
    if (submitMemoryBtn) {
        submitMemoryBtn.addEventListener('click', function() {
            const message = document.getElementById('memoryMessage')?.value;
            showToast('success', '交换成功', '您的记忆已发送，等待对方回应！');
            document.getElementById('exchangeMemoryModal')?.classList.remove('active');
        });
    }

    // ==================== 规划筛选功能 ====================
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选规划卡片
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
        
        // 默认展开
        filterContent.classList.remove('collapsed');
    }
    
    function updatePlansEmptyTip(visibleCount, message, subMessage) {
        let emptyTip = document.getElementById('plansEmptyTip');
        if (visibleCount === 0) {
            if (!emptyTip) {
                emptyTip = document.createElement('div');
                emptyTip.id = 'plansEmptyTip';
                emptyTip.className = 'plans-empty-tip';
                emptyTip.innerHTML = `
                    <i class="fas fa-search"></i>
                    <p>${message}</p>
                    <span>${subMessage}</span>
                `;
                document.getElementById('plansContainer').appendChild(emptyTip);
            } else {
                emptyTip.querySelector('p').textContent = message;
                const tipSubMessage = emptyTip.querySelector('span');
                if (tipSubMessage) tipSubMessage.textContent = subMessage;
                emptyTip.style.display = 'block';
            }
            return;
        }

        if (emptyTip) {
            emptyTip.style.display = 'none';
        }
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
                        showToast('success', '定位成功', '已为您筛选附近的旅游规划');
                        // 这里可以根据经纬度筛选附近的规划
                        filterPlansByDistance(latitude, longitude);
                    },
                    function(error) {
                        getLocationBtn.innerHTML = '<i class="fas fa-location-dot"></i> 附近';
                        showToast('error', '定位失败', '无法获取您的位置信息');
                    }
                );
            } else {
                showToast('error', '不支持定位', '您的浏览器不支持地理定位功能');
            }
        });
    }
    
    // 根据距离筛选规划
    function filterPlansByDistance(latitude, longitude) {
        const planCards = document.querySelectorAll('.plan-card');
        let visibleCount = 0;
        
        // 模拟距离计算（实际项目中应该使用真实的地理位置数据）
        planCards.forEach(card => {
            // 这里只是模拟，实际应该根据卡片的真实位置计算距离
            const randomDistance = Math.random() * 150; // 模拟0-150km的距离
            
            if (randomDistance <= 50) { // 显示50km内的规划
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });
        
        updatePlansEmptyTip(visibleCount, '附近暂无旅游规划', '试试其他筛选条件...');
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
        
        // 同步更新筛选按钮状态
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === destination) {
                btn.classList.add('active');
            }
        });
        
        updatePlansEmptyTip(visibleCount, `暂无 "${destination}" 的相关规划`, '敬请期待更多路线...');
    }
    
    // 暴露到全局
    window.filterPlansByDestination = filterPlansByDestination;

    // ==================== 个人中心菜单 ====================
    const menuItems = document.querySelectorAll('.profile-menu .menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.dataset.tab;
            switchProfileTab(targetTab);
        });
    });

    // 切换个人中心标签页
    function switchProfileTab(tabName) {
        // 更新菜单激活状态
        menuItems.forEach(mi => {
            mi.classList.remove('active');
            if (mi.dataset.tab === tabName) {
                mi.classList.add('active');
            }
        });
        
        // 切换内容区域
        const sections = document.querySelectorAll('.profile-section');
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.dataset.section === tabName) {
                section.classList.add('active');
            }
        });
        
        // 如果切换到"我的喜欢"标签，更新喜欢列表
        if (tabName === 'favorites') {
            updateFavoritesList();
        }
    }

    // 暴露到全局，供下拉菜单使用
    window.switchProfileTab = switchProfileTab;
    
    // ==================== 下拉菜单导航 ====================
    const dropdownItems = document.querySelectorAll('.user-dropdown .dropdown-item[href^="#profile"]');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetTab = this.dataset.tab;
            
            // 先切换到目标页面
            if (targetId && window.switchSection) {
                window.switchSection(targetId);
            }
            
            // 如果有指定标签，切换到对应标签；否则默认显示第一个标签
            if (window.switchProfileTab) {
                setTimeout(() => {
                    if (targetTab) {
                        window.switchProfileTab(targetTab);
                    } else {
                        // 个人中心默认显示我的计划
                        window.switchProfileTab('plans');
                    }
                }, 50);
            }
            
            // 关闭下拉菜单（通过移除hover状态）
            document.body.click();
        });
    });

    // ==================== 页面滚动效果 ====================
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // ==================== 平滑滚动 ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==================== 景点详情功能 ====================

    // 加载景点详情
    function loadAttractionDetails(destination) {
        // 调用API获取景点详情
        fetch(`/api/attractions/${destination}`)
        .then(response => response.json())
        .then(data => {
            if (data.success && data.attraction) {
                const attraction = data.attraction;
                
                // 更新页面标题和描述
                document.getElementById('attractionName').textContent = attraction.name;
                document.getElementById('attractionDesc').textContent = `${attraction.location} · 评分 ${attraction.rating}`;
                document.getElementById('attractionTitle').textContent = attraction.name;
                
                // 更新基本信息
                document.getElementById('attractionLocation').textContent = attraction.location;
                document.getElementById('attractionRating').textContent = attraction.rating;
                document.getElementById('attractionHours').textContent = attraction.hours;
                
                // 更新详细信息
                document.getElementById('attractionIntroduction').textContent = attraction.introduction;
                document.getElementById('attractionTicket').textContent = attraction.ticket;
                document.getElementById('attractionTransportation').textContent = attraction.transportation;
                
                // 更新图片
                const mainImage = document.getElementById('attractionMainImage');
                const thumbnails = document.getElementById('attractionThumbnails');
                
                // 清空现有内容
                mainImage.innerHTML = '';
                thumbnails.innerHTML = '';
                
                // 添加主图
                if (attraction.images && attraction.images.length > 0) {
                    const img = document.createElement('img');
                    img.src = attraction.images[0];
                    img.alt = attraction.name;
                    mainImage.appendChild(img);
                    
                    // 添加缩略图
                    attraction.images.forEach((image, index) => {
                        const thumbnail = document.createElement('div');
                        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                        thumbnail.innerHTML = `<img src="${image}" alt="${attraction.name} ${index + 1}">`;
                        
                        // 点击缩略图切换主图
                        thumbnail.addEventListener('click', function() {
                            // 更新主图
                            mainImage.innerHTML = `<img src="${image}" alt="${attraction.name}">`;
                            
                            // 更新缩略图状态
                            thumbnails.querySelectorAll('.thumbnail').forEach(thumb => {
                                thumb.classList.remove('active');
                            });
                            this.classList.add('active');
                        });
                        
                        thumbnails.appendChild(thumbnail);
                    });
                } else {
                    // 没有图片时显示默认图标
                    mainImage.innerHTML = '<i class="fas fa-image"></i>';
                }
                
                // 更新用户评价
                const reviewsContainer = document.getElementById('attractionReviews');
                reviewsContainer.innerHTML = '';
                
                if (attraction.reviews && attraction.reviews.length > 0) {
                    attraction.reviews.forEach(review => {
                        const reviewItem = document.createElement('div');
                        reviewItem.className = 'review-item';
                        reviewItem.innerHTML = `
                            <div class="review-header">
                                <span class="review-user">${review.user}</span>
                                <span class="review-time">${review.time}</span>
                            </div>
                            <div class="review-content">${review.content}</div>
                        `;
                        reviewsContainer.appendChild(reviewItem);
                    });
                } else {
                    reviewsContainer.innerHTML = '<p>暂无用户评价</p>';
                }
            } else {
                showToast('error', '加载失败', data.message || '景点信息加载失败');
            }
        })
        .catch(error => {
            console.error('加载景点详情失败:', error);
            showToast('error', '加载失败', '网络错误，请稍后重试');
        });
    }

    // 初始化景点详情页面的返回按钮
    function initAttractionPage() {
        const backBtn = document.getElementById('btnBackToHome');
        if (backBtn) {
            backBtn.addEventListener('click', function() {
                window.switchSection('home');
            });
        }
        
        const addToPlanBtn = document.getElementById('btnAddToPlan');
        if (addToPlanBtn) {
            addToPlanBtn.addEventListener('click', function() {
                showToast('success', '添加成功', '已将该景点添加到您的旅行计划');
            });
        }
    }

    // ==================== 商家认证功能 ====================

// 打开商家认证模态框
window.openMerchantModal = function() {
    const modal = document.getElementById('merchantModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

// 关闭商家认证模态框
window.closeMerchantModal = function() {
    const modal = document.getElementById('merchantModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// 提交商家认证表单
window.submitMerchantForm = function() {
    const form = document.getElementById('merchantForm');
    const name = document.getElementById('merchantName').value;
    const address = document.getElementById('merchantAddress').value;
    const phone = document.getElementById('merchantPhone').value;
    const license = document.getElementById('merchantLicense').files[0];
    const description = document.getElementById('merchantDescription').value;

    if (!name || !address || !phone || !license) {
        showToast('warning', '信息不完整', '请填写所有必填字段并上传营业执照');
        return;
    }

    // 模拟提交认证
    showToast('success', '提交成功', '您的商家认证申请已提交，我们将尽快审核');
    
    // 关闭模态框
    closeMerchantModal();
    
    // 模拟认证成功（实际项目中应该由后端处理）
    setTimeout(() => {
        // 保存认证状态
        localStorage.setItem('merchantVerified', 'true');
        localStorage.setItem('merchantName', name);
        
        // 更新UI
        updateMerchantStatus();
        showToast('success', '认证成功', '您已成功通过商家认证！');
    }, 1000);
};

// 更新商家认证状态
function updateMerchantStatus() {
    const isVerified = localStorage.getItem('merchantVerified') === 'true';
    const merchantStatus = document.getElementById('merchantStatus');
    const merchantBtn = document.getElementById('merchantBtn');
    
    if (merchantStatus) {
        if (isVerified) {
            merchantStatus.textContent = '已认证';
            merchantStatus.style.color = '#27ae60';
            if (merchantBtn) {
                merchantBtn.innerHTML = '<i class="fas fa-check-circle"></i> 已认证';
                merchantBtn.disabled = true;
                merchantBtn.classList.add('disabled');
            }
        } else {
            merchantStatus.textContent = '未认证';
            merchantStatus.style.color = '';
            if (merchantBtn) {
                merchantBtn.innerHTML = '<i class="fas fa-store"></i> 申请认证';
                merchantBtn.disabled = false;
                merchantBtn.classList.remove('disabled');
            }
        }
    }
    
    // 更新个人中心头像旁的商家认证徽章
    updateMerchantBadge();
    
    // 更新发布店面信息按钮
    updateMerchantPostButton();
}

// 更新个人中心头像旁的商家认证徽章
function updateMerchantBadge() {
    const isVerified = localStorage.getItem('merchantVerified') === 'true';
    const profileAvatar = document.getElementById('profileAvatar');
    
    if (profileAvatar) {
        // 检查是否已存在徽章
        let badge = profileAvatar.querySelector('.merchant-badge');
        
        if (isVerified) {
            if (!badge) {
                badge = document.createElement('div');
                badge.className = 'merchant-badge';
                badge.innerHTML = '<i class="fas fa-shopping-bag"></i>';
                badge.title = '已认证商家';
                profileAvatar.appendChild(badge);
            }
        } else {
            if (badge) {
                badge.remove();
            }
        }
    }
}

// 更新发布店面信息按钮
function updateMerchantPostButton() {
    const isVerified = localStorage.getItem('merchantVerified') === 'true';
    
    // 检查旅行日志页面是否存在
    const travelogPage = document.querySelector('#profile [data-section="travelog"]');
    if (travelogPage) {
        // 检查是否已存在发布店面信息按钮
        let merchantPostBtn = travelogPage.querySelector('.btn-merchant-post');
        
        if (isVerified) {
            if (!merchantPostBtn) {
                // 在查看全部按钮旁添加发布店面信息按钮
                const btnContainer = travelogPage.querySelector('div[style*="display: flex; justify-content: space-between;"]');
                if (btnContainer) {
                    merchantPostBtn = document.createElement('button');
                    merchantPostBtn.className = 'btn-primary btn-merchant-post';
                    merchantPostBtn.style.padding = '8px 16px';
                    merchantPostBtn.style.fontSize = '14px';
                    merchantPostBtn.innerHTML = '<i class="fas fa-store"></i> 发布店面信息';
                    merchantPostBtn.onclick = openMerchantPostModal;
                    btnContainer.appendChild(merchantPostBtn);
                }
            }
        } else {
            if (merchantPostBtn) {
                merchantPostBtn.remove();
            }
        }
    }
}

// 打开发布店面信息模态框
function openMerchantPostModal() {
    // 这里可以实现发布店面信息的模态框
    showToast('info', '功能开发中', '发布店面信息功能正在开发中，敬请期待！');
}

// 初始化商家认证状态
function initMerchantStatus() {
    updateMerchantStatus();
}

// ==================== 初始化 ====================
initAttractionPage();
initMerchantStatus();
console.log('旅途网站已加载完成！');
});

// ==================== 登录注册功能 ====================
const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const switchForms = document.querySelectorAll('.switch-form');
const userMenu = document.getElementById('userMenu');
const logoutBtn = document.getElementById('logoutBtn');

// 打开登录模态框
if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        openModal();
    });
}

// 关闭模态框
if (closeModal) {
    closeModal.addEventListener('click', closeAuthModal);
}

if (authModal) {
    authModal.addEventListener('click', function(e) {
        if (e.target === authModal) {
            closeAuthModal();
        }
    });
}

function openModal() {
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
    // 重置表单
    setTimeout(() => {
        document.querySelectorAll('.modal-forms form').forEach(form => form.reset());
        document.getElementById('passwordStrength').className = 'password-strength';
    }, 300);
}

// 切换登录/注册表单
switchForms.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.dataset.target;
        
        if (target === 'register') {
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
        } else {
            registerForm.classList.remove('active');
            loginForm.classList.add('active');
        }
    });
});

// 密码可见性切换
document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const icon = this.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// 密码强度检测
const regPassword = document.getElementById('regPassword');
const passwordStrength = document.getElementById('passwordStrength');

if (regPassword) {
    regPassword.addEventListener('input', function() {
        const password = this.value;
        passwordStrength.classList.add('show');
        
        let strength = 0;
        if (password.length >= 6) strength++;
        if (password.length >= 10) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;
        
        passwordStrength.className = 'password-strength show';
        if (strength <= 2) {
            passwordStrength.classList.add('weak');
        } else if (strength <= 4) {
            passwordStrength.classList.add('medium');
        } else {
            passwordStrength.classList.add('strong');
        }
    });
}

// 登录表单提交
const loginFormEl = document.querySelector('#loginForm form');
if (loginFormEl) {
    loginFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // 调用登录API
        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, rememberMe })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('网络错误');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                // 登录成功
                const session = {
                    userId: data.user.id,
                    username: data.user.username,
                    email: data.user.email,
                    isLoggedIn: true,
                    token: data.token,
                    loginTime: new Date().toISOString()
                };
                
                if (rememberMe) {
                    localStorage.setItem('travel_session', JSON.stringify(session));
                } else {
                    sessionStorage.setItem('travel_session', JSON.stringify(session));
                }
                
                showToast('success', '登录成功', `欢迎回来，${data.user.username}！`);
                updateUIForLoggedInUser(data.user.username, data.user.email, data.user.id);
                closeAuthModal();
            } else {
                showToast('error', '登录失败', data.message);
            }
        })
        .catch(error => {
            console.error('登录失败:', error);
            
            // 如果后端不可用，使用本地模拟登录
            const users = JSON.parse(localStorage.getItem('travel_users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user || (email === 'user@example.com' && password === '123456')) {
                const userData = user || { id: 1, username: '旅行者', email: 'user@example.com' };
                
                const session = {
                    userId: userData.id,
                    username: userData.username,
                    email: userData.email,
                    isLoggedIn: true,
                    token: 'mock_token_' + Date.now(),
                    loginTime: new Date().toISOString()
                };
                
                if (rememberMe) {
                    localStorage.setItem('travel_session', JSON.stringify(session));
                } else {
                    sessionStorage.setItem('travel_session', JSON.stringify(session));
                }
                
                showToast('success', '登录成功', `欢迎回来，${userData.username}！`);
                updateUIForLoggedInUser(userData.username, userData.email, userData.id);
                closeAuthModal();
            } else {
                showToast('error', '登录失败', '邮箱或密码错误');
            }
        });
    });
}

// 注册表单提交
const registerFormEl = document.querySelector('#registerForm form');
if (registerFormEl) {
    registerFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        // 验证
        if (password.length < 6) {
            showToast('error', '注册失败', '密码长度至少6位');
            return;
        }
        
        if (password !== confirmPassword) {
            showToast('error', '注册失败', '两次输入的密码不一致');
            return;
        }
        
        if (!agreeTerms) {
            showToast('warning', '请同意条款', '请阅读并同意服务条款和隐私政策');
            return;
        }
        
        // 调用注册API
        fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password, confirmPassword })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('网络错误');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                showToast('success', '注册成功', '请使用新账号登录');
                
                // 切换到登录表单
                registerForm.classList.remove('active');
                loginForm.classList.add('active');
                
                // 填充邮箱
                document.getElementById('loginEmail').value = email;
            } else {
                showToast('error', '注册失败', data.message);
            }
        })
        .catch(error => {
            console.error('注册失败:', error);
            
            // 如果后端不可用，使用本地模拟注册
            const users = JSON.parse(localStorage.getItem('travel_users') || '[]');
            
            if (users.some(u => u.email === email)) {
                showToast('error', '注册失败', '该邮箱已被注册');
                return;
            }
            
            if (users.some(u => u.username === username)) {
                showToast('error', '注册失败', '该用户名已被使用');
                return;
            }
            
            const newUser = {
                id: users.length + 1,
                username,
                email,
                password,
                registerTime: new Date().toISOString()
            };
            
            users.push(newUser);
            localStorage.setItem('travel_users', JSON.stringify(users));
            
            showToast('success', '注册成功', '请使用新账号登录');
            
            // 切换到登录表单
            registerForm.classList.remove('active');
            loginForm.classList.add('active');
            
            // 填充邮箱
            document.getElementById('loginEmail').value = email;
        });
    });
}

// 退出登录
if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        localStorage.removeItem('travel_session');
        sessionStorage.removeItem('travel_session');
        
        updateUIForLoggedOutUser();
        showToast('success', '已退出', '期待您的再次访问');
    });
}

// 检查登录状态
function checkLoginStatus() {
    const session = JSON.parse(
        localStorage.getItem('travel_session') || 
        sessionStorage.getItem('travel_session') || 
        'null'
    );
    
    if (session && session.isLoggedIn) {
        updateUIForLoggedInUser(session.username, session.email);
        // 加载用户头像
        loadUserAvatar();
    }
}

// 更新UI为登录状态
function updateUIForLoggedInUser(username, email, userId) {
    if (loginBtn) loginBtn.classList.add('hidden');
    if (userMenu) {
        userMenu.classList.remove('hidden');
        document.getElementById('username').textContent = username;
    }
    
    // 同步用户信息到个人中心
    syncUserToProfile(username, email, userId);
    
    // 加载头像
    loadUserAvatar(userId);
}

// 同步用户信息到个人中心
function syncUserToProfile(username, email, userId) {
    // 保存userId到localStorage
    if (userId) {
        localStorage.setItem('travel_user_id', userId);
    }
    
    // 更新个人中心的用户名
    const profileNameEl = document.querySelector('.profile-details h2');
    if (profileNameEl) {
        profileNameEl.textContent = username;
    }
    
    // 更新设置页面的用户名和邮箱
    const settingUsername = document.getElementById('settingUsername');
    if (settingUsername && username) {
        settingUsername.textContent = username;
    }
    
    const settingEmail = document.getElementById('settingEmail');
    if (settingEmail && email) {
        settingEmail.textContent = email;
    }
    
    // 更新社区发布框的默认样式（在没有头像时显示渐变背景）
    const creatorAvatarImg = document.getElementById('creatorAvatarImg');
    const creatorAvatarIcon = document.getElementById('creatorAvatarIcon');
    if (creatorAvatarImg && !creatorAvatarImg.src) {
        // 如果没有头像图片，显示渐变背景
        const creatorAvatar = document.getElementById('creatorAvatar');
        if (creatorAvatar) {
            creatorAvatar.style.background = 'linear-gradient(135deg, var(--primary-color), #764ba2)';
            creatorAvatar.style.color = 'white';
        }
    }
    
    // 更新个人中心头像区域提示
    const profileAvatar = document.getElementById('profileAvatar');
    if (profileAvatar && username) {
        profileAvatar.title = `点击更换${username}的头像`;
    }
}

// 更新个人中心的喜欢列表
function updateFavoritesList() {
    // 获取所有点赞的内容（文章和旅行日志）
    const likedPosts = JSON.parse(localStorage.getItem('travel_liked_posts') || '[]');
    const likedLogs = JSON.parse(localStorage.getItem('travel_liked_logs') || '[]');
    
    // 合并所有喜欢的内容
    const allLiked = [...likedPosts, ...likedLogs];
    
    // 更新localStorage中的总喜欢列表
    localStorage.setItem('travel_all_liked', JSON.stringify(allLiked));
    
    // 更新个人中心的喜欢数量
    const likeStat = document.querySelector('.profile-stats .stat:nth-child(4) .stat-num');
    if (likeStat) {
        likeStat.textContent = allLiked.length;
    }
    
    const likesGrid = document.querySelector('.likes-grid');
    
    if (!likesGrid) return;
    
    if (allLiked.length === 0) {
        likesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                <i class="fas fa-heart" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;"></i>
                <p>还没有喜欢的文章</p>
                <p style="font-size: 14px;">去社区看看吧</p>
            </div>
        `;
        return;
    }
    
    // 按点赞时间倒序排列
    const sortedLiked = allLiked.sort((a, b) => new Date(b.likedAt) - new Date(a.likedAt));
    
    likesGrid.innerHTML = sortedLiked.map(item => {
        // 判断是文章还是旅行日志
        if (item.type === 'travelog') {
            // 旅行日志
            return `
                <div class="like-card" data-post-id="${item.id}" data-type="travelog">
                    <div class="like-img"><i class="fas fa-book"></i></div>
                    <div class="like-info">
                        <h4>${escapeHtml(item.title.substring(0, 30))}${item.title.length > 30 ? '...' : ''}</h4>
                        <p>${item.location ? escapeHtml(item.location) : '未知地点'} · 旅行日志</p>
                    </div>
                </div>
            `;
        } else if (item.type === 'destination') {
            // 热门目的地文章
            return `
                <div class="like-card" data-post-id="${item.id}" data-type="destination">
                    <div class="like-img"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="like-info">
                        <h4>${escapeHtml(item.content.substring(0, 30))}${item.content.length > 30 ? '...' : ''}</h4>
                        <p>${item.location ? escapeHtml(item.location) : '未知地点'} · ${item.author ? escapeHtml(item.author) : '匿名用户'}</p>
                    </div>
                </div>
            `;
        } else {
            // 文章
            return `
                <div class="like-card" data-post-id="${item.id}" data-type="post">
                    <div class="like-img"><i class="fas fa-image"></i></div>
                    <div class="like-info">
                        <h4>${escapeHtml(item.content.substring(0, 30))}${item.content.length > 30 ? '...' : ''}</h4>
                        <p>${item.location ? escapeHtml(item.location) : '未知地点'} · ${item.author ? escapeHtml(item.author) : '匿名用户'}</p>
                    </div>
                </div>
            `;
        }
    }).join('');
    
    // 为每个喜欢卡片添加点击事件
    document.querySelectorAll('.like-card').forEach(card => {
        card.addEventListener('click', function() {
            const postId = this.dataset.postId;
            const type = this.dataset.type;
            // 可以在这里实现跳转到对应帖子的功能
            if (type === 'travelog') {
                showToast('info', '查看文章', '跳转到旅行日志详情');
            } else if (type === 'destination') {
                showToast('info', '查看文章', '跳转到热门目的地文章');
            } else {
                showToast('info', '查看文章', '跳转到文章详情');
            }
        });
    });
}

// 初始化时加载喜欢列表
document.addEventListener('DOMContentLoaded', function() {
    updateFavoritesList();
    restoreLikeStatus();
});

// 恢复点赞状态
function restoreLikeStatus() {
    const likedPosts = JSON.parse(localStorage.getItem('travel_liked_posts') || '[]');
    
    // 恢复社区文章的点赞状态
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(postCard => {
        const contentP = postCard.querySelector('.post-content p');
        if (!contentP) return;
        
        const postContent = contentP.textContent;
        const postId = 'post_' + postContent.substring(0, 20).replace(/\s/g, '_');
        
        const likedPost = likedPosts.find(p => p.id === postId);
        const actionBtn = postCard.querySelector('.action-btn');
        const icon = actionBtn?.querySelector('.fa-heart');
        
        if (likedPost && icon && actionBtn) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#ff4757';
        }
    });
    
    // 恢复热门目的地文章的点赞状态
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(destCard => {
        const destName = destCard.dataset.destination;
        const textEl = destCard.querySelector('.post-text');
        if (!destName || !textEl) return;
        
        const postContent = textEl.textContent;
        const postId = 'dest_' + destName + '_' + postContent.substring(0, 15).replace(/\s/g, '_');
        
        const likedPost = likedPosts.find(p => p.id === postId);
        const likeBtn = destCard.querySelector('.destination-like-btn');
        const icon = likeBtn?.querySelector('.fa-heart');
        
        if (likedPost && icon && likeBtn) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#ff4757';
        }
    });
}

// 更新UI为未登录状态
function updateUIForLoggedOutUser() {
    if (loginBtn) loginBtn.classList.remove('hidden');
    if (userMenu) userMenu.classList.add('hidden');
    
    // 重置个人中心用户信息
    resetProfileUserInfo();
}

// 重置个人中心用户信息
function resetProfileUserInfo() {
    // 重置个人中心的用户名为默认值
    const profileNameEl = document.querySelector('.profile-details h2');
    if (profileNameEl) {
        profileNameEl.textContent = '旅行者';
    }
    
    // 重置社区发布框样式
    const creatorAvatar = document.getElementById('creatorAvatar');
    if (creatorAvatar) {
        creatorAvatar.style.background = '';
        creatorAvatar.style.color = '';
    }
    
    // 重置个人中心头像提示
    const profileAvatar = document.getElementById('profileAvatar');
    if (profileAvatar) {
        profileAvatar.title = '';
    }
    
    // 重置设置页面信息
    const settingUsername = document.getElementById('settingUsername');
    if (settingUsername) {
        settingUsername.textContent = '旅行者';
    }
    
    const settingEmail = document.getElementById('settingEmail');
    if (settingEmail) {
        settingEmail.textContent = 'user@example.com';
    }
    
    // 清除所有头像显示
    clearAllAvatars();
}

// ==================== 头像上传功能 ====================

// 加载用户头像
function loadUserAvatar(userId) {
    if (!userId) {
        userId = localStorage.getItem('travel_user_id');
    }
    
    if (userId) {
        // 调用API获取头像
        fetch(`/api/avatar/${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.success && data.avatarUrl) {
                updateAllAvatars(data.avatarUrl);
            }
        })
        .catch(error => {
            console.error('获取头像失败:', error);
        });
    }
}

// 更新所有头像显示
function updateAllAvatars(avatarData) {
    // 个人中心头像
    const profileAvatarImg = document.getElementById('avatarImg');
    const profileAvatarIcon = document.getElementById('avatarIcon');
    if (profileAvatarImg) {
        profileAvatarImg.src = avatarData;
        profileAvatarImg.style.display = 'block';
        if (profileAvatarIcon) profileAvatarIcon.style.display = 'none';
    }
    
    // 导航栏头像
    const navAvatarImg = document.getElementById('navAvatarImg');
    const navAvatarIcon = document.getElementById('navAvatarIcon');
    if (navAvatarImg) {
        navAvatarImg.src = avatarData;
        navAvatarImg.style.display = 'block';
        if (navAvatarIcon) navAvatarIcon.style.display = 'none';
    }
    
    // 社区发布框头像
    const creatorAvatarImg = document.getElementById('creatorAvatarImg');
    const creatorAvatarIcon = document.getElementById('creatorAvatarIcon');
    const creatorAvatar = document.getElementById('creatorAvatar');
    if (creatorAvatarImg) {
        creatorAvatarImg.src = avatarData;
        creatorAvatarImg.style.display = 'block';
        if (creatorAvatarIcon) creatorAvatarIcon.style.display = 'none';
        // 移除渐变背景
        if (creatorAvatar) {
            creatorAvatar.style.background = 'transparent';
        }
    }
}

// 清除所有头像显示
function clearAllAvatars() {
    // 个人中心头像
    const profileAvatarImg = document.getElementById('avatarImg');
    const profileAvatarIcon = document.getElementById('avatarIcon');
    if (profileAvatarImg) {
        profileAvatarImg.src = '';
        profileAvatarImg.style.display = 'none';
        if (profileAvatarIcon) profileAvatarIcon.style.display = 'block';
    }
    
    // 导航栏头像
    const navAvatarImg = document.getElementById('navAvatarImg');
    const navAvatarIcon = document.getElementById('navAvatarIcon');
    if (navAvatarImg) {
        navAvatarImg.src = '';
        navAvatarImg.style.display = 'none';
        if (navAvatarIcon) navAvatarIcon.style.display = 'block';
    }
    
    // 社区发布框头像
    const creatorAvatarImg = document.getElementById('creatorAvatarImg');
    const creatorAvatarIcon = document.getElementById('creatorAvatarIcon');
    const creatorAvatar = document.getElementById('creatorAvatar');
    if (creatorAvatarImg) {
        creatorAvatarImg.src = '';
        creatorAvatarImg.style.display = 'none';
        if (creatorAvatarIcon) creatorAvatarIcon.style.display = 'block';
        // 恢复默认样式
        if (creatorAvatar) {
            creatorAvatar.style.background = '';
            creatorAvatar.style.color = '';
        }
    }
}

// 初始化头像上传功能
document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.getElementById('profileAvatar');
    const avatarInput = document.getElementById('avatarInput');
    
    if (profileAvatar && avatarInput) {
        // 点击头像触发文件选择
        profileAvatar.addEventListener('click', function() {
            // 检查是否已登录
            const session = JSON.parse(
                localStorage.getItem('travel_session') || 
                sessionStorage.getItem('travel_session') || 
                'null'
            );
            
            if (!session || !session.isLoggedIn) {
                showToast('warning', '请先登录', '登录后才能修改头像');
                openModal();
                return;
            }
            
            avatarInput.click();
        });
        
        // 文件选择后处理
        avatarInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            // 验证文件类型
            if (!file.type.startsWith('image/')) {
                showToast('error', '文件类型错误', '请选择图片文件');
                return;
            }
            
            // 验证文件大小（限制5MB）
            if (file.size > 5 * 1024 * 1024) {
                showToast('error', '文件过大', '图片大小不能超过5MB');
                return;
            }
            
            // 获取用户信息
            const session = JSON.parse(
                localStorage.getItem('travel_session') || 
                sessionStorage.getItem('travel_session') || 
                'null'
            );
            
            if (!session || !session.userId) {
                showToast('error', '上传失败', '用户信息不存在');
                return;
            }
            
            // 创建FormData对象
            const formData = new FormData();
            formData.append('avatar', file);
            formData.append('userId', session.userId);
            
            // 上传头像
            fetch('/api/upload-avatar', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success && data.avatarUrl) {
                    // 更新所有头像显示
                    updateAllAvatars(data.avatarUrl);
                    showToast('success', '头像更新成功', '您的头像已更新');
                } else {
                    showToast('error', '上传失败', data.message || '头像上传失败');
                }
            })
            .catch(error => {
                console.error('上传失败:', error);
                showToast('error', '上传失败', '网络错误，请稍后重试');
            });
        });
    }
});

// Toast 提示函数
function showToast(type, title, message) {
    const container = document.getElementById('toastContainer');
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-circle'
    };
    
    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close"><i class="fas fa-times"></i></button>
    `;
    
    container.appendChild(toast);
    
    // 点击关闭
    toast.querySelector('.toast-close').addEventListener('click', () => {
        hideToast(toast);
    });
    
    // 自动关闭
    setTimeout(() => {
        hideToast(toast);
    }, 4000);
}

function hideToast(toast) {
    toast.classList.add('hiding');
    setTimeout(() => {
        toast.remove();
    }, 300);
}

// 社交登录按钮（演示）
document.querySelectorAll('.btn-social').forEach(btn => {
    btn.addEventListener('click', function() {
        const platform = this.classList.contains('wechat') ? '微信' :
                        this.classList.contains('qq') ? 'QQ' : '微博';
        showToast('info', '提示', `${platform}登录功能开发中...`);
    });
});

// ==================== 灵魂配对测试功能 ====================

// 性格测试题目
const personalityQuestions = [
    {
        question: "1. 你更喜欢哪种旅行方式？",
        options: [
            { value: 'A', text: '跟团游，有人安排好一切' },
            { value: 'B', text: '自由行，自己规划行程' },
            { value: 'C', text: '半自助游，既有安排又有自由时间' },
            { value: 'D', text: '背包客，随性而行' }
        ]
    },
    {
        question: "2. 你旅行时更注重什么？",
        options: [
            { value: 'A', text: '景点打卡，拍照发朋友圈' },
            { value: 'B', text: '体验当地文化和生活' },
            { value: 'C', text: '美食探索，品尝当地特色' },
            { value: 'D', text: '放松休息，远离城市喧嚣' }
        ]
    },
    {
        question: "3. 你喜欢在什么时间旅行？",
        options: [
            { value: 'A', text: '节假日，热闹有氛围' },
            { value: 'B', text: '淡季，人少价格便宜' },
            { value: 'C', text: '周末短途游' },
            { value: 'D', text: '说走就走，随时出发' }
        ]
    },
    {
        question: "4. 你旅行时的预算观念是？",
        options: [
            { value: 'A', text: '预算充足，享受为主' },
            { value: 'B', text: '性价比优先，合理消费' },
            { value: 'C', text: '经济实惠，能省则省' },
            { value: 'D', text: '视情况而定，灵活调整' }
        ]
    },
    {
        question: "5. 你旅行时的作息习惯是？",
        options: [
            { value: 'A', text: '早睡早起，充分利用时间' },
            { value: 'B', text: '睡到自然醒，轻松游玩' },
            { value: 'C', text: '根据行程安排调整' },
            { value: 'D', text: '熬夜玩到尽兴，白天补觉' }
        ]
    },
    {
        question: "6. 你更喜欢哪种类型的目的地？",
        options: [
            { value: 'A', text: '繁华都市，现代感强' },
            { value: 'B', text: '历史古镇，文化底蕴深厚' },
            { value: 'C', text: '自然风光，亲近大自然' },
            { value: 'D', text: '主题乐园，充满乐趣' }
        ]
    },
    {
        question: "7. 你旅行时的决策方式是？",
        options: [
            { value: 'A', text: '提前详细规划，按计划执行' },
            { value: 'B', text: '大致规划，随机应变' },
            { value: 'C', text: '听取他人建议，共同决定' },
            { value: 'D', text: '完全随性，走到哪算哪' }
        ]
    },
    {
        question: "8. 你如何看待旅途中的意外情况？",
        options: [
            { value: 'A', text: '会感到焦虑，希望一切顺利' },
            { value: 'B', text: '视为旅行的一部分，从容应对' },
            { value: 'C', text: '会提前做好预案，减少意外' },
            { value: 'D', text: '意外让旅行更有趣，喜欢惊喜' }
        ]
    },
    {
        question: "9. 你旅行时喜欢拍照吗？",
        options: [
            { value: 'A', text: '非常喜欢，每处都要拍照' },
            { value: 'B', text: '适度拍照，记录重要时刻' },
            { value: 'C', text: '不太喜欢拍照，更注重体验' },
            { value: 'D', text: '看心情，有时拍有时不拍' }
        ]
    },
    {
        question: "10. 你旅行时的社交倾向是？",
        options: [
            { value: 'A', text: '喜欢结交新朋友，扩大社交圈' },
            { value: 'B', text: '和旅伴深度交流，建立友谊' },
            { value: 'C', text: '保持适度距离，享受独处' },
            { value: 'D', text: '视情况而定，灵活调整' }
        ]
    },
    {
        question: "11. 你对旅行中的美食态度是？",
        options: [
            { value: 'A', text: '一定要尝试当地特色美食' },
            { value: 'B', text: '喜欢尝试，但也会吃熟悉的食物' },
            { value: 'C', text: '比较保守，倾向于熟悉的口味' },
            { value: 'D', text: '无所谓，填饱肚子就行' }
        ]
    },
    {
        question: "12. 你旅行时的购物习惯是？",
        options: [
            { value: 'A', text: '喜欢购物，会买很多纪念品' },
            { value: 'B', text: '适度购物，只买有意义的东西' },
            { value: 'C', text: '很少购物，注重体验而非物质' },
            { value: 'D', text: '视目的地而定，有特色就买' }
        ]
    },
    {
        question: "13. 你更喜欢哪种住宿方式？",
        options: [
            { value: 'A', text: '舒适的酒店，享受服务' },
            { value: 'B', text: '特色民宿，体验当地风情' },
            { value: 'C', text: '经济型住宿，节省预算' },
            { value: 'D', text: '露营或青旅，体验不同生活' }
        ]
    },
    {
        question: "14. 你旅行时的交通选择是？",
        options: [
            { value: 'A', text: '便捷舒适，优先选择飞机、高铁' },
            { value: 'B', text: '经济实惠，选择火车、汽车' },
            { value: 'C', text: '灵活自由，选择租车或自驾' },
            { value: 'D', text: '环保健康，选择公共交通或步行' }
        ]
    },
    {
        question: "15. 你如何处理旅途中的分歧？",
        options: [
            { value: 'A', text: '坚持自己的想法，希望他人妥协' },
            { value: 'B', text: '寻求共识，希望大家都满意' },
            { value: 'C', text: '愿意妥协，避免冲突' },
            { value: 'D', text: '各玩各的，之后再汇合' }
        ]
    },
    {
        question: "16. 你旅行前会做多少准备？",
        options: [
            { value: 'A', text: '大量准备，详细了解目的地' },
            { value: 'B', text: '适度准备，了解主要景点' },
            { value: 'C', text: '基本准备，只了解交通和住宿' },
            { value: 'D', text: '几乎不准备，到了再说' }
        ]
    },
    {
        question: "17. 你旅行时的体力状况如何？",
        options: [
            { value: 'A', text: '体力很好，喜欢长时间徒步' },
            { value: 'B', text: '体力一般，适度活动' },
            { value: 'C', text: '体力较差，喜欢轻松游览' },
            { value: 'D', text: '视情况而定，可调整强度' }
        ]
    },
    {
        question: "18. 你对旅行中的文化差异持什么态度？",
        options: [
            { value: 'A', text: '非常感兴趣，积极融入' },
            { value: 'B', text: '尊重差异，保持观察' },
            { value: 'C', text: '保持距离，避免冲突' },
            { value: 'D', text: '无所谓，专注自己的旅行' }
        ]
    },
    {
        question: "19. 你旅行时的消费风格是？",
        options: [
            { value: 'A', text: '慷慨大方，享受当下' },
            { value: 'B', text: '理性消费，注重品质' },
            { value: 'C', text: '精打细算，节省为主' },
            { value: 'D', text: '灵活消费，视情况而定' }
        ]
    },
    {
        question: "20. 你希望从旅行中获得什么？",
        options: [
            { value: 'A', text: '难忘的回忆和照片' },
            { value: 'B', text: '新的知识和体验' },
            { value: 'C', text: '放松和减压' },
            { value: 'D', text: '结交新朋友' }
        ]
    }
];

// 模拟用户数据（用于匹配结果）
const potentialPartners = [
    {
        name: '小明',
        avatar: 'M',
        bio: '喜欢自由行，注重体验当地文化，预算合理',
        tags: ['自由行', '文化探索', '美食爱好者'],
        // 20题偏好向量（A/B/C/D）
        answers: ['B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'A', 'A', 'B', 'B', 'D', 'B', 'A', 'B', 'A', 'B', 'B']
    },
    {
        name: '小红',
        avatar: 'X',
        bio: '热爱自然风光，喜欢徒步，环保旅行',
        tags: ['户外爱好者', '环保旅行', '自然风光'],
        answers: ['D', 'D', 'D', 'C', 'A', 'C', 'D', 'D', 'C', 'C', 'B', 'C', 'D', 'D', 'D', 'C', 'A', 'A', 'C', 'C']
    },
    {
        name: '小李',
        avatar: 'L',
        bio: '喜欢舒适的旅行体验，注重品质，喜欢拍照',
        tags: ['品质旅行', '摄影爱好者', '美食探索'],
        answers: ['C', 'A', 'A', 'A', 'B', 'A', 'A', 'C', 'A', 'B', 'A', 'A', 'A', 'A', 'B', 'A', 'C', 'B', 'A', 'A']
    }
];

// 灵魂配对测试变量
let currentQuestionIndex = 0;
let userAnswers = new Array(personalityQuestions.length).fill(null);
let hasCompletedSoulmateTest = false;
let lastSoulmateResult = null;

// 初始化灵魂配对功能
function initSoulmateTest() {
    // 绑定灵魂配对按钮点击事件
    const soulmateBtn = document.querySelector('.soulmate .feature-btn');
    if (soulmateBtn) {
        soulmateBtn.addEventListener('click', function() {
            openSoulmateModal();
        });
    }
    
    // 绑定关闭按钮事件
    const closeBtn = document.getElementById('closeSoulmateModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeSoulmateModal);
    }
    
    // 绑定测试导航按钮事件
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const submitBtn = document.getElementById('submitTest');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', showPreviousQuestion);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextQuestion);
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', submitTest);
    }
}

// 打开灵魂配对模态框
function openSoulmateModal() {
    const modal = document.getElementById('soulmateModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // 已完成过测试：直接展示上次结果
        if (hasCompletedSoulmateTest && lastSoulmateResult) {
            showMatchResult(lastSoulmateResult);
            return;
        }

        resetSoulmateTest();
    }
}

// 关闭灵魂配对模态框
function closeSoulmateModal() {
    const modal = document.getElementById('soulmateModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function resetSoulmateTest() {
    currentQuestionIndex = 0;
    userAnswers = new Array(personalityQuestions.length).fill(null);
    restoreTestActionButtons();
    showQuestion(currentQuestionIndex);
    updateProgress();
}

function restoreTestActionButtons() {
    const testActions = document.querySelector('.test-actions');
    if (!testActions) return;

    testActions.innerHTML = `
        <button class="btn-secondary" id="prevQuestion" disabled>上一题</button>
        <button class="btn-primary" id="nextQuestion">下一题</button>
        <button class="btn-primary" id="submitTest" style="display: none;">提交测试</button>
    `;

    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const submitBtn = document.getElementById('submitTest');

    if (prevBtn) prevBtn.addEventListener('click', showPreviousQuestion);
    if (nextBtn) nextBtn.addEventListener('click', showNextQuestion);
    if (submitBtn) submitBtn.addEventListener('click', submitTest);
}

// 显示指定问题
function showQuestion(index) {
    const testContent = document.getElementById('testContent');
    if (!testContent) return;
    
    const question = personalityQuestions[index];
    if (!question) return;
    
    // 生成问题和选项HTML
    let html = `
        <div class="question">
            <h4>${question.question}</h4>
            <div class="options">
    `;
    
    question.options.forEach((option, optionIndex) => {
        const isSelected = userAnswers[index] === option.value;
        html += `
                <div class="option ${isSelected ? 'selected' : ''}">
                    <input type="radio" name="question${index}" value="${option.value}" id="q${index}o${optionIndex}" ${isSelected ? 'checked' : ''}>
                    <label for="q${index}o${optionIndex}">${option.text}</label>
                </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    testContent.innerHTML = html;
    
    // 绑定选项点击事件
    const options = testContent.querySelectorAll('.option');
    options.forEach((option, optionIndex) => {
        option.addEventListener('click', function() {
            // 移除其他选项的选中状态
            options.forEach(opt => opt.classList.remove('selected'));
            // 添加当前选项的选中状态
            this.classList.add('selected');
            // 更新答案
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                userAnswers[index] = radio.value;
            }
        });
    });
    
    // 更新按钮状态
    updateButtonStates();
}

// 更新按钮状态
function updateButtonStates() {
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const submitBtn = document.getElementById('submitTest');
    
    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
    }
    
    if (nextBtn && submitBtn) {
        if (currentQuestionIndex === personalityQuestions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }
    }
}

// 显示上一题
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateProgress();
    }
}

// 显示下一题
function showNextQuestion() {
    // 检查是否已回答当前问题
    if (userAnswers[currentQuestionIndex] === null) {
        showToast('warning', '提示', '请选择一个选项');
        return;
    }
    
    if (currentQuestionIndex < personalityQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateProgress();
    }
}

// 更新进度条
function updateProgress() {
    const progressBar = document.getElementById('testProgressBar');
    const progressText = document.getElementById('testProgressText');
    
    if (progressBar && progressText) {
        const progress = ((currentQuestionIndex + 1) / personalityQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestionIndex + 1}/${personalityQuestions.length}`;
    }
}

// 提交测试
function submitTest() {
    // 检查是否所有问题都已回答
    if (userAnswers.includes(null)) {
        showToast('warning', '提示', '请回答所有问题');
        return;
    }
    
    // 计算匹配结果
    const matchResult = calculateMatchResult();
    hasCompletedSoulmateTest = true;
    lastSoulmateResult = matchResult;
    
    // 显示匹配结果
    showMatchResult(matchResult);
}

// 计算匹配结果
function calculateMatchResult() {
    const scoredPartners = potentialPartners
        .map(partner => ({
            ...partner,
            matchScore: calculatePartnerScore(userAnswers, partner.answers)
        }))
        .sort((a, b) => b.matchScore - a.matchScore);

    // 总分使用第一名匹配分，保证可解释和可复现
    const matchScore = scoredPartners.length ? scoredPartners[0].matchScore : 0;

    return {
        score: matchScore,
        tags: generateTags(),
        partners: scoredPartners
    };
}

function calculatePartnerScore(userVector, partnerVector) {
    if (!Array.isArray(userVector) || !Array.isArray(partnerVector) || userVector.length !== partnerVector.length) {
        return 0;
    }

    // A/B/C/D -> 0/1/2/3；距离越近相似度越高
    const optionValue = { A: 0, B: 1, C: 2, D: 3 };
    let total = 0;
    let matched = 0;

    userVector.forEach((answer, idx) => {
        const userValue = optionValue[answer];
        const partnerValue = optionValue[partnerVector[idx]];
        if (userValue === undefined || partnerValue === undefined) return;

        const distance = Math.abs(userValue - partnerValue); // 0~3
        const similarity = (3 - distance) / 3; // 1, 0.66, 0.33, 0
        total += similarity;
        matched++;
    });

    if (!matched) return 0;
    const rawScore = Math.round((total / matched) * 100);
    // 保持展示观感：最低60，最高100
    return Math.max(60, rawScore);
}

// 根据答案生成标签
function generateTags() {
    // 简单的标签生成逻辑
    const tagMap = {
        'A': ['跟团游', '景点打卡', '预算充足', '喜欢拍照'],
        'B': ['自由行', '文化探索', '性价比优先', '结交朋友'],
        'C': ['半自助游', '美食探索', '经济实惠', '提前规划'],
        'D': ['背包客', '自然风光', '灵活应变', '随性而行']
    };
    
    const tags = new Set();
    userAnswers.forEach(answer => {
        if (tagMap[answer]) {
            // 随机选择一个标签
            const randomTag = tagMap[answer][Math.floor(Math.random() * tagMap[answer].length)];
            tags.add(randomTag);
        }
    });
    
    // 最多返回5个标签
    return Array.from(tags).slice(0, 5);
}

// 显示匹配结果
function showMatchResult(result) {
    const testContent = document.getElementById('testContent');
    if (!testContent) return;
    
    // 生成结果HTML
    let html = `
        <div class="match-result">
            <h3>🎉 匹配完成！</h3>
            <p>根据你的回答，我们为你找到了最适合的旅行伙伴</p>
            <div class="match-score">${result.score}%</div>
            <div class="match-tags">
    `;
    
    // 添加标签
    result.tags.forEach(tag => {
        html += `<span class="match-tag">${tag}</span>`;
    });
    
    html += `
            </div>
            
            <div class="match-partners">
                <h4>推荐旅行伙伴</h4>
                <div class="partner-list">
    `;
    
    // 添加推荐伙伴
    result.partners.forEach(partner => {
        html += `
                    <div class="partner-card">
                        <div class="partner-avatar">${partner.avatar}</div>
                        <div class="partner-info">
                            <div class="partner-name">${partner.name}</div>
                            <div class="partner-bio">${partner.bio}</div>
                            <div class="partner-match">匹配度: ${partner.matchScore}%</div>
                        </div>
                        <button class="connect-btn">联系TA</button>
                    </div>
        `;
    });
    
    html += `
                </div>
            </div>
        </div>
    `;
    
    testContent.innerHTML = html;
    
    // 显示结果操作按钮
    const testActions = document.querySelector('.test-actions');
    if (testActions) {
        testActions.innerHTML = `
            <button class="btn-secondary" id="restartTest">重新测试</button>
            <button class="btn-primary" id="finishTest">完成</button>
        `;

        // 绑定操作按钮事件
        const finishBtn = document.getElementById('finishTest');
        const restartBtn = document.getElementById('restartTest');
        if (finishBtn) {
            finishBtn.addEventListener('click', closeSoulmateModal);
        }
        if (restartBtn) {
            restartBtn.addEventListener('click', function() {
                hasCompletedSoulmateTest = false;
                lastSoulmateResult = null;
                resetSoulmateTest();
            });
        }
    }
    
    // 绑定联系按钮事件
    const connectBtns = testContent.querySelectorAll('.connect-btn');
    connectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showToast('success', '提示', '已发送联系请求');
        });
    });
}

// 在DOM加载完成后初始化灵魂配对功能
document.addEventListener('DOMContentLoaded', function() {
    initSoulmateTest();
});

// ==================== 规划详情页功能 ====================

// 路线数据
const planRoutesData = {
    '北京三日精华游': {
        days: [
            {
                day: 1,
                spots: [
                    { time: '08:00', name: '天安门广场', desc: '观看升旗仪式，感受庄严氛围' },
                    { time: '09:30', name: '故宫博物院', desc: '游览紫禁城，探索皇家宫殿的奥秘' },
                    { time: '14:00', name: '景山公园', desc: '登顶俯瞰故宫全景，拍摄经典照片' }
                ]
            },
            {
                day: 2,
                spots: [
                    { time: '07:00', name: '八达岭长城', desc: '登临万里长城，体验"不到长城非好汉"' },
                    { time: '14:00', name: '明十三陵', desc: '参观定陵地宫，了解明朝历史' }
                ]
            },
            {
                day: 3,
                spots: [
                    { time: '09:00', name: '颐和园', desc: '漫步皇家园林，欣赏昆明湖美景' },
                    { time: '14:00', name: '圆明园', desc: '探访万园之园遗址，铭记历史' },
                    { time: '17:00', name: '王府井大街', desc: '购物休闲，品尝北京小吃' }
                ]
            }
        ]
    },
    '上海都市三日游': {
        days: [
            {
                day: 1,
                spots: [
                    { time: '09:00', name: '外滩', desc: '欣赏万国建筑博览群，拍摄经典上海照' },
                    { time: '14:00', name: '南京路步行街', desc: '中华商业第一街，购物天堂' },
                    { time: '19:00', name: '外滩夜景', desc: '观赏浦江两岸璀璨夜景' }
                ]
            },
            {
                day: 2,
                spots: [
                    { time: '09:00', name: '东方明珠塔', desc: '登塔俯瞰上海全景，体验玻璃栈道' },
                    { time: '14:00', name: '上海博物馆', desc: '欣赏中国古代艺术珍品' },
                    { time: '18:00', name: '田子坊', desc: '漫步石库门弄堂，感受海派文化' }
                ]
            },
            {
                day: 3,
                spots: [
                    { time: '09:00', name: '迪士尼乐园', desc: '畅玩迪士尼主题乐园，圆童话梦想' }
                ]
            }
        ]
    },
    '西安古都四日游': {
        days: [
            {
                day: 1,
                spots: [
                    { time: '09:00', name: '兵马俑', desc: '世界第八大奇迹，秦始皇陵陪葬坑' },
                    { time: '14:00', name: '华清池', desc: '贵妃沐浴之地，欣赏长恨歌演出' }
                ]
            },
            {
                day: 2,
                spots: [
                    { time: '09:00', name: '大雁塔', desc: '登塔远眺，感受佛教文化' },
                    { time: '14:00', name: '陕西历史博物馆', desc: '了解中华文明五千年历史' },
                    { time: '18:00', name: '大唐不夜城', desc: '体验盛唐风貌，观赏夜景表演' }
                ]
            },
            {
                day: 3,
                spots: [
                    { time: '09:00', name: '古城墙', desc: '骑行古城墙，俯瞰西安全貌' },
                    { time: '14:00', name: '钟鼓楼', desc: '参观明代建筑，聆听晨钟暮鼓' },
                    { time: '18:00', name: '回民街', desc: '品尝正宗西北美食，感受市井文化' }
                ]
            },
            {
                day: 4,
                spots: [
                    { time: '09:00', name: '小雁塔', desc: '探访唐代佛教建筑' },
                    { time: '14:00', name: '大明宫遗址', desc: '感受盛唐皇宫的恢弘气势' }
                ]
            }
        ]
    },
    '成都美食五日游': {
        days: [
            {
                day: 1,
                spots: [
                    { time: '09:00', name: '大熊猫繁育基地', desc: '近距离观赏国宝大熊猫' },
                    { time: '14:00', name: '文殊院', desc: '品尝素斋，感受禅意' },
                    { time: '18:00', name: '锦里古街', desc: '体验三国文化，品尝成都小吃' }
                ]
            },
            {
                day: 2,
                spots: [
                    { time: '09:00', name: '宽窄巷子', desc: '漫步川西民居，体验慢生活' },
                    { time: '14:00', name: '人民公园', desc: '喝茶掏耳朵，体验成都休闲' },
                    { time: '18:00', name: '春熙路', desc: '购物美食，感受都市繁华' }
                ]
            },
            {
                day: 3,
                spots: [
                    { time: '09:00', name: '都江堰', desc: '参观世界文化遗产，了解水利奇迹' },
                    { time: '14:00', name: '青城山', desc: '登道教名山，享受清凉' }
                ]
            },
            {
                day: 4,
                spots: [
                    { time: '10:00', name: '武侯祠', desc: '祭拜诸葛亮，了解三国历史' },
                    { time: '14:00', name: '杜甫草堂', desc: '寻访诗圣故居，感受诗意' },
                    { time: '18:00', name: '火锅体验', desc: '品尝正宗四川火锅' }
                ]
            },
            {
                day: 5,
                spots: [
                    { time: '09:00', name: '金沙遗址', desc: '探索古蜀文明' },
                    { time: '14:00', name: '东郊记忆', desc: '文创园区打卡拍照' }
                ]
            }
        ]
    }
};

// 酒店数据
const hotelsData = {
    '北京': [
        { name: '北京饭店', stars: 5, score: 4.8, location: '天安门/王府井', price: 899 },
        { name: '故宫景山酒店', stars: 4, score: 4.6, location: '故宫/景山', price: 568 },
        { name: '后海四合院酒店', stars: 4, score: 4.7, location: '什刹海/后海', price: 688 },
        { name: '长城脚下民宿', stars: 3, score: 4.5, location: '八达岭长城', price: 328 }
    ],
    '上海': [
        { name: '和平饭店', stars: 5, score: 4.9, location: '外滩/南京东路', price: 1299 },
        { name: '外滩茂悦大酒店', stars: 5, score: 4.7, location: '外滩', price: 998 },
        { name: '新天地安达仕酒店', stars: 5, score: 4.8, location: '新天地', price: 1199 },
        { name: '田子坊精品民宿', stars: 3, score: 4.6, location: '田子坊', price: 458 }
    ],
    '西安': [
        { name: '西安索菲特传奇酒店', stars: 5, score: 4.8, location: '钟楼/鼓楼', price: 799 },
        { name: '大雁塔假日酒店', stars: 4, score: 4.6, location: '大雁塔', price: 458 },
        { name: '兵马俑主题酒店', stars: 3, score: 4.4, location: '兵马俑景区', price: 288 },
        { name: '回民街客栈', stars: 3, score: 4.5, location: '回民街', price: 238 }
    ],
    '成都': [
        { name: '博舍酒店', stars: 5, score: 4.9, location: '太古里/春熙路', price: 1088 },
        { name: '熊猫主题酒店', stars: 4, score: 4.7, location: '熊猫基地附近', price: 388 },
        { name: '宽窄巷子精品酒店', stars: 4, score: 4.6, location: '宽窄巷子', price: 468 },
        { name: '青城山温泉酒店', stars: 4, score: 4.8, location: '青城山景区', price: 588 }
    ],
    '南京': [
        { name: '金陵饭店', stars: 5, score: 4.8, location: '新街口', price: 699 },
        { name: '中山陵国际青年旅舍', stars: 3, score: 4.5, location: '中山陵景区', price: 188 },
        { name: '夫子庙秦淮河畔酒店', stars: 4, score: 4.6, location: '夫子庙/秦淮河', price: 428 },
        { name: '玄武湖假日酒店', stars: 4, score: 4.5, location: '玄武湖', price: 388 }
    ],
    '金华': [
        { name: '横店影视城酒店', stars: 4, score: 4.6, location: '横店影视城', price: 358 },
        { name: '广州街影视城精品酒店', stars: 4, score: 4.5, location: '广州街景区', price: 328 },
        { name: '清明上河图主题客栈', stars: 3, score: 4.4, location: '清明上河图', price: 268 },
        { name: '金华国贸大酒店', stars: 4, score: 4.5, location: '金华市区', price: 298 }
    ]
};

// 打开规划详情页
function openPlanDetail(planData) {
    const modal = document.getElementById('planDetailModal');
    if (!modal) return;
    
    // 填充基本信息
    document.getElementById('planDetailName').textContent = planData.title;
    document.getElementById('planDetailDesc').textContent = planData.description;
    document.getElementById('planDetailDest').textContent = planData.destination;
    document.getElementById('planDetailDays').textContent = planData.days;
    document.getElementById('planDetailPrice').textContent = planData.price;
    document.getElementById('footerPrice').textContent = '¥' + planData.price.replace('起', '');
    
    // 设置标签
    const badge = document.getElementById('planDetailBadge');
    if (planData.badge) {
        badge.textContent = planData.badge;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
    
    // 生成路线时间轴
    generateRouteTimeline(planData.title);
    
    // 生成酒店列表
    generateHotelList(planData.destination);
    
    // 显示模态框
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭规划详情页
function closePlanDetail() {
    const modal = document.getElementById('planDetailModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// 生成路线时间轴
function generateRouteTimeline(planTitle) {
    const container = document.getElementById('planRouteTimeline');
    if (!container) return;
    
    const routeData = planRoutesData[planTitle];
    
    if (!routeData) {
        container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 20px; margin: 0;">该路线详细行程正在规划中，敬请期待...</p>';
        return;
    }
    
    container.innerHTML = routeData.days.map(dayData => `
        <div class="route-day">
            <div class="route-day-marker">${dayData.day}</div>
            <div class="route-day-title">第${dayData.day}天</div>
            <div class="route-day-content">
                ${dayData.spots.map(spot => `
                    <div class="route-spot">
                        <div class="route-spot-time">${spot.time}</div>
                        <div class="route-spot-info">
                            <h4>${spot.name}</h4>
                            <p>${spot.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// 生成酒店列表
function generateHotelList(destination) {
    const container = document.getElementById('hotelList');
    if (!container) return;
    
    const hotels = hotelsData[destination] || [];
    
    if (hotels.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 20px; margin: 0;">暂无该目的地酒店推荐</p>';
        return;
    }
    
    container.innerHTML = hotels.map(hotel => `
        <div class="hotel-card">
            <div class="hotel-img">
                <i class="fas fa-hotel"></i>
            </div>
            <div class="hotel-info">
                <div class="hotel-name">${hotel.name}</div>
                <div class="hotel-rating">
                    <span class="hotel-stars">${'★'.repeat(hotel.stars)}</span>
                    <span class="hotel-score">${hotel.score}分</span>
                </div>
                <div class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                </div>
                <div class="hotel-price">
                    <span class="hotel-price-value">¥${hotel.price}</span>
                    <span class="hotel-price-unit">起/晚</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 绑定详情页事件
document.addEventListener('DOMContentLoaded', function() {
    // 关闭按钮
    const closeBtn = document.getElementById('closePlanModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closePlanDetail);
    }
    
    // 点击遮罩关闭
    const modal = document.getElementById('planDetailModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePlanDetail();
            }
        });
    }
    
    // 返回按钮
    const backBtn = document.getElementById('btnBackToPlans');
    if (backBtn) {
        backBtn.addEventListener('click', closePlanDetail);
    }
    
    // 预订按钮
    const bookBtn = document.getElementById('btnBookPlan');
    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            const planName = document.getElementById('planDetailName').textContent;
            showToast('success', '预订申请已提交', `${planName} 的预订申请已提交，客服将尽快与您联系！`);
            closePlanDetail();
        });
    }
});

// 暴露到全局
window.openPlanDetail = openPlanDetail;
window.closePlanDetail = closePlanDetail;

// ==================== 光阴留宿功能 ====================
function initPhotostayFeature() {
    // 模拟合作商家数据
    const mockPartners = [
        {
            id: 1,
            name: '北京故宫附近精品酒店',
            city: '北京',
            type: 'hotel',
            location: '北京市东城区景山前街',
            rating: 4.8,
            images: [
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1590490360182-c3190ca9959b?w=400&h=300&fit=crop'
            ],
            introduction: '位于故宫附近的精品酒店，步行即可到达故宫、天安门等著名景点。酒店装修典雅，服务周到，是您北京之行的理想选择。',
            discount: '上传酒店相关作品可享受房费8折优惠',
            contact: '电话：010-12345678'
        },
        {
            id: 2,
            name: '上海外滩景观餐厅',
            city: '上海',
            type: 'restaurant',
            location: '上海市黄浦区中山东一路',
            rating: 4.9,
            images: [
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1544025162-c2e1ea304398?w=400&h=300&fit=crop'
            ],
            introduction: '位于外滩的景观餐厅，可欣赏黄浦江美景。提供正宗上海本帮菜和西式料理，是商务宴请和情侣约会的绝佳场所。',
            discount: '上传餐厅环境或菜品照片可享受餐费7.5折优惠',
            contact: '电话：021-87654321'
        },
        {
            id: 3,
            name: '西安古城墙主题酒店',
            city: '西安',
            type: 'hotel',
            location: '西安市莲湖区南门',
            rating: 4.7,
            images: [
                'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop'
            ],
            introduction: '以西安古城墙为主题的特色酒店，装修融合了传统与现代元素。距离回民街、钟鼓楼等景点仅几步之遥。',
            discount: '上传酒店主题照片可享受房费7折优惠',
            contact: '电话：029-12345678'
        },
        {
            id: 4,
            name: '成都熊猫主题咖啡馆',
            city: '成都',
            type: 'cafe',
            location: '成都市成华区熊猫大道',
            rating: 4.6,
            images: [
                'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop'
            ],
            introduction: '熊猫主题咖啡馆，环境温馨可爱，提供各种咖啡和甜点。距离大熊猫基地很近，是游览后休息的好去处。',
            discount: '上传店内环境或咖啡照片可享受饮品6折优惠',
            contact: '电话：028-87654321'
        },
        {
            id: 5,
            name: '南京夫子庙精品酒店',
            city: '南京',
            type: 'hotel',
            location: '南京市秦淮区贡院街',
            rating: 4.5,
            images: [
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1590490360182-c3190ca9959b?w=400&h=300&fit=crop'
            ],
            introduction: '位于夫子庙景区内的精品酒店，古色古香的装修风格，步行即可到达秦淮河、乌衣巷等著名景点。',
            discount: '上传酒店或夫子庙周边照片可享受房费8折优惠',
            contact: '电话：025-12345678'
        },
        {
            id: 6,
            name: '杭州西湖景观餐厅',
            city: '杭州',
            type: 'restaurant',
            location: '杭州市西湖区白堤',
            rating: 4.8,
            images: [
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1544025162-c2e1ea304398?w=400&h=300&fit=crop'
            ],
            introduction: '位于西湖边的景观餐厅，可欣赏西湖美景。提供正宗杭帮菜，是品尝杭州美食的绝佳选择。',
            discount: '上传西湖美景或菜品照片可享受餐费7折优惠',
            contact: '电话：0571-87654321'
        },
        {
            id: 7,
            name: '厦门鼓浪屿特色民宿',
            city: '厦门',
            type: 'hotel',
            location: '厦门市思明区鼓浪屿',
            rating: 4.7,
            images: [
                'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop'
            ],
            introduction: '坐落在鼓浪屿的特色民宿，融合了南洋风情与现代设计。步行可达日光岩、菽庄花园等著名景点。',
            discount: '上传鼓浪屿风光可享受房费7.5折优惠',
            contact: '电话：0592-1234567'
        },
        {
            id: 8,
            name: '三亚亚龙湾度假酒店',
            city: '三亚',
            type: 'hotel',
            location: '三亚市吉阳区亚龙湾',
            rating: 4.9,
            images: [
                'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop'
            ],
            introduction: '位于亚龙湾的豪华度假酒店，拥有私人海滩和热带花园。提供丰富的水上活动和SPA服务。',
            discount: '上传酒店环境照片可享受房费8.5折优惠',
            contact: '电话：0898-1234567'
        },
        {
            id: 9,
            name: '重庆洪崖洞火锅店',
            city: '重庆',
            type: 'restaurant',
            location: '重庆市渝中区洪崖洞',
            rating: 4.6,
            images: [
                'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop'
            ],
            introduction: '位于洪崖洞景区内的正宗重庆火锅店，可欣赏山城夜景。提供麻辣鲜香的重庆火锅和特色小菜。',
            discount: '上传火锅照片可享受餐费8折优惠',
            contact: '电话：023-12345678'
        },
        {
            id: 10,
            name: '丽江古城文艺咖啡馆',
            city: '丽江',
            type: 'cafe',
            location: '丽江市古城区四方街',
            rating: 4.5,
            images: [
                'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop'
            ],
            introduction: '丽江古城内的文艺咖啡馆，环境清幽雅致。提供云南小粒咖啡和手工甜点，是古城漫游后的理想休憩地。',
            discount: '上传店内环境照片可享受饮品5折优惠',
            contact: '电话：0888-1234567'
        },
        {
            id: 11,
            name: '大理洱海景观酒店',
            city: '大理',
            type: 'hotel',
            location: '大理市大理镇洱海边',
            rating: 4.8,
            images: [
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop'
            ],
            introduction: '坐落在洱海边的精品酒店，推窗即可欣赏洱海美景。提供自行车租赁和环湖游服务。',
            discount: '上传洱海风光可享受房费7折优惠',
            contact: '电话：0872-1234567'
        },
        {
            id: 12,
            name: '苏州平江路茶馆',
            city: '苏州',
            type: 'cafe',
            location: '苏州市姑苏区平江路',
            rating: 4.7,
            images: [
                'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop'
            ],
            introduction: '位于平江路历史街区的传统茶馆，环境古朴典雅。提供苏州碧螺春和各种精致茶点。',
            discount: '上传茶馆环境照片可享受茶水6折优惠',
            contact: '电话：0512-1234567'
        }
    ];

    // 模拟作品数据
    const mockWorks = [];

    // 模拟用户获得的优惠数据（通过上传作品获得）
    const mockRewards = [
        {
            id: 1,
            name: '北京酒店房费8折券',
            partner: '北京故宫附近精品酒店',
            value: '8折',
            expiry: '2024-12-31',
            status: '可使用',
            source: '上传作品《故宫晨曦》获得'
        },
        {
            id: 2,
            name: '上海餐厅餐费7.5折券',
            partner: '上海外滩景观餐厅',
            value: '7.5折',
            expiry: '2024-12-31',
            status: '可使用',
            source: '上传作品《外滩夜景》获得'
        },
        {
            id: 3,
            name: '西安酒店房费7折券',
            partner: '西安古城墙主题酒店',
            value: '7折',
            expiry: '2024-12-31',
            status: '已使用',
            source: '上传作品《古城墙日落》获得'
        },
        {
            id: 4,
            name: '成都咖啡馆饮品6折券',
            partner: '成都熊猫主题咖啡馆',
            value: '6折',
            expiry: '2024-12-31',
            status: '已过期',
            source: '上传作品《熊猫基地一日游》获得'
        }
    ];

    // 渲染商家列表
    function renderPartners(partners) {
        const grid = document.getElementById('partnersGrid');
        if (!grid) return;

        if (partners.length === 0) {
            grid.innerHTML = '<div class="no-results">未找到符合条件的商家</div>';
            return;
        }

        grid.innerHTML = partners.map(partner => `
            <div class="partner-card" data-id="${partner.id}">
                <div class="partner-image" onclick="viewPartnerDetail(${partner.id})" style="cursor: pointer; position: relative;">
                    <img src="${partner.images[0]}" alt="${partner.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <i class="fas fa-image" style="display: none;"></i>
                    <div class="partner-name-overlay">${partner.name}</div>
                </div>
                <div class="partner-info">
                    <h3>${partner.name}</h3>
                    <div class="partner-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${partner.location}</span>
                        <span><i class="fas fa-star"></i> ${partner.rating}</span>
                        <span><i class="fas fa-tag"></i> ${partner.type === 'hotel' ? '酒店' : partner.type === 'restaurant' ? '餐厅' : '咖啡馆'}</span>
                    </div>
                    <p class="partner-desc">${partner.introduction.substring(0, 80)}...</p>
                    <div class="partner-discount">
                        <span class="discount-tag"><i class="fas fa-percentage"></i> ${partner.discount}</span>
                    </div>
                </div>
                <div class="partner-actions">
                    <button class="btn-primary view-partner-btn" onclick="viewPartnerDetail(${partner.id})">
                        查看详情
                    </button>
                    <button class="btn-secondary upload-for-partner-btn" onclick="uploadForPartner(${partner.id})">
                        上传作品
                    </button>
                </div>
            </div>
        `).join('');
    }

    // 渲染作品列表
    function renderWorks(works) {
        const grid = document.getElementById('worksGrid');
        if (!grid) return;

        if (works.length === 0) {
            grid.innerHTML = `
                <div class="no-works-placeholder">
                    <i class="fas fa-camera"></i>
                    <h3>暂无作品</h3>
                    <p>点击上方"上传作品"按钮，分享您的精彩瞬间</p>
                    <button class="btn-primary" onclick="document.getElementById('uploadWorkBtn').click()">
                        <i class="fas fa-cloud-upload-alt"></i> 立即上传
                    </button>
                </div>
            `;
            return;
        }

        grid.innerHTML = works.map(work => `
            <div class="work-card" data-id="${work.id}">
                <div class="work-image">
                    <img src="${work.image}" alt="${work.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <i class="fas fa-image" style="display: none;"></i>
                </div>
                <div class="work-info">
                    <h3>${work.title}</h3>
                    <p class="work-location"><i class="fas fa-map-marker-alt"></i> ${work.location}</p>
                    <p class="work-partner"><i class="fas fa-store"></i> ${work.partner}</p>
                    <div class="work-status">
                        <span class="status-tag ${work.status === '已获得优惠' ? 'success' : work.status === '审核中' ? 'pending' : 'error'}">${work.status}</span>
                        ${work.discount ? `<span class="discount-info">${work.discount}</span>` : ''}
                    </div>
                </div>
                <div class="work-actions">
                    <button class="btn-secondary like-work-btn">
                        <i class="fas fa-heart"></i> ${work.likes}
                    </button>
                </div>
            </div>
        `).join('');
    }

    // 渲染优惠列表
    function renderRewards(rewards) {
        const list = document.getElementById('rewardsList');
        if (!list) return;

        if (rewards.length === 0) {
            list.innerHTML = `
                <div class="no-rewards-placeholder">
                    <i class="fas fa-camera"></i>
                    <h3>暂无优惠</h3>
                    <p>上传作品即可获得商家优惠</p>
                    <button class="btn-primary" onclick="document.getElementById('uploadWorkBtn').click()">
                        <i class="fas fa-cloud-upload-alt"></i> 立即上传
                    </button>
                </div>
            `;
            return;
        }

        list.innerHTML = rewards.map(reward => `
            <div class="reward-card ${reward.status === '已使用' ? 'used' : reward.status === '已过期' ? 'expired' : ''}" data-id="${reward.id}">
                <div class="reward-info">
                    <h3>${reward.name}</h3>
                    <p class="reward-partner"><i class="fas fa-store"></i> ${reward.partner}</p>
                    <p class="reward-source"><i class="fas fa-camera"></i> ${reward.source}</p>
                    <div class="reward-meta">
                        <span class="reward-value"><i class="fas fa-tag"></i> ${reward.value}</span>
                        <span class="reward-expiry"><i class="fas fa-calendar"></i> 有效期至 ${reward.expiry}</span>
                        <span class="reward-status ${reward.status === '可使用' ? 'available' : reward.status === '已使用' ? 'used' : 'expired'}">${reward.status}</span>
                    </div>
                </div>
                <div class="reward-action">
                    ${reward.status === '可使用' ? `
                        <button class="btn-primary use-reward-btn">
                            立即使用
                        </button>
                    ` : `
                        <button class="btn-secondary" disabled>
                            ${reward.status}
                        </button>
                    `}
                </div>
            </div>
        `).join('');
    }

    // 初始化渲染
    renderPartners(mockPartners);
    renderWorks(mockWorks);
    renderRewards(mockRewards);

    // 搜索功能
    const searchBtn = document.getElementById('searchPhotostayBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const city = document.getElementById('photostayCity').value;
            const type = document.getElementById('photostayType').value;
            const rating = document.getElementById('photostayRating').value;

            let filteredPartners = [...mockPartners];

            // 按城市筛选
            if (city) {
                filteredPartners = filteredPartners.filter(p => p.city === city);
            }

            // 按类型筛选
            if (type) {
                filteredPartners = filteredPartners.filter(p => p.type === type);
            }

            // 按评分筛选
            if (rating) {
                const minRating = parseFloat(rating);
                filteredPartners = filteredPartners.filter(p => p.rating >= minRating);
            }

            renderPartners(filteredPartners);
        });
    }

    // 上传作品按钮
    const uploadBtn = document.getElementById('uploadWorkBtn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', function() {
            openUploadWorkModal();
        });
    }

    // 上传作品模态框
    function openUploadWorkModal(partnerId = null) {
        const modal = document.getElementById('uploadWorkModal');
        if (modal) {
            modal.classList.add('active');
            
            // 填充商家选项
            const partnerSelect = document.getElementById('workPartner');
            if (partnerSelect) {
                partnerSelect.innerHTML = '<option value="">选择合作商家</option>';
                mockPartners.forEach(partner => {
                    const option = document.createElement('option');
                    option.value = partner.id;
                    option.textContent = partner.name;
                    if (partnerId === partner.id) {
                        option.selected = true;
                    }
                    partnerSelect.appendChild(option);
                });
            }
        }
    }

    // 关闭上传作品模态框
    const closeUploadModal = document.getElementById('closeUploadModal');
    const cancelUploadBtn = document.getElementById('cancelUploadBtn');
    if (closeUploadModal) {
        closeUploadModal.addEventListener('click', closeUploadModalFunc);
    }
    if (cancelUploadBtn) {
        cancelUploadBtn.addEventListener('click', closeUploadModalFunc);
    }

    function closeUploadModalFunc() {
        const modal = document.getElementById('uploadWorkModal');
        if (modal) {
            modal.classList.remove('active');
            // 重置表单
            document.getElementById('workFileInput').value = '';
            document.getElementById('workPreview').style.display = 'none';
            document.getElementById('workTitle').value = '';
            document.getElementById('workLocation').value = '';
            document.getElementById('workPartner').value = '';
            document.getElementById('workDescription').value = '';
        }
    }

    // 商家详情模态框
    window.viewPartnerDetail = function(partnerId) {
        const partner = mockPartners.find(p => p.id === partnerId);
        if (!partner) return;

        const modal = document.getElementById('partnerDetailModal');
        if (modal) {
            // 填充商家信息
            document.getElementById('partnerDetailName').textContent = partner.name;
            document.getElementById('partnerTitle').textContent = partner.name;
            document.getElementById('partnerLocation').textContent = partner.location;
            document.getElementById('partnerRating').textContent = partner.rating + '分';
            document.getElementById('partnerType').textContent = partner.type === 'hotel' ? '酒店' : partner.type === 'restaurant' ? '餐厅' : '咖啡馆';
            document.getElementById('partnerIntroduction').textContent = partner.introduction;
            document.getElementById('partnerDiscount').innerHTML = `
                <div class="discount-info-card">
                    <div class="discount-main">
                        <span class="discount-tag large">${partner.discount}</span>
                        <span class="discount-desc">上传作品即可立即获得</span>
                    </div>
                    <div class="discount-rules">
                        <h4><i class="fas fa-info-circle"></i> 优惠规则</h4>
                        <ul>
                            <li><i class="fas fa-check"></i> 上传该商家的照片作品</li>
                            <li><i class="fas fa-check"></i> 作品审核通过后即可获得优惠</li>
                            <li><i class="fas fa-check"></i> 优惠有效期为30天</li>
                            <li><i class="fas fa-check"></i> 每个作品仅限获得一次优惠</li>
                        </ul>
                    </div>
                </div>
            `;
            document.getElementById('partnerContact').textContent = partner.contact;

            // 填充图片
            const mainImage = document.getElementById('partnerMainImage');
            if (mainImage) {
                mainImage.innerHTML = `<img src="${partner.images[0]}" alt="${partner.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><i class="fas fa-image" style="display: none;"></i>`;
            }

            const thumbnails = document.getElementById('partnerThumbnails');
            if (thumbnails) {
                thumbnails.innerHTML = partner.images.map(img => `
                    <div class="thumbnail">
                        <img src="${img}" alt="${partner.name}">
                    </div>
                `).join('');
            }

            // 显示模态框
            modal.classList.add('active');

            // 上传作品按钮
            const uploadForPartnerBtn = document.getElementById('uploadForPartnerBtn');
            if (uploadForPartnerBtn) {
                uploadForPartnerBtn.onclick = function() {
                    closePartnerDetailModal();
                    openUploadWorkModal(partnerId);
                };
            }
        }
    };

    // 关闭商家详情模态框
    const closePartnerModal = document.getElementById('closePartnerModal');
    if (closePartnerModal) {
        closePartnerModal.addEventListener('click', closePartnerDetailModal);
    }

    function closePartnerDetailModal() {
        const modal = document.getElementById('partnerDetailModal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    // 上传作品处理
    const workUploadArea = document.getElementById('workUploadArea');
    const workFileInput = document.getElementById('workFileInput');
    const workPreview = document.getElementById('workPreview');
    const workPreviewImg = document.getElementById('workPreviewImg');
    const removeWorkBtn = document.getElementById('removeWorkBtn');

    if (workUploadArea) {
        workUploadArea.addEventListener('click', function() {
            workFileInput.click();
        });

        // 拖拽上传
        workUploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('dragover');
        });

        workUploadArea.addEventListener('dragleave', function() {
            this.classList.remove('dragover');
        });

        workUploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                handleFileUpload(e.dataTransfer.files[0]);
            }
        });
    }

    if (workFileInput) {
        workFileInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                handleFileUpload(e.target.files[0]);
            }
        });
    }

    function handleFileUpload(file) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                workPreviewImg.src = e.target.result;
                workPreview.style.display = 'block';
                workUploadArea.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    }

    if (removeWorkBtn) {
        removeWorkBtn.addEventListener('click', function() {
            workFileInput.value = '';
            workPreview.style.display = 'none';
            workUploadArea.style.display = 'flex';
        });
    }

    // 提交作品
    const submitWorkBtn = document.getElementById('submitWorkBtn');
    if (submitWorkBtn) {
        submitWorkBtn.addEventListener('click', function() {
            const title = document.getElementById('workTitle').value.trim();
            const location = document.getElementById('workLocation').value.trim();
            const partnerId = document.getElementById('workPartner').value;
            const description = document.getElementById('workDescription').value.trim();

            if (!title || !location || !partnerId || !workFileInput.files.length) {
                showToast('warning', '请完善信息', '请填写所有必填项并上传作品');
                return;
            }

            // 获取商家信息
            const partner = mockPartners.find(p => p.id === parseInt(partnerId));
            if (!partner) {
                showToast('error', '提交失败', '商家信息错误');
                return;
            }

            // 模拟提交并立即获得优惠
            const newReward = {
                id: mockRewards.length + 1,
                name: `${partner.discount}券`,
                partner: partner.name,
                value: partner.discount,
                expiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                status: '可使用',
                source: `上传作品《${title}》获得`
            };

            // 添加到优惠列表
            mockRewards.unshift(newReward);
            renderRewards(mockRewards);

            showToast('success', '上传成功', `恭喜！您已获得 ${partner.name} 的${partner.discount}优惠`);
            closeUploadModalFunc();
        });
    }

    // 上传作品给指定商家
    window.uploadForPartner = function(partnerId) {
        openUploadWorkModal(partnerId);
    };

    // 使用优惠
    document.addEventListener('click', function(e) {
        if (e.target.closest('.use-reward-btn')) {
            const btn = e.target.closest('.use-reward-btn');
            const card = btn.closest('.reward-card');
            const rewardName = card.querySelector('h3').textContent;
            const partnerName = card.querySelector('.reward-partner').textContent;
            
            showToast('success', '使用成功', `您已使用 ${rewardName}，请向 ${partnerName} 出示此优惠`);
            
            // 更新卡片状态
            card.classList.add('used');
            btn.outerHTML = '<button class="btn-secondary" disabled>已使用</button>';
            
            // 更新状态标签
            const statusSpan = card.querySelector('.reward-status');
            if (statusSpan) {
                statusSpan.textContent = '已使用';
                statusSpan.className = 'reward-status used';
            }
        }
    });

    // 点赞作品
    document.addEventListener('click', function(e) {
        if (e.target.closest('.like-work-btn')) {
            const btn = e.target.closest('.like-work-btn');
            const icon = btn.querySelector('.fa-heart');
            const count = parseInt(btn.textContent.trim());
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ff4757';
                btn.innerHTML = `<i class="fas fa-heart" style="color: #ff4757;"></i> ${count + 1}`;
                showToast('success', '点赞成功', '感谢您的支持');
            }
        }
    });
}

// 初始化光阴留宿功能
document.addEventListener('DOMContentLoaded', function() {
    initPhotostayFeature();
    initMyPlanFeature();
});

// ==================== 我的计划功能 ====================
function initMyPlanFeature() {
    // 模拟我的计划数据
    window.myPlans = [
        {
            id: 1,
            name: '云南深度游',
            startDate: '2024-05-01',
            days: 7,
            people: 2,
            budget: 5000,
            status: '规划中',
            notes: '记得带好防晒霜和雨具，高原地区注意保暖',
            itinerary: [
                { day: 1, title: '抵达昆明', content: '入住酒店，适应高原环境，晚上逛翠湖公园' },
                { day: 2, title: '昆明-大理', content: '乘高铁前往大理，游览大理古城，入住洱海边酒店' },
                { day: 3, title: '洱海环湖', content: '租电动车环洱海，游览双廊、喜洲等景点' },
                { day: 4, title: '大理-丽江', content: '乘大巴前往丽江，游览丽江古城，晚上看表演' },
                { day: 5, title: '玉龙雪山', content: '游览玉龙雪山，蓝月谷，返回丽江' },
                { day: 6, title: '丽江-昆明', content: '返回昆明，游览石林景区' },
                { day: 7, title: '返程', content: '根据航班时间安排送机，结束愉快旅程' }
            ]
        },
        {
            id: 2,
            name: '川西环线自驾游',
            startDate: '2024-07-15',
            days: 10,
            people: 4,
            budget: 8000,
            status: '已保存',
            notes: '需要准备自驾车辆，注意高原反应',
            itinerary: [
                { day: 1, title: '成都出发', content: '从成都出发，前往都江堰，入住都江堰' },
                { day: 2, title: '都江堰-汶川', content: '游览都江堰，前往汶川，入住汶川' },
                { day: 3, title: '汶川-马尔康', content: '前往马尔康，游览卓克基土司官寨' },
                { day: 4, title: '马尔康-色达', content: '前往色达，游览五明佛学院' },
                { day: 5, title: '色达-甘孜', content: '前往甘孜，游览甘孜寺' },
                { day: 6, title: '甘孜-新都桥', content: '前往新都桥，游览摄影天堂' },
                { day: 7, title: '新都桥-康定', content: '前往康定，游览跑马山' },
                { day: 8, title: '康定-泸定', content: '前往泸定，游览泸定桥' },
                { day: 9, title: '泸定-雅安', content: '前往雅安，游览碧峰峡' },
                { day: 10, title: '雅安-成都', content: '返回成都，结束自驾之旅' }
            ]
        }
    ];

    // 关闭我的计划详情模态框
    const closeMyPlanModal = document.getElementById('closeMyPlanModal');
    if (closeMyPlanModal) {
        closeMyPlanModal.addEventListener('click', function() {
            document.getElementById('myPlanDetailModal').classList.remove('active');
        });
    }

    // 关闭新建计划模态框
    const closeCreatePlanModal = document.getElementById('closeCreatePlanModal');
    const cancelCreatePlan = document.getElementById('cancelCreatePlan');
    if (closeCreatePlanModal) {
        closeCreatePlanModal.addEventListener('click', function() {
            document.getElementById('createPlanModal').classList.remove('active');
        });
    }
    if (cancelCreatePlan) {
        cancelCreatePlan.addEventListener('click', function() {
            document.getElementById('createPlanModal').classList.remove('active');
        });
    }

    // 提交新建计划
    const submitCreatePlan = document.getElementById('submitCreatePlan');
    if (submitCreatePlan) {
        submitCreatePlan.addEventListener('click', function() {
            const name = document.getElementById('newPlanName').value.trim();
            const startDate = document.getElementById('newPlanStartDate').value;
            const days = document.getElementById('newPlanDays').value;
            const people = document.getElementById('newPlanPeople').value;
            const budget = document.getElementById('newPlanBudget').value;
            const notes = document.getElementById('newPlanNotes').value.trim();

            if (!name || !startDate || !days || !people) {
                showToast('warning', '请完善信息', '请填写所有必填项');
                return;
            }

            const newPlan = {
                id: myPlans.length + 1,
                name: name,
                startDate: startDate,
                days: parseInt(days),
                people: parseInt(people),
                budget: budget ? parseInt(budget) : 0,
                status: '规划中',
                notes: notes || '暂无备注',
                itinerary: []
            };

            myPlans.unshift(newPlan);
            renderMyPlans();
            document.getElementById('createPlanModal').classList.remove('active');
            
            showToast('success', '创建成功', '您的旅行计划已创建');
            
            // 清空表单
            document.getElementById('newPlanName').value = '';
            document.getElementById('newPlanStartDate').value = '';
            document.getElementById('newPlanDays').value = '';
            document.getElementById('newPlanPeople').value = '';
            document.getElementById('newPlanBudget').value = '';
            document.getElementById('newPlanNotes').value = '';
        });
    }

    // 渲染我的计划列表
    function renderMyPlans() {
        const plansList = document.getElementById('myPlansList');
        if (!plansList) return;

        if (myPlans.length === 0) {
            plansList.innerHTML = `
                <div class="no-plans-placeholder">
                    <i class="fas fa-calendar-plus"></i>
                    <h3>暂无计划</h3>
                    <p>点击"新建计划"按钮，开始规划您的旅行</p>
                </div>
            `;
            return;
        }

        plansList.innerHTML = myPlans.map(plan => `
            <div class="plan-item" onclick="openMyPlanDetail(${plan.id})">
                <div class="plan-icon"><i class="fas fa-${plan.days > 5 ? 'plane' : 'mountain'}"></i></div>
                <div class="plan-info">
                    <h4>${plan.name}</h4>
                    <p>预计出发：${plan.startDate} | 行程：${plan.days}天</p>
                </div>
                <span class="plan-status ${plan.status === '规划中' ? 'planning' : 'saved'}">${plan.status}</span>
            </div>
        `).join('');
    }

    // 初始化渲染
    renderMyPlans();
}

// 打开我的计划详情
window.openMyPlanDetail = function(planId) {
    const plan = myPlans.find(p => p.id === planId);
    if (!plan) return;

    // 填充计划信息
    document.getElementById('myPlanName').textContent = plan.name;
    document.getElementById('myPlanStatus').textContent = plan.status;
    document.getElementById('myPlanStartDate').textContent = plan.startDate;
    document.getElementById('myPlanDays').textContent = plan.days + '天';
    document.getElementById('myPlanPeople').textContent = plan.people + '人';
    document.getElementById('myPlanBudget').textContent = plan.budget + '元';
    document.getElementById('myPlanNotes').textContent = plan.notes;

    // 填充行程安排
    const itineraryContainer = document.getElementById('myPlanItinerary');
    if (plan.itinerary && plan.itinerary.length > 0) {
        itineraryContainer.innerHTML = plan.itinerary.map(item => `
            <div class="itinerary-item">
                <div class="itinerary-day">
                    <div class="day-num">${item.day}</div>
                    <div class="day-label">第${item.day}天</div>
                </div>
                <div class="itinerary-content">
                    <h4>${item.title}</h4>
                    <p>${item.content}</p>
                </div>
            </div>
        `).join('');
    } else {
        itineraryContainer.innerHTML = `
            <div class="no-itinerary-placeholder">
                <i class="fas fa-route"></i>
                <p>暂无详细行程安排，点击"开始规划"进行详细规划</p>
            </div>
        `;
    }

    // 显示模态框
    document.getElementById('myPlanDetailModal').classList.add('active');
};

// 打开新建计划模态框
window.openCreatePlanModal = function() {
    document.getElementById('createPlanModal').classList.add('active');
};

// 编辑我的计划
window.editMyPlan = function() {
    showToast('info', '编辑功能', '编辑功能正在开发中，敬请期待');
};

// 删除我的计划
window.deleteMyPlan = function() {
    if (confirm('确定要删除这个旅行计划吗？')) {
        showToast('success', '删除成功', '旅行计划已删除');
        document.getElementById('myPlanDetailModal').classList.remove('active');
    }
};

// 开始规划
window.startPlanning = function() {
    showToast('info', '开始规划', '正在跳转到规划页面...');
    document.getElementById('myPlanDetailModal').classList.remove('active');
    setTimeout(function() {
        window.switchSection('planning');
    }, 500);
};
