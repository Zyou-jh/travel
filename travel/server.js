const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 8000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静态文件服务
app.use(express.static(__dirname));

// 上传目录
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// 配置multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// 模拟数据库
let users = [];
let posts = [];
let avatars = {};
let comments = [];
let favorites = [];
let searchHistory = [];
let messages = [];

// 初始化模拟数据
function initData() {
    users = [
        {
            id: 1,
            username: '旅行者',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456', 10),
            registerTime: new Date().toISOString()
        }
    ];

    posts = [
        {
            id: 1,
            userId: 1,
            username: '旅行者',
            content: '云南之旅太美了！洱海的风，大理的古城，每一处都是风景...',
            location: '云南',
            time: '2024-03-15T10:00:00Z',
            likes: 128,
            comments: 32
        },
        {
            id: 2,
            userId: 1,
            username: '旅行者',
            content: '终于完成西藏之旅！布达拉宫的震撼无法用言语形容，强烈推荐给大家！',
            location: '西藏',
            time: '2024-03-14T15:30:00Z',
            likes: 256,
            comments: 45
        }
    ];
}

initData();

// 身份验证中间件
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ success: false, message: '请先登录' });
    }

    try {
        const decoded = jwt.verify(token, 'secret_key');
        req.userId = decoded.userId;
        req.username = decoded.username;
        req.email = decoded.email;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Token无效或已过期' });
    }
};

// ==================== API路由 ====================

// --- 用户认证 ---

// 登录
app.post('/api/login', (req, res) => {
    const { email, password, rememberMe } = req.body;
    
    const user = users.find(u => u.email === email);
    
    if (!user) {
        return res.status(401).json({ success: false, message: '邮箱或密码错误' });
    }
    
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: '邮箱或密码错误' });
    }
    
    const token = jwt.sign({ userId: user.id, username: user.username, email: user.email }, 'secret_key', { expiresIn: '7d' });
    
    res.json({
        success: true,
        message: '登录成功',
        user: {
            id: user.id,
            username: user.username,
            email: user.email
        },
        token
    });
});

// 注册
app.post('/api/register', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    
    if (password.length < 6) {
        return res.status(400).json({ success: false, message: '密码长度至少6位' });
    }
    
    if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: '两次输入的密码不一致' });
    }
    
    if (users.some(u => u.email === email)) {
        return res.status(400).json({ success: false, message: '该邮箱已被注册' });
    }
    
    if (users.some(u => u.username === username)) {
        return res.status(400).json({ success: false, message: '该用户名已被使用' });
    }
    
    const newUser = {
        id: users.length + 1,
        username,
        email,
        password: bcrypt.hashSync(password, 10),
        registerTime: new Date().toISOString()
    };
    
    users.push(newUser);
    
    res.json({ success: true, message: '注册成功' });
});

// --- 头像管理 ---

// 上传头像
app.post('/api/upload-avatar', upload.single('avatar'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: '请选择文件' });
    }
    
    const userId = req.body.userId;
    const avatarPath = '/uploads/' + req.file.filename;
    
    avatars[userId] = avatarPath;
    
    res.json({
        success: true,
        message: '头像上传成功',
        avatarUrl: avatarPath
    });
});

// 获取头像
app.get('/api/avatar/:userId', (req, res) => {
    const { userId } = req.params;
    const avatarPath = avatars[userId];
    
    if (avatarPath) {
        res.json({ success: true, avatarUrl: avatarPath });
    } else {
        res.json({ success: false, message: '头像不存在' });
    }
});

// --- 帖子管理 ---

// 发布帖子
app.post('/api/posts', authMiddleware, (req, res) => {
    const { content, location } = req.body;
    
    if (!content) {
        return res.status(400).json({ success: false, message: '内容不能为空' });
    }
    
    const user = users.find(u => u.id === req.userId);
    
    const newPost = {
        id: posts.length + 1,
        userId: req.userId,
        username: user ? user.username : '匿名用户',
        content,
        location: location || '',
        time: new Date().toISOString(),
        likes: 0,
        comments: 0
    };
    
    posts.unshift(newPost);
    
    res.json({ success: true, message: '发布成功', post: newPost });
});

