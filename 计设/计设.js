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

// ==================== 城市景点数据 ====================
const cityAttractions = {
    '北京': {
        description: '北京，中国的首都，拥有三千多年的历史，是世界著名的古都。这里既有故宫、长城等世界文化遗产，也有鸟巢、水立方等现代建筑。',
        attractions: [
            { name: '故宫博物院', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop', desc: '中国明清两代的皇家宫殿，是世界上现存规模最大、保存最为完整的木质结构古建筑之一。', tag: '世界遗产' },
            { name: '长城', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop', desc: '世界文化遗产，中国古代伟大的军事防御工程，被誉为世界七大奇迹之一。', tag: '必游' },
            { name: '天坛公园', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&h=300&fit=crop', desc: '明清两代皇帝祭天的场所，是中国现存最大的古代祭祀建筑群。', tag: '历史' },
            { name: '颐和园', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop', desc: '中国清朝时期皇家园林，保存最完整的一座皇家行宫御苑，被誉为"皇家园林博物馆"。', tag: '园林' },
            { name: '天安门广场', image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=400&h=300&fit=crop', desc: '世界上最大的城市广场，见证了中国的历史变迁，是中华人民共和国的象征。', tag: '地标' },
            { name: '798艺术区', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400&h=300&fit=crop', desc: '原为国营798厂等电子工业的老厂区所在地，现已发展成为北京都市文化的新地标。', tag: '艺术' }
        ],
        food: ['北京烤鸭', '炸酱面', '豆汁儿', '卤煮火烧', '驴打滚'],
        bestTime: '春秋两季，4-5月和9-10月最佳'
    },
    '上海': {
        description: '上海，中国的经济中心，国际化大都市。外滩的万国建筑博览群与陆家嘴的摩天大楼交相辉映，展现了这座城市的独特魅力。',
        attractions: [
            { name: '外滩', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400&h=300&fit=crop', desc: '上海的标志性景观，拥有52幢风格各异的古典复兴大楼，被誉为"万国建筑博览群"。', tag: '地标' },
            { name: '东方明珠', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&h=300&fit=crop', desc: '上海标志性建筑，高468米，是亚洲第一、世界第三的高塔。', tag: '必游' },
            { name: '豫园', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop', desc: '明代私人园林，充分展现了中国古典园林的建筑与设计风格。', tag: '园林' },
            { name: '南京路步行街', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop', desc: '中华商业第一街，汇集了众多老字号商店和国际品牌。', tag: '购物' },
            { name: '田子坊', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop', desc: '上海最具特色的里弄，充满艺术气息，是创意产业的发源地。', tag: '文艺' },
            { name: '上海迪士尼', image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=400&h=300&fit=crop', desc: '中国内地首座迪士尼主题乐园，拥有全球最大的迪士尼城堡。', tag: '亲子' }
        ],
        food: ['小笼包', '生煎包', '蟹壳黄', '排骨年糕', '开洋葱油拌面'],
        bestTime: '春秋两季，3-5月和9-11月最佳'
    },
    '西安': {
        description: '西安，十三朝古都，丝绸之路的起点。这里承载着中华文明的历史记忆，兵马俑、大雁塔等古迹见证了这座城市的辉煌。',
        attractions: [
            { name: '兵马俑', image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=400&h=300&fit=crop', desc: '世界第八大奇迹，秦始皇陵的陪葬坑，展现了秦代军队的威武雄壮。', tag: '世界遗产' },
            { name: '大雁塔', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&h=300&fit=crop', desc: '唐代佛教建筑艺术杰作，玄奘法师译经之处，西安的标志性建筑。', tag: '历史' },
            { name: '古城墙', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop', desc: '中国现存规模最大、保存最完整的古代城垣，可以骑行游览。', tag: '必游' },
            { name: '回民街', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop', desc: '西安著名的美食文化街区，汇集了各种西北特色小吃。', tag: '美食' },
            { name: '华清宫', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop', desc: '唐代皇家园林，因唐玄宗和杨贵妃的爱情故事而闻名。', tag: '文化' },
            { name: '大唐不夜城', image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=400&h=300&fit=crop', desc: '以盛唐文化为背景的大型步行街，夜景璀璨，仿佛穿越回唐朝。', tag: '夜景' }
        ],
        food: ['肉夹馍', '羊肉泡馍', '凉皮', 'biangbiang面', '甑糕'],
        bestTime: '春秋两季，3-5月和9-11月最佳'
    },
    '成都': {
        description: '成都，天府之国，一座来了就不想走的城市。这里有可爱的大熊猫、麻辣鲜香的火锅，还有悠闲的茶馆文化。',
        attractions: [
            { name: '大熊猫基地', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop', desc: '全球最大的大熊猫人工繁育保护基地，可以近距离观察国宝大熊猫。', tag: '必游' },
            { name: '宽窄巷子', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&h=300&fit=crop', desc: '成都遗留下来的较成规模的清朝古街道，是体验老成都生活的好去处。', tag: '历史' },
            { name: '锦里古街', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop', desc: '传说中锦里曾是西蜀最古老、最具有商业气息的街道之一。', tag: '文化' },
            { name: '武侯祠', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop', desc: '纪念诸葛亮的祠堂，也是中国唯一的一座君臣合祀祠庙。', tag: '历史' },
            { name: '都江堰', image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=400&h=300&fit=crop', desc: '世界文化遗产，全世界迄今为止年代最久、唯一留存的无坝引水工程。', tag: '世界遗产' },
            { name: '春熙路', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400&h=300&fit=crop', desc: '成都最繁华的商业街，汇集了众多品牌店和美食餐厅。', tag: '购物' }
        ],
        food: ['火锅', '串串香', '担担面', '龙抄手', '夫妻肺片', '麻婆豆腐'],
        bestTime: '春秋两季，3-6月和9-11月最佳'
    },
    '南京': {
        description: '南京，六朝古都，历史文化名城。这里有中山陵的庄严肃穆，也有夫子庙的繁华热闹，是一座充满故事的城市。',
        attractions: [
            { name: '中山陵', image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=400&h=300&fit=crop', desc: '中国近代伟大的民主革命先行者孙中山先生的陵寝，建筑宏伟壮观。', tag: '必游' },
            { name: '夫子庙', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop', desc: '供奉孔子的庙宇，也是秦淮河畔最繁华的地方，夜景尤其美丽。', tag: '文化' },
            { name: '总统府', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&h=300&fit=crop', desc: '中国近代建筑遗存中规模最大、保存最完整的建筑群之一。', tag: '历史' },
            { name: '明孝陵', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop', desc: '明太祖朱元璋与其皇后的合葬陵墓，世界文化遗产。', tag: '世界遗产' },
            { name: '玄武湖', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop', desc: '中国最大的皇家园林湖泊，也是江南三大名湖之一。', tag: '自然' },
            { name: '老门东', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400&h=300&fit=crop', desc: '南京传统民居聚集地，保留了大量明清时期的古建筑。', tag: '历史' }
        ],
        food: ['鸭血粉丝汤', '盐水鸭', '鸡鸣汤包', '牛肉锅贴', '糖芋苗'],
        bestTime: '春秋两季，3-5月和9-11月最佳'
    },
    '金华': {
        description: '金华，浙江省中部城市，以横店影视城闻名。这里不仅有影视文化，还有双龙洞等自然景观和深厚的历史底蕴。',
        attractions: [
            { name: '横店影视城', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&h=300&fit=crop', desc: '全球最大的影视拍摄基地，被誉为"中国好莱坞"，可以体验各种影视场景。', tag: '必游' },
            { name: '双龙洞', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop', desc: '国家重点风景名胜区，以溶洞景观著称，洞内钟乳石千姿百态。', tag: '自然' },
            { name: '诸葛八卦村', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop', desc: '诸葛亮后裔的最大聚居地，村落布局按九宫八卦设计，独具特色。', tag: '文化' },
            { name: '义乌国际商贸城', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop', desc: '全球最大的小商品批发市场，商品种类繁多，是购物的天堂。', tag: '购物' },
            { name: '金华山', image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=400&h=300&fit=crop', desc: '金华的标志性景点，山上有黄大仙祖宫，是道教名山。', tag: '自然' },
            { name: '佛堂古镇', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400&h=300&fit=crop', desc: '千年古镇，保存了大量明清古建筑，是义乌商贸文化的发源地。', tag: '历史' }
        ],
        food: ['金华火腿', '东阳沃面', '义乌红糖', '兰溪鸡子馃', '永康肉麦饼'],
        bestTime: '春秋两季，3-5月和9-11月最佳'
    }
};

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
                console.log('搜索:', query);
                // TODO: 实现搜索逻辑
                alert(`正在搜索: ${query}`);
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
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

        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <div class="post-header">
                <div class="user-avatar">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="user-info">
                    <h4>我</h4>
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
    }

    // ==================== 点赞功能 ====================
    document.addEventListener('click', function(e) {
        const actionBtn = e.target.closest('.action-btn');
        if (actionBtn && actionBtn.querySelector('.fa-heart')) {
            const icon = actionBtn.querySelector('.fa-heart');
            const text = actionBtn.textContent;
            const count = parseInt(text) || 0;
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ff4757';
                actionBtn.innerHTML = `<i class="fas fa-heart" style="color: #ff4757;"></i> ${count + 1}`;
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
                actionBtn.innerHTML = `<i class="far fa-heart"></i> ${Math.max(0, count - 1)}`;
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

    // ==================== 显示城市景点详情 ====================
    function showCityAttractions(cityName) {
        const cityData = cityAttractions[cityName];
        if (!cityData) return;

        // 创建弹窗内容
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

        // 显示弹窗
        showModal(cityName, modalContent);
        
        // 为景点卡片添加点击事件
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

    // ==================== 显示景点详情 ====================
    function showAttractionDetail(cityName, attractionIndex) {
        const cityData = cityAttractions[cityName];
        if (!cityData || !cityData.attractions[attractionIndex]) return;
        
        const attraction = cityData.attractions[attractionIndex];
        
        // 关闭城市景点弹窗
        closeCityModal();
        
        // 延迟显示景点详情弹窗
        setTimeout(() => {
            // 创建景点详情内容
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
            
            // 显示景点详情弹窗
            showAttractionModal(attraction.name, modalContent);
        }, 350);
    }

    // ==================== 景点详情弹窗函数 ====================
    function showAttractionModal(title, content) {
        // 移除已存在的弹窗
        const existingModal = document.getElementById('attractionDetailModal');
        if (existingModal) {
            existingModal.remove();
        }

        // 创建弹窗
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
        
        // 禁止背景滚动
        document.body.style.overflow = 'hidden';
        
        // 显示动画
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }

    // ==================== 关闭景点详情弹窗 ====================
    window.closeAttractionModal = function() {
        const modal = document.getElementById('attractionDetailModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        }
    };

    // ==================== 返回城市景点页 ====================
    window.backToCity = function(cityName) {
        closeAttractionModal();
        setTimeout(() => {
            showCityAttractions(cityName);
        }, 350);
    };

    // ==================== 加入行程 ====================
    window.addToPlan = function(attractionName, cityName) {
        alert(`已将"${attractionName}"加入您的行程！\n\n城市：${cityName}\n景点：${attractionName}`);
    };

    // ==================== 通用弹窗函数 ====================
    function showModal(title, content) {
        // 移除已存在的弹窗
        const existingModal = document.getElementById('cityAttractionsModal');
        if (existingModal) {
            existingModal.remove();
        }

        // 创建弹窗
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
        
        // 禁止背景滚动
        document.body.style.overflow = 'hidden';
        
        // 显示动画
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }

    // ==================== 关闭城市弹窗 ====================
    window.closeCityModal = function() {
        const modal = document.getElementById('cityAttractionsModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        }
    };

    // ==================== 目的地卡片点击 ====================
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('click', function() {
            const destName = this.dataset.destination;
            if (destName) {
                // 显示城市景点详情弹窗
                showCityAttractions(destName);
            }
        });
    });

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
        
        // 显示/隐藏空提示
        let emptyTip = document.getElementById('plansEmptyTip');
        if (visibleCount === 0) {
            if (!emptyTip) {
                emptyTip = document.createElement('div');
                emptyTip.id = 'plansEmptyTip';
                emptyTip.className = 'plans-empty-tip';
                emptyTip.innerHTML = `
                    <i class="fas fa-search"></i>
                    <p>附近暂无旅游规划</p>
                    <span>试试其他筛选条件...</span>
                `;
                document.getElementById('plansContainer').appendChild(emptyTip);
            } else {
                emptyTip.querySelector('p').textContent = '附近暂无旅游规划';
                emptyTip.style.display = 'block';
            }
        } else if (emptyTip) {
            emptyTip.style.display = 'none';
        }
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
        
        // 显示/隐藏空提示
        let emptyTip = document.getElementById('plansEmptyTip');
        if (visibleCount === 0) {
            if (!emptyTip) {
                emptyTip = document.createElement('div');
                emptyTip.id = 'plansEmptyTip';
                emptyTip.className = 'plans-empty-tip';
                emptyTip.innerHTML = `
                    <i class="fas fa-search"></i>
                    <p>暂无 "${destination}" 的相关规划</p>
                    <span>敬请期待更多路线...</span>
                `;
                document.getElementById('plansContainer').appendChild(emptyTip);
            } else {
                emptyTip.querySelector('p').textContent = `暂无 "${destination}" 的相关规划`;
                emptyTip.style.display = 'block';
            }
        } else if (emptyTip) {
            emptyTip.style.display = 'none';
        }
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
                        // 个人中心默认显示我的足迹
                        window.switchProfileTab('footprints');
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

    // ==================== 初始化 ====================
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
        
        // 从localStorage获取用户信息
        const users = JSON.parse(localStorage.getItem('travel_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // 登录成功
            const session = {
                username: user.username,
                email: user.email,
                isLoggedIn: true,
                loginTime: new Date().toISOString()
            };
            
            if (rememberMe) {
                localStorage.setItem('travel_session', JSON.stringify(session));
            } else {
                sessionStorage.setItem('travel_session', JSON.stringify(session));
            }
            
            showToast('success', '登录成功', `欢迎回来，${user.username}！`);
            updateUIForLoggedInUser(user.username, user.email);
            closeAuthModal();
        } else {
            showToast('error', '登录失败', '邮箱或密码错误，请重试');
        }
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
        
        // 获取已注册用户
        let users = JSON.parse(localStorage.getItem('travel_users') || '[]');
        
        // 检查邮箱是否已注册
        if (users.some(u => u.email === email)) {
            showToast('error', '注册失败', '该邮箱已被注册');
            return;
        }
        
        // 检查用户名是否已存在
        if (users.some(u => u.username === username)) {
            showToast('error', '注册失败', '该用户名已被使用');
            return;
        }
        
        // 添加新用户
        users.push({
            username,
            email,
            password,
            registerTime: new Date().toISOString()
        });
        
        localStorage.setItem('travel_users', JSON.stringify(users));
        
        showToast('success', '注册成功', '请使用新账号登录');
        
        // 切换到登录表单
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
        
        // 填充邮箱
        document.getElementById('loginEmail').value = email;
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
function updateUIForLoggedInUser(username, email) {
    if (loginBtn) loginBtn.classList.add('hidden');
    if (userMenu) {
        userMenu.classList.remove('hidden');
        document.getElementById('username').textContent = username;
    }
    
    // 同步用户信息到个人中心
    syncUserToProfile(username, email);
    
    // 加载头像
    loadUserAvatar();
}

// 同步用户信息到个人中心
function syncUserToProfile(username, email) {
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
function loadUserAvatar() {
    const avatarData = localStorage.getItem('travel_user_avatar');
    if (avatarData) {
        updateAllAvatars(avatarData);
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
            
            // 读取文件并转换为DataURL
            const reader = new FileReader();
            reader.onload = function(event) {
                const avatarData = event.target.result;
                
                // 保存到localStorage
                localStorage.setItem('travel_user_avatar', avatarData);
                
                // 更新所有头像显示
                updateAllAvatars(avatarData);
                
                showToast('success', '头像更新成功', '您的头像已更新');
            };
            reader.onerror = function() {
                showToast('error', '上传失败', '图片读取失败，请重试');
            };
            reader.readAsDataURL(file);
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

// ==================== 点赞功能 ====================
// 初始化点赞功能
document.addEventListener('DOMContentLoaded', function() {
    initLikeFeature();
});

// 初始化点赞功能
function initLikeFeature() {
    // 获取所有点赞按钮
    const likeBtns = document.querySelectorAll('.like-btn');
    
    likeBtns.forEach(btn => {
        const postId = btn.getAttribute('data-post-id');
        if (!postId) return;
        
        // 从localStorage读取点赞状态
        const isLiked = localStorage.getItem(`liked_${postId}`) === 'true';
        
        // 初始化按钮状态
        updateLikeButtonState(btn, isLiked);
        
        // 绑定点击事件
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleLike(this, postId);
        });
    });
}

// 切换点赞状态
function toggleLike(btn, postId) {
    const isLiked = localStorage.getItem(`liked_${postId}`) === 'true';
    const newLikedState = !isLiked;
    
    // 更新localStorage
    localStorage.setItem(`liked_${postId}`, newLikedState.toString());
    
    // 更新按钮状态
    updateLikeButtonState(btn, newLikedState);
    
    // 更新点赞数
    updateLikeCount(btn, newLikedState);
    
    // 添加动画效果
    addLikeAnimation(btn);
}

// 更新点赞按钮状态
function updateLikeButtonState(btn, isLiked) {
    const icon = btn.querySelector('i');
    
    if (isLiked) {
        // 已点赞状态 - 红色实心
        btn.classList.add('liked');
        if (icon) {
            icon.classList.remove('far');
            icon.classList.add('fas');
        }
    } else {
        // 未点赞状态 - 灰色空心
        btn.classList.remove('liked');
        if (icon) {
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    }
}

// 更新点赞数
function updateLikeCount(btn, isLiked) {
    // 获取当前显示的点赞数
    const text = btn.textContent.trim();
    const match = text.match(/(\d+)/);
    
    if (match) {
        let count = parseInt(match[1]);
        
        if (isLiked) {
            count++;
        } else {
            count--;
        }
        
        // 更新按钮文本
        const icon = btn.querySelector('i');
        if (icon) {
            btn.innerHTML = `<i class="${icon.className}"></i> ${count}`;
        } else {
            btn.textContent = count;
        }
        
        // 重新应用状态（因为innerHTML会重置）
        updateLikeButtonState(btn, isLiked);
    }
}

// 添加点赞动画
function addLikeAnimation(btn) {
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);
}

// ==================== 个人中心分页面功能 ====================
// 计划数据
const myPlansData = {
    '云南深度游': {
        status: '规划中',
        date: '2024-05-01',
        days: '7天',
        people: '2人',
        budget: '8000元',
        itinerary: [
            { day: 'D1', title: '昆明 - 大理', desc: '抵达昆明长水机场，乘坐高铁前往大理，入住古城客栈' },
            { day: 'D2', title: '大理古城 - 洱海', desc: '游览大理古城，下午环洱海骑行，晚上品尝白族美食' },
            { day: 'D3', title: '大理 - 丽江', desc: '前往丽江，游览丽江古城，晚上观看《印象丽江》演出' }
        ]
    },
    '川西环线自驾游': {
        status: '已保存',
        date: '2024-07-15',
        days: '10天',
        people: '4人',
        budget: '15000元',
        itinerary: [
            { day: 'D1', title: '成都 - 康定', desc: '从成都出发，沿雅康高速前往康定，游览跑马山' },
            { day: 'D2', title: '康定 - 新都桥', desc: '翻越折多山，抵达摄影天堂新都桥' },
            { day: 'D3', title: '新都桥 - 稻城', desc: '穿越高尔寺山，抵达稻城亚丁' }
        ]
    }
};

// 旅行日志数据
const travelogData = {
    '西湖之旅': {
        date: '2024-03-15',
        location: '杭州 · 西湖',
        content: '<p>今天游览了西湖，景色美不胜收，特别是断桥残雪的景点，让人流连忘返。</p><p>早上从断桥出发，沿着白堤一路走到平湖秋月，湖面波光粼粼，远处的雷峰塔若隐若现。中午在楼外楼品尝了正宗的西湖醋鱼和东坡肉。</p><p>下午乘船游览三潭印月，岛上亭台楼阁，古朴典雅。傍晚时分，夕阳西下，湖面金光闪闪，美不胜收。</p>',
        tags: ['#西湖', '#杭州', '#春天']
    },
    '哈尔滨冰雪大世界': {
        date: '2024-01-20',
        location: '哈尔滨 · 冰雪大世界',
        content: '<p>冰雪大世界真的太壮观了，各种冰雕栩栩如生，夜晚的灯光秀更是精彩。</p><p>白天参观了各种主题冰雕，有城堡、动物、人物等，每一件作品都让人惊叹不已。晚上灯光亮起，整个冰雪世界变成了童话般的梦幻王国。</p><p>虽然天气很冷，但是玩得非常开心，强烈推荐大家冬天来哈尔滨体验！</p>',
        tags: ['#哈尔滨', '#冰雪大世界', '#冬天']
    }
};

// 私信数据
const messageData = {
    '系统通知': {
        time: '2024-03-16 10:30',
        content: '<p>您的旅行计划已更新，请注意查看详情。</p><p>您预订的云南深度游计划已成功更新，出发日期为2024年5月1日，行程共7天。</p><p>如有任何问题，请随时联系客服。祝您旅途愉快！</p>'
    },
    '旅行助手': {
        time: '2024-03-15 14:20',
        content: '<p>您预订的酒店已确认，入住时间为2024-04-01。</p><p>酒店名称：杭州西湖边精品民宿</p><p>地址：杭州市西湖区北山街XX号</p><p>联系电话：0571-XXXXXXXX</p>'
    },
    '好友小明': {
        time: '2024-03-14 09:15',
        content: '<p>你好，周末一起去杭州玩吗？我有个不错的行程推荐。</p><p>我们可以周六早上出发，先去灵隐寺，然后去西溪湿地，晚上住在西湖边。周日环湖骑行，下午返程。</p><p>你觉得怎么样？如果感兴趣的话，我们可以详细规划一下！</p>'
    }
};

// 初始化分页面功能
document.addEventListener('DOMContentLoaded', function() {
    initProfileModals();
});

function initProfileModals() {
    // 我的计划点击事件
    const planItems = document.querySelectorAll('.plan-item');
    planItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            openMyPlanModal(title);
        });
    });

    // 旅行日志点击事件
    const travelogItems = document.querySelectorAll('.travelog-item');
    travelogItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            openTravelogModal(title);
        });
    });

    // 私信点击事件
    const messageItems = document.querySelectorAll('.message-item');
    messageItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const sender = this.querySelector('h4').textContent;
            openMessageModal(sender);
        });
    });

    // 关闭按钮事件
    document.getElementById('closeMyPlanModal')?.addEventListener('click', closeMyPlanModal);
    document.getElementById('closeTravelogModal')?.addEventListener('click', closeTravelogModal);
    document.getElementById('closeMessageModal')?.addEventListener('click', closeMessageModal);

    // 点击遮罩关闭
    document.getElementById('myPlanModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeMyPlanModal();
    });
    document.getElementById('travelogModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeTravelogModal();
    });
    document.getElementById('messageModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeMessageModal();
    });

    // 按钮事件
    document.getElementById('btnEditPlan')?.addEventListener('click', function() {
        showToast('info', '提示', '编辑功能开发中...');
    });
    document.getElementById('btnSharePlan')?.addEventListener('click', function() {
        showToast('success', '分享成功', '计划链接已复制到剪贴板！');
    });
    document.getElementById('btnEditTravelog')?.addEventListener('click', function() {
        showToast('info', '提示', '编辑功能开发中...');
    });
    document.getElementById('btnShareTravelog')?.addEventListener('click', function() {
        showToast('success', '分享成功', '日志链接已复制到剪贴板！');
    });

    // 快捷回复按钮
    document.querySelectorAll('.quick-reply-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const textarea = document.querySelector('.reply-input textarea');
            if (textarea) {
                textarea.value = this.textContent;
            }
        });
    });

    // 发送按钮
    document.querySelector('.btn-send')?.addEventListener('click', function() {
        const textarea = document.querySelector('.reply-input textarea');
        if (textarea && textarea.value.trim()) {
            showToast('success', '发送成功', '您的消息已发送！');
            textarea.value = '';
            closeMessageModal();
        } else {
            showToast('warning', '提示', '请输入回复内容');
        }
    });
}

// 打开我的计划弹窗
function openMyPlanModal(title) {
    const modal = document.getElementById('myPlanModal');
    const data = myPlansData[title];
    
    if (data) {
        document.getElementById('myPlanTitle').textContent = title;
        document.getElementById('myPlanStatus').textContent = data.status;
        document.getElementById('myPlanStatus').className = 'plan-status-badge ' + (data.status === '已保存' ? 'saved' : '');
        document.getElementById('myPlanDate').textContent = data.date;
        document.getElementById('myPlanDays').textContent = data.days;
        document.getElementById('myPlanPeople').textContent = data.people;
        document.getElementById('myPlanBudget').textContent = data.budget;
        
        const itineraryList = document.getElementById('myPlanItinerary');
        itineraryList.innerHTML = data.itinerary.map(item => `
            <div class="itinerary-item">
                <div class="day-badge">${item.day}</div>
                <div class="itinerary-content">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            </div>
        `).join('');
    }
    
    modal.classList.add('active');
}

// 关闭我的计划弹窗
function closeMyPlanModal() {
    document.getElementById('myPlanModal').classList.remove('active');
}

// 打开旅行日志弹窗
function openTravelogModal(title) {
    const modal = document.getElementById('travelogModal');
    const data = travelogData[title];
    
    if (data) {
        document.getElementById('travelogTitle').textContent = title;
        document.getElementById('travelogDate').textContent = data.date;
        document.getElementById('travelogLocation').textContent = data.location;
        document.getElementById('travelogBody').innerHTML = data.content;
        
        const tagsContainer = document.querySelector('.travelog-tags');
        tagsContainer.innerHTML = data.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }
    
    modal.classList.add('active');
}

// 关闭旅行日志弹窗
function closeTravelogModal() {
    document.getElementById('travelogModal').classList.remove('active');
}

// 打开私信弹窗
function openMessageModal(sender) {
    const modal = document.getElementById('messageModal');
    const data = messageData[sender];
    
    if (data) {
        document.getElementById('messageSender').textContent = sender;
        document.getElementById('messageTime').textContent = data.time;
        document.getElementById('messageBody').innerHTML = data.content;
    }
    
    modal.classList.add('active');
}

// 关闭私信弹窗
function closeMessageModal() {
    document.getElementById('messageModal').classList.remove('active');
}

// ==================== 社区特色板块功能 ====================
// 灵魂配对问卷数据
const soulmateQuestions = [
    {
        question: "当你计划旅行时，你更倾向于？",
        options: ["提前做好详细攻略", "随心所欲，走到哪算哪", "参考他人推荐再决定", "只定大方向，细节随缘"]
    },
    {
        question: "在旅行中，你更喜欢哪种住宿方式？",
        options: ["豪华酒店，享受服务", "特色民宿，体验当地", "青年旅舍，结交朋友", "户外露营，亲近自然"]
    },
    {
        question: "遇到旅行中的突发状况，你会？",
        options: ["冷静分析，寻找解决方案", "保持乐观，相信船到桥头自然直", "寻求他人帮助", "随机应变，灵活处理"]
    },
    {
        question: "你更喜欢的旅行节奏是？",
        options: ["行程满满，打卡所有景点", "慢节奏，深度体验", "动静结合，张弛有度", "完全放松，睡到自然醒"]
    },
    {
        question: "对于旅行拍照，你的态度是？",
        options: ["必须拍出大片，精心构图", "记录美好瞬间，自然为主", "更享受当下，少拍多感受", "只拍风景，不拍自己"]
    },
    {
        question: "你更喜欢和谁一起旅行？",
        options: ["独自一人，自由自在", "亲密伴侣，浪漫之旅", "三五好友，欢乐同行", "一群伙伴，热闹有趣"]
    },
    {
        question: "旅行中遇到美食，你会？",
        options: ["寻找米其林餐厅", "街头小吃，地道风味", "网红店打卡", "随遇而安，看到什么吃什么"]
    },
    {
        question: "你更喜欢的旅行目的地是？",
        options: ["繁华都市，现代文明", "古镇古村，历史人文", "自然风光，山川湖海", "偏远地区，探险挑战"]
    },
    {
        question: "旅行预算超支了，你会？",
        options: ["严格控制，减少开支", "既然来了，该花就花", "寻找性价比高的替代方案", "打工换宿，继续旅行"]
    },
    {
        question: "在陌生城市迷路了，你会？",
        options: ["使用导航，精准定位", "询问当地人", "随意漫步，发现惊喜", "打车直接回酒店"]
    },
    {
        question: "你更喜欢的交通工具是？",
        options: ["飞机，快速高效", "火车，欣赏沿途风景", "自驾，自由灵活", "徒步或骑行，深度体验"]
    },
    {
        question: "旅行中购物，你更倾向于？",
        options: ["奢侈品，犒劳自己", "当地特产，送给亲友", "纪念品，留作回忆", "什么都不买，轻装上阵"]
    },
    {
        question: "对于旅行中的意外惊喜，你？",
        options: ["期待但会做好准备", "非常期待，这是旅行的乐趣", "有点担心，喜欢按计划", "无所谓，都能接受"]
    },
    {
        question: "你更喜欢的旅行时长是？",
        options: ["周末短途，说走就走", "一周左右，深度游玩", "半个月，慢慢体验", "长期旅行，环游世界"]
    },
    {
        question: "旅行中遇到语言不通，你会？",
        options: ["提前学习基础用语", "使用翻译软件", "肢体语言，全球通用", "找当地华人帮忙"]
    },
    {
        question: "你对旅行中的文化差异？",
        options: ["尊重并遵守当地习俗", "好奇，愿意尝试", "保持自己的习惯", "不太在意，随心所欲"]
    },
    {
        question: "旅行归来后，你会？",
        options: ["整理照片，写游记", "分享朋友圈", "规划下一次旅行", "回归日常，偶尔回忆"]
    },
    {
        question: "你更喜欢的旅行活动是？",
        options: ["博物馆美术馆，文化之旅", "户外运动，挑战自我", "美食探店，吃货之旅", "购物血拼，买买买"]
    },
    {
        question: "对于旅行中的住宿位置，你更看重？",
        options: ["市中心，交通便利", "景区附近，节省时间", "安静区域，好好休息", "有特色，拍照好看"]
    },
    {
        question: "你认为旅行的意义是？",
        options: ["放松身心，逃离日常", "开阔眼界，增长见识", "寻找自我，思考人生", "享受当下，快乐就好"]
    }
];

// 性格类型定义
const personalityTypes = {
    explorer: {
        name: "探险家",
        icon: "🎒",
        desc: "你热爱冒险，喜欢探索未知的领域，享受旅途中的惊喜与挑战。",
        traits: ["勇敢", "好奇", "独立"],
        complementary: "planner",
        similar: "explorer"
    },
    planner: {
        name: "规划师",
        icon: "📋",
        desc: "你喜欢井井有条，详细的攻略让你感到安心，追求完美旅行体验。",
        traits: ["细致", "可靠", "高效"],
        complementary: "explorer",
        similar: "planner"
    },
    socializer: {
        name: "社交达人",
        icon: "🤝",
        desc: "你热爱与人交流，旅行中结交新朋友是你最大的乐趣。",
        traits: ["热情", "开朗", "友善"],
        complementary: "thinker",
        similar: "socializer"
    },
    thinker: {
        name: "思考者",
        icon: "🧘",
        desc: "你喜欢独处和思考，旅行是你沉淀心灵、寻找自我的方式。",
        traits: ["内敛", "深沉", "独立"],
        complementary: "socializer",
        similar: "thinker"
    },
    foodie: {
        name: "美食家",
        icon: "🍜",
        desc: "你对美食有着执着的追求，旅行就是一场味蕾的冒险。",
        traits: ["挑剔", "享受", "热情"],
        complementary: "photographer",
        similar: "foodie"
    },
    photographer: {
        name: "记录者",
        icon: "📸",
        desc: "你用镜头记录世界，每一张照片都是一个故事。",
        traits: ["审美", "耐心", "创意"],
        complementary: "foodie",
        similar: "photographer"
    }
};

// 模拟用户数据
const mockUsers = [
    { name: "小明", age: 25, location: "北京", tags: ["摄影", "美食", "徒步"], compatibility: 95 },
    { name: "小红", age: 23, location: "上海", tags: ["文艺", "咖啡", "看展"], compatibility: 88 },
    { name: "阿杰", age: 27, location: "成都", tags: ["户外", "探险", "自驾"], compatibility: 92 },
    { name: "Lisa", age: 24, location: "杭州", tags: ["美食", "拍照", "慢生活"], compatibility: 85 },
    { name: "大伟", age: 26, location: "深圳", tags: ["科技", "城市", "购物"], compatibility: 78 },
    { name: "晓晓", age: 22, location: "西安", tags: ["历史", "文化", "博物馆"], compatibility: 90 }
];

// 商家数据
const merchants = [
    { name: "云隐山居", location: "丽江", discount: "最高全免", type: "民宿" },
    { name: "洱海听涛", location: "大理", discount: "减免50%", type: "客栈" },
    { name: "西湖雅舍", location: "杭州", discount: "减免30%", type: "酒店" },
    { name: "古城记忆", location: "西安", discount: "减免40%", type: "民宿" },
    { name: "山居秋暝", location: "黄山", discount: "最高全免", type: "度假村" },
    { name: "海边小屋", location: "厦门", discount: "减免35%", type: "民宿" }
];

// 初始化社区板块
document.addEventListener('DOMContentLoaded', function() {
    initCommunityFeatures();
});

function initCommunityFeatures() {
    // 灵魂配对按钮事件
    const soulmateBtn = document.querySelector('.feature-card.soulmate .feature-btn');
    if (soulmateBtn) {
        soulmateBtn.addEventListener('click', openSoulmateModal);
    }

    // 围炉交友按钮事件
    const gatheringBtn = document.querySelector('.feature-card.gathering .feature-btn');
    if (gatheringBtn) {
        gatheringBtn.textContent = '寻找伙伴';
        gatheringBtn.addEventListener('click', openGatheringModal);
    }

    // 光影留宿按钮事件
    const photoBtn = document.querySelector('.feature-card.photo .feature-btn');
    if (photoBtn) {
        photoBtn.textContent = '参与减免';
        photoBtn.addEventListener('click', openPhotoStayModal);
    }

    // 关闭按钮事件
    document.getElementById('closeSoulmateModal')?.addEventListener('click', closeSoulmateModal);
    document.getElementById('closeGatheringModal')?.addEventListener('click', closeGatheringModal);
    document.getElementById('closeGatheringMessageModal')?.addEventListener('click', closeGatheringMessageModal);
    document.getElementById('closePhotoStayModal')?.addEventListener('click', closePhotoStayModal);

    // 点击遮罩关闭
    document.getElementById('soulmateModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeSoulmateModal();
    });
    document.getElementById('gatheringModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeGatheringModal();
    });
    document.getElementById('gatheringMessageModal')?.addEventListener('click', function(e) {
        if (e.target === this) closeGatheringMessageModal();
    });
    document.getElementById('photoStayModal')?.addEventListener('click', function(e) {
        if (e.target === this) closePhotoStayModal();
    });

    // 初始化灵魂配对
    initSoulmateFeature();

    // 初始化围炉交友
    initGatheringFeature();

    // 初始化光影留宿
    initPhotoStayFeature();
}

// ==================== 灵魂配对功能 ====================
let currentQuestionIndex = 0;
let userAnswers = [];
let userPersonality = null;

function initSoulmateFeature() {
    // 下一题按钮
    document.getElementById('btnNextQuestion')?.addEventListener('click', nextQuestion);

    // 上一题按钮
    document.getElementById('btnPrevQuestion')?.addEventListener('click', prevQuestion);

    // 匹配方式选择
    document.getElementById('complementaryMatch')?.addEventListener('click', () => showMatchResults('complementary'));
    document.getElementById('similarMatch')?.addEventListener('click', () => showMatchResults('similar'));

    // 重新测试
    document.getElementById('btnRetakeQuiz')?.addEventListener('click', retakeQuiz);

    // 返回结果
    document.getElementById('btnBackToResult')?.addEventListener('click', showResultPage);

    // 渲染第一题
    renderQuestion();
}

function openSoulmateModal() {
    document.getElementById('soulmateModal').classList.add('active');
    showQuizPage();
}

function closeSoulmateModal() {
    document.getElementById('soulmateModal').classList.remove('active');
}

function renderQuestion() {
    const container = document.getElementById('quizContainer');
    const question = soulmateQuestions[currentQuestionIndex];

    container.innerHTML = `
        <div class="question-card">
            <div class="question-number">问题 ${currentQuestionIndex + 1}</div>
            <div class="question-text">${question.question}</div>
            <div class="options-list">
                ${question.options.map((option, index) => `
                    <div class="option-item ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}" data-index="${index}">
                        <div class="option-radio">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="option-text">${option}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // 更新进度
    const progress = ((currentQuestionIndex + 1) / soulmateQuestions.length) * 100;
    document.getElementById('quizProgressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;

    // 更新按钮状态
    document.getElementById('btnPrevQuestion').disabled = currentQuestionIndex === 0;
    document.getElementById('btnNextQuestion').innerHTML = currentQuestionIndex === soulmateQuestions.length - 1 ? '查看结果 <i class="fas fa-star"></i>' : '下一题 <i class="fas fa-arrow-right"></i>';

    // 绑定选项点击事件
    container.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            userAnswers[currentQuestionIndex] = index;
            renderQuestion();
        });
    });
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        showToast('warning', '提示', '请先选择一个选项');
        return;
    }

    if (currentQuestionIndex < soulmateQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        calculatePersonality();
        showResultPage();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function calculatePersonality() {
    // 简化算法：根据答案分布判断性格类型
    const answerSum = userAnswers.reduce((a, b) => a + b, 0);
    const avg = answerSum / userAnswers.length;

    if (avg < 0.5) userPersonality = 'planner';
    else if (avg < 1.0) userPersonality = 'explorer';
    else if (avg < 1.5) userPersonality = 'socializer';
    else if (avg < 2.0) userPersonality = 'thinker';
    else if (avg < 2.5) userPersonality = 'foodie';
    else userPersonality = 'photographer';
}

function showQuizPage() {
    document.getElementById('soulmateQuizPage').classList.remove('hidden');
    document.getElementById('soulmateResultPage').classList.add('hidden');
    document.getElementById('soulmateMatchPage').classList.add('hidden');
}

function showResultPage() {
    document.getElementById('soulmateQuizPage').classList.add('hidden');
    document.getElementById('soulmateResultPage').classList.remove('hidden');
    document.getElementById('soulmateMatchPage').classList.add('hidden');

    // 显示性格结果
    const personality = personalityTypes[userPersonality];
    document.getElementById('personalityType').textContent = personality.name;
    document.getElementById('personalityDesc').textContent = personality.desc;
    document.querySelector('.personality-icon').textContent = personality.icon;

    const traitsContainer = document.querySelector('.personality-traits');
    traitsContainer.innerHTML = personality.traits.map(trait => `<span class="trait">${trait}</span>`).join('');
}

function showMatchResults(type) {
    document.getElementById('soulmateQuizPage').classList.add('hidden');
    document.getElementById('soulmateResultPage').classList.add('hidden');
    document.getElementById('soulmateMatchPage').classList.remove('hidden');

    // 生成匹配结果
    const resultsContainer = document.getElementById('matchResults');
    resultsContainer.innerHTML = mockUsers.map(user => `
        <div class="match-user-card">
            <div class="match-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="match-info">
                <h4>${user.name} · ${user.age}岁</h4>
                <p>${user.location}</p>
                <div class="match-tags">
                    ${user.tags.map(tag => `<span class="match-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="match-compatibility">
                <span>${user.compatibility}%</span>
                <small>匹配度</small>
            </div>
        </div>
    `).join('');
}

function retakeQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    userPersonality = null;
    renderQuestion();
    showQuizPage();
}

// ==================== 围炉交友功能 ====================
function initGatheringFeature() {
    // 寻找伙伴按钮
    document.getElementById('btnFindGathering')?.addEventListener('click', findGatheringUsers);

    // 设置今天为默认日期
    const dateInput = document.getElementById('gatheringDate');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
    }

    // 发送消息按钮
    document.getElementById('btnSendGatheringMessage')?.addEventListener('click', sendGatheringMessage);

    // 回车发送
    document.getElementById('gatheringMessageInput')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendGatheringMessage();
    });
}

function openGatheringModal() {
    document.getElementById('gatheringModal').classList.add('active');
}

function closeGatheringModal() {
    document.getElementById('gatheringModal').classList.remove('active');
}

function openGatheringMessageModal(userName, location, date) {
    document.getElementById('gatheringMessageUser').textContent = userName;
    document.getElementById('gatheringMessageLocation').textContent = `${location} · ${date}`;
    document.getElementById('gatheringMessageModal').classList.add('active');

    // 清空聊天记录
    const chatContainer = document.getElementById('gatheringChat');
    chatContainer.innerHTML = `
        <div class="chat-welcome">
            <i class="fas fa-handshake"></i>
            <p>你们都在同一时间同一地点，打个招呼吧！</p>
        </div>
    `;
}

function closeGatheringMessageModal() {
    document.getElementById('gatheringMessageModal').classList.remove('active');
}

function findGatheringUsers() {
    const location = document.getElementById('gatheringLocation').value;
    const date = document.getElementById('gatheringDate').value;

    if (!location || !date) {
        showToast('warning', '提示', '请选择地点和日期');
        return;
    }

    const resultsContainer = document.getElementById('gatheringResults');

    // 显示匹配结果
    resultsContainer.innerHTML = `
        <div class="gathering-users">
            ${mockUsers.slice(0, 4).map(user => `
                <div class="gathering-user-card" onclick="openGatheringMessageModal('${user.name}', '${location}', '${date}')">
                    <div class="gathering-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="gathering-user-info">
                        <h4>${user.name}</h4>
                        <p>${user.location} · ${user.tags.slice(0, 2).join('、')}</p>
                    </div>
                    <div class="gathering-actions">
                        <button class="btn-icon" title="交换记忆"><i class="fas fa-exchange-alt"></i></button>
                        <button class="btn-icon" title="私信"><i class="fas fa-comment"></i></button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // 显示记忆交换区
    document.getElementById('memoryExchange').classList.remove('hidden');

    // 生成记忆卡片
    const memoryList = document.getElementById('memoryList');
    memoryList.innerHTML = [
        { user: '小明', content: '上次来丽江，我在古城的小巷里迷路了，却意外发现了一家超棒的咖啡馆！' },
        { user: '小红', content: '大理的洱海真的很美，建议大家一定要看一次日出，那种宁静让人难忘。' }
    ].map(memory => `
        <div class="memory-card">
            <div class="memory-header">
                <div class="memory-avatar"><i class="fas fa-user"></i></div>
                <div class="memory-meta">
                    <h4>${memory.user}</h4>
                    <span>刚刚分享了记忆</span>
                </div>
            </div>
            <div class="memory-content">${memory.content}</div>
        </div>
    `).join('');

    showToast('success', '匹配成功', `在${location}找到4位同路人！`);
}

function sendGatheringMessage() {
    const input = document.getElementById('gatheringMessageInput');
    const message = input.value.trim();

    if (!message) return;

    const chatContainer = document.getElementById('gatheringChat');

    // 添加自己的消息
    chatContainer.innerHTML += `
        <div class="chat-message own">
            <div class="chat-bubble">${message}</div>
        </div>
    `;

    input.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // 模拟对方回复
    setTimeout(() => {
        chatContainer.innerHTML += `
            <div class="chat-message">
                <div class="chat-bubble">你好！很高兴认识你，我们可以一起逛逛${document.getElementById('gatheringMessageLocation').textContent.split(' · ')[0]}！</div>
            </div>
        `;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}

// ==================== 光影留宿功能 ====================
function initPhotoStayFeature() {
    // 渲染商家
    const merchantGrid = document.getElementById('merchantGrid');
    if (merchantGrid) {
        merchantGrid.innerHTML = merchants.map(merchant => `
            <div class="merchant-card">
                <div class="merchant-img"><i class="fas fa-store"></i></div>
                <div class="merchant-info">
                    <h4>${merchant.name}</h4>
                    <p>${merchant.location} · ${merchant.type}</p>
                    <span class="merchant-discount">${merchant.discount}</span>
                </div>
            </div>
        `).join('');
    }

    // 填充商家选择下拉框
    const merchantSelect = document.getElementById('selectMerchant');
    if (merchantSelect) {
        merchants.forEach(merchant => {
            const option = document.createElement('option');
            option.value = merchant.name;
            option.textContent = `${merchant.name} (${merchant.location})`;
            merchantSelect.appendChild(option);
        });
    }

    // 上传区域点击
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('photoUpload');

    uploadArea?.addEventListener('click', () => fileInput?.click());

    uploadArea?.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#00F2FE';
        uploadArea.style.background = 'rgba(0, 242, 254, 0.1)';
    });

    uploadArea?.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        uploadArea.style.background = 'transparent';
    });

    uploadArea?.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        uploadArea.style.background = 'transparent';
        handleFileUpload(e.dataTransfer.files);
    });

    fileInput?.addEventListener('change', (e) => {
        handleFileUpload(e.target.files);
    });

    // 提交按钮
    document.getElementById('btnSubmitPhoto')?.addEventListener('click', submitPhotoWork);
}

function openPhotoStayModal() {
    document.getElementById('photoStayModal').classList.add('active');
}

function closePhotoStayModal() {
    document.getElementById('photoStayModal').classList.remove('active');
}

function handleFileUpload(files) {
    const previewContainer = document.getElementById('uploadPreview');

    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const div = document.createElement('div');
                div.className = 'preview-item';
                div.innerHTML = `
                    <img src="${e.target.result}" alt="预览">
                    <button class="preview-remove" onclick="this.parentElement.remove()">×</button>
                `;
                previewContainer.appendChild(div);
            };
            reader.readAsDataURL(file);
        }
    });
}

function submitPhotoWork() {
    const merchant = document.getElementById('selectMerchant').value;
    const description = document.getElementById('photoDescription').value;
    const previewItems = document.querySelectorAll('.preview-item');

    if (!merchant) {
        showToast('warning', '提示', '请选择合作商家');
        return;
    }

    if (previewItems.length === 0) {
        showToast('warning', '提示', '请上传至少一张作品');
        return;
    }

    showToast('success', '提交成功', '作品已提交审核，请耐心等待！');

    // 清空表单
    document.getElementById('selectMerchant').value = '';
    document.getElementById('photoDescription').value = '';
    document.getElementById('uploadPreview').innerHTML = '';
}
