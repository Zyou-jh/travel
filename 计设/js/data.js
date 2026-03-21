// ==================== 数据定义 ====================

// 词云数据
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

// 城市景点数据
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

// 导出数据（供其他模块使用）
window.AppData = {
    hotDestinations,
    cityAttractions,
    soulmateQuestions,
    personalityTypes,
    mockUsers,
    merchants
};