// 获取帖子列表
app.get('/api/posts', (req, res) => {
    res.json({ success: true, posts });
});

// 点赞帖子
app.post('/api/posts/:id/like', authMiddleware, (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id == id);
    
    if (post) {
        post.likes++;
        res.json({ success: true, message: '点赞成功', likes: post.likes });
    } else {
        res.status(404).json({ success: false, message: '帖子不存在' });
    }
});

// --- 评论功能 ---

// 发表评论
app.post('/api/posts/:id/comments', authMiddleware, (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    
    if (!content) {
        return res.status(400).json({ success: false, message: '评论内容不能为空' });
    }
    
    const post = posts.find(p => p.id == id);
    if (!post) {
        return res.status(404).json({ success: false, message: '帖子不存在' });
    }
    
    const user = users.find(u => u.id === req.userId);
    
    const newComment = {
        id: comments.length + 1,
        postId: parseInt(id),
        userId: req.userId,
        username: user ? user.username : '匿名用户',
        content,
        time: new Date().toISOString()
    };
    
    comments.push(newComment);
    post.comments++;
    
    res.status(201).json({ success: true, message: '评论成功', comment: newComment });
});

// 获取帖子评论
app.get('/api/posts/:id/comments', (req, res) => {
    const { id } = req.params;
    const postComments = comments.filter(c => c.postId == id);
    res.json({ success: true, comments: postComments });
});

// --- 收藏功能 ---

// 收藏/取消收藏
app.post('/api/posts/:id/collect', authMiddleware, (req, res) => {
    const { id } = req.params;
    const existingFav = favorites.find(f => f.userId === req.userId && f.postId == id);
    
    if (existingFav) {
        favorites = favorites.filter(f => f.id !== existingFav.id);
        res.json({ success: true, message: '已取消收藏' });
    } else {
        const newFav = {
            id: favorites.length + 1,
            userId: req.userId,
            postId: parseInt(id),
            time: new Date().toISOString()
        };
        favorites.push(newFav);
        res.status(201).json({ success: true, message: '收藏成功' });
    }
});

// 获取用户收藏列表
app.get('/api/favorites', authMiddleware, (req, res) => {
    const userFavorites = favorites.filter(f => f.userId === req.userId);
    const favoritePosts = userFavorites.map(fav => {
        const post = posts.find(p => p.id === fav.postId);
        return post ? { ...post, collectedAt: fav.time } : null;
    }).filter(Boolean);
    
    res.json({ success: true, favorites: favoritePosts });
});

// --- 搜索功能 ---

// 搜索帖子
app.get('/api/search', authMiddleware, (req, res) => {
    const { keyword } = req.query;
    
    if (keyword) {
        searchHistory = searchHistory.filter(h => h.userId !== req.userId);
        searchHistory.push({
            id: searchHistory.length + 1,
            userId: req.userId,
            keyword,
            time: new Date().toISOString()
        });
        
        const results = posts.filter(post => 
            post.content.toLowerCase().includes(keyword.toLowerCase()) ||
            post.location.toLowerCase().includes(keyword.toLowerCase())
        );
        
        res.json({ success: true, results });
    } else {
        const userHistory = searchHistory
            .filter(h => h.userId === req.userId)
            .sort((a, b) => new Date(b.time) - new Date(a.time))
            .slice(0, 10);
        
        res.json({ success: true, history: userHistory });
    }
});

// --- 私信功能 ---

// 发送私信
app.post('/api/messages', authMiddleware, (req, res) => {
    const { receiverId, content } = req.body;
    
    if (!content) {
        return res.status(400).json({ success: false, message: '消息内容不能为空' });
    }
    
    if (!receiverId) {
        return res.status(400).json({ success: false, message: '接收者ID不能为空' });
    }
    
    const sender = users.find(u => u.id === req.userId);
    const receiver = users.find(u => u.id == receiverId);
    
    if (!receiver) {
        return res.status(404).json({ success: false, message: '接收者不存在' });
    }
    
    const newMessage = {
        id: messages.length + 1,
        senderId: req.userId,
        senderName: sender ? sender.username : '匿名用户',
        receiverId: parseInt(receiverId),
        receiverName: receiver.username,
        content,
        isRead: false,
        time: new Date().toISOString()
    };
    
    messages.push(newMessage);
    
    res.status(201).json({ success: true, message: '发送成功', data: newMessage });
});

// 获取与某人的聊天记录
app.get('/api/messages/:otherUserId', authMiddleware, (req, res) => {
    const { otherUserId } = req.params;
    
    const chatMessages = messages.filter(m => 
        (m.senderId === req.userId && m.receiverId == otherUserId) ||
        (m.senderId == otherUserId && m.receiverId === req.userId)
    ).sort((a, b) => new Date(a.time) - new Date(b.time));
    
    messages.forEach(m => {
        if (m.senderId == otherUserId && m.receiverId === req.userId) {
            m.isRead = true;
        }
    });
    
    res.json({ success: true, messages: chatMessages });
});

// 获取用户的消息列表
app.get('/api/messages', authMiddleware, (req, res) => {
    const userMessages = messages.filter(m => 
        m.senderId === req.userId || m.receiverId === req.userId
    );
    
    const uniqueUsers = {};
    userMessages.forEach(msg => {
        const otherId = msg.senderId === req.userId ? msg.receiverId : msg.senderId;
        const otherName = msg.senderId === req.userId ? msg.receiverName : msg.senderName;
        
        if (!uniqueUsers[otherId]) {
            uniqueUsers[otherId] = {
                userId: otherId,
                username: otherName,
                lastMessage: msg.content,
                lastTime: msg.time,
                unreadCount: messages.filter(m => m.senderId === otherId && m.receiverId === req.userId && !m.isRead).length
            };
        } else {
            if (new Date(msg.time) > new Date(uniqueUsers[otherId].lastTime)) {
                uniqueUsers[otherId].lastMessage = msg.content;
                uniqueUsers[otherId].lastTime = msg.time;
            }
        }
    });
    
    const messageList = Object.values(uniqueUsers).sort((a, b) => 
        new Date(b.lastTime) - new Date(a.lastTime)
    );
    
    res.json({ success: true, contacts: messageList });
});

// --- 景点详情 ---

app.get('/api/attractions/:destination', (req, res) => {
    const { destination } = req.params;
    
    const attractionsData = {
        '北京': {
            name: '北京故宫',
            location: '北京市东城区景山前街4号',
            rating: '4.8',
            hours: '8:30-17:00 (周一闭馆)',
            introduction: '北京故宫是中国明清两代的皇家宫殿，旧称紫禁城，位于北京中轴线的中心，是中国古代宫廷建筑之精华。',
            ticket: '旺季（4月1日-10月31日）：60元/人；淡季（11月1日-次年3月31日）：40元/人',
            transportation: '地铁1号线天安门东站C口出，步行约10分钟；地铁2号线前门站C口出，步行约15分钟；公交1、2、52、59、82、99、120、126路等天安门站下车。',
            images: [
                'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1584622650696-08b45a73e942?w=800&h=600&fit=crop'
            ],
            reviews: [
                { user: '旅行达人小王', time: '2024-03-15', content: '故宫真的太震撼了！红墙黄瓦，气势恢宏，仿佛穿越回了古代。建议早上开门就去，人少的时候拍照特别美。' },
                { user: '历史爱好者', time: '2024-02-20', content: '作为一名历史迷，故宫是我必去的地方。每次来都有新的发现，建议租个讲解器，能了解更多历史细节。' }
            ]
        },
        '上海': {
            name: '外滩',
            location: '上海市黄浦区中山东一路',
            rating: '4.7',
            hours: '全天开放',
            introduction: '外滩是上海市中心的一个区域，由一组始建于19世纪末20世纪初的建筑和黄浦江对岸的陆家嘴金融区组成。',
            ticket: '免费',
            transportation: '地铁2号线、10号线南京东路站下车，步行约10分钟；地铁10号线豫园站下车，步行约15分钟；公交20、37、42、55、65、71、123、135、145、305、307、317、330、805、868、921路等外滩站下车。',
            images: [
                'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1548435404-87b19802c762?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1524473994669-390b0451898d?w=800&h=600&fit=crop'
            ],
            reviews: [
                { user: '城市漫步者', time: '2024-03-10', content: '外滩的夜景真的太美了！万国建筑博览群在灯光的映衬下格外壮观，黄浦江对岸的陆家嘴摩天大楼也非常震撼。建议傍晚时分去，可以看到日落和夜景的变化。' },
                { user: '摄影爱好者', time: '2024-02-25', content: '外滩是摄影的绝佳地点，无论是白天还是夜晚都能拍出精彩的照片。特别是节假日的灯光秀，更是不容错过。' }
            ]
        },
        '西安': {
            name: '兵马俑',
            location: '陕西省西安市临潼区秦始皇陵以东1.5公里处',
            rating: '4.9',
            hours: '8:30-17:30',
            introduction: '秦始皇兵马俑，即秦始皇陵兵马俑，亦简称秦兵马俑或秦俑，位于今陕西省西安市临潼区秦始皇陵以东1.5公里处的兵马俑坑内。',
            ticket: '旺季（3月1日-11月底）：120元/人；淡季（12月1日-次年2月底）：100元/人',
            transportation: '在西安火车站东广场乘坐游5（306）路公交直达；或在西安北站乘坐地铁9号线到华清池站，换乘公交613路到兵马俑站。',
            images: [
                'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1604635389809-176c60b349a1?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800&h=600&fit=crop'
            ],
            reviews: [
                { user: '历史爱好者', time: '2024-03-05', content: '兵马俑真的是世界第八大奇迹！每个陶俑的表情都不一样，栩栩如生，仿佛能感受到两千多年前的历史。建议请个导游讲解，了解更多背后的故事。' },
                { user: '旅行达人', time: '2024-02-18', content: '兵马俑的规模之大令人震撼，1号坑的气势恢宏，2号坑的兵种齐全，3号坑的指挥系统，都展示了古代中国的强大军事力量。' }
            ]
        },
        '成都': {
            name: '大熊猫繁育研究基地',
            location: '四川省成都市成华区熊猫大道1375号',
            rating: '4.8',
            hours: '7:30-18:00',
            introduction: '成都大熊猫繁育研究基地，是中国政府实施大熊猫等濒危野生动物迁地保护工程的主要研究基地之一，国家AAAA级旅游景区。',
            ticket: '58元/人',
            transportation: '在成都市区乘坐地铁3号线到动物园站，换乘熊猫专线公交；或在春熙路乘坐熊猫直通巴；也可在昭觉寺公交站乘坐198路公交直达。',
            images: [
                'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1548013146-125f32f21a09?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1622751820871-9d31b8ac8fa8?w=800&h=600&fit=crop'
            ],
            reviews: [
                { user: '动物爱好者', time: '2024-03-08', content: '大熊猫真的太可爱了！基地环境优美，熊猫们都很活泼，特别是幼年熊猫馆，小熊猫们打闹的样子萌翻了。建议早上去，熊猫比较活跃。' },
                { user: '亲子游家庭', time: '2024-02-22', content: '带孩子来这里非常适合，不仅能看到可爱的大熊猫，还能学到很多关于熊猫的知识。园区很大，建议租个观光车，节省体力。' }
            ]
        },
        '南京': {
            name: '中山陵',
            location: '江苏省南京市玄武区石象路7号',
            rating: '4.7',
            hours: '8:30-17:00',
            introduction: '中山陵是中国近代伟大的民主革命先行者孙中山先生的陵寝，及其附属纪念建筑群，面积8万余平方米。',
            ticket: '免费（需提前预约）',
            transportation: '地铁2号线苜蓿园站下车，换乘景区观光车；或公交34、55、142路等中山陵站下车。',
            images: [
                'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1584273999354-42487931403f?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1584273999354-42487931403f?w=800&h=600&fit=crop'
            ],
            reviews: [
                { user: '历史爱好者', time: '2024-03-02', content: '中山陵的建筑设计非常宏伟，从博爱坊到祭堂的392级台阶象征着当时中国的3.92亿人口。站在祭堂前俯瞰南京城，视野开阔，景色优美。' },
                { user: '旅行达人', time: '2024-02-15', content: '中山陵是南京必去的景点之一，不仅是对孙中山先生的缅怀，也是欣赏南京城市风光的好地方。建议春秋季节去，天气适宜，景色宜人。' }
            ]
        },
        '金华': {
            name: '横店影视城',
            location: '浙江省金华市东阳市横店镇',
            rating: '4.6',
            hours: '各景区开放时间不同，一般为8:30-17:30',
            introduction: '横店影视城，位于浙江省金华市东阳市横店镇，是中国规模最大的影视拍摄基地，也是国家AAAAA级旅游景区。',
            ticket: '联票（秦王宫+明清宫苑+清明上河图+广州街·香港街）：360元/人；单个景区门票：100-180元/人',
            transportation: '在杭州汽车南站或东站乘坐直达横店的班车；或在义乌火车站乘坐班车到横店；也可在金华市区乘坐班车到横店。',
            images: [
                'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1584273999354-42487931403f?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1584273999354-42487931403f?w=800&h=600&fit=crop'
            ],
            reviews: [
                { user: '追剧少女', time: '2024-03-10', content: '横店影视城太好玩了！可以看到很多电视剧的拍摄场景，还能偶遇剧组拍戏。清明上河图景区特别美，穿上汉服拍照超级出片。' },
                { user: '亲子游家庭', time: '2024-02-28', content: '带孩子来横店非常适合，不仅能了解影视拍摄的过程，还能体验各种互动项目。梦幻谷的演出非常精彩，值得一看。' }
            ]
        }
    };
    
    const attraction = attractionsData[destination];
    
    if (attraction) {
        res.json({ success: true, attraction });
    } else {
        res.status(404).json({ success: false, message: '景点不存在' });
    }
});

// --- 健康检查 ---

app.get('/api/health', (req, res) => {
    res.json({ success: true, message: '服务正常运行' });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Available API endpoints:`);
    console.log(`  - POST   /api/login`);
    console.log(`  - POST   /api/register`);
    console.log(`  - POST   /api/upload-avatar`);
    console.log(`  - GET    /api/avatar/:userId`);
    console.log(`  - GET    /api/posts`);
    console.log(`  - POST   /api/posts`);
    console.log(`  - POST   /api/posts/:id/like`);
    console.log(`  - POST   /api/posts/:id/comments`);
    console.log(`  - GET    /api/posts/:id/comments`);
    console.log(`  - POST   /api/posts/:id/collect`);
    console.log(`  - GET    /api/favorites`);
    console.log(`  - GET    /api/search`);
    console.log(`  - POST   /api/messages`);
    console.log(`  - GET    /api/messages`);
    console.log(`  - GET    /api/messages/:otherUserId`);
    console.log(`  - GET    /api/attractions/:destination`);
    console.log(`  - GET    /api/health`);
});
