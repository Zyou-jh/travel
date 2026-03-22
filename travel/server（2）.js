const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());
// 开放静态文件夹，让前端能访问到上传的图片
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const JWT_SECRET = 'your_super_secret_key_123'; // 实际项目中请放在环境变量 .env 中

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/travel_social_db')
  .then(() => console.log('✅ 数据库连接成功'))
  .catch(err => console.error('❌ 数据库连接失败:', err));

// ==========================================
// 1. 数据模型定义 (Models)
// ==========================================

// 用户模型
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // 加密后的密码
  avatar: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', UserSchema);

// 图文动态模型 (照片+文字)
const PostSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  images:[{ type: String }], // 图片路径数组
  likes:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // 点赞了该帖子的用户ID
  createdAt: { type: Date, default: Date.now }
});
const Post = mongoose.model('Post', PostSchema);

// 评论模型
const CommentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Comment = mongoose.model('Comment', CommentSchema);

// 收藏模型
const CollectionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  createdAt: { type: Date, default: Date.now }
});
const Favorite = mongoose.model('Favorite', CollectionSchema);

// 搜索历史模型
const SearchHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  keyword: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const SearchHistory = mongoose.model('SearchHistory', SearchHistorySchema);

// 私信消息模型
const MessageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', MessageSchema);


// ==========================================
// 2. 核心中间件与配置
// ==========================================

// 图片上传配置 (Multer)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// 身份验证中间件 (解析 JWT Token)
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: '请先登录' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId; // 将解析出的用户ID挂载到请求上
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token 无效或已过期' });
  }
};


// ==========================================
// 3. 业务接口路由 (Routes)
// ==========================================

// --- A. 注册与登录 ---
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: '用户名已存在' });

    // 密码加密
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: '注册成功' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: '用户不存在' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: '密码错误' });

    // 生成 Token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ message: '登录成功', token, userId: user._id, username: user.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- B. 发布照片与文字 ---
// 前端需使用 FormData 格式提交，字段名为 content，文件字段名为 images
app.post('/api/posts', authMiddleware, upload.array('images', 9), async (req, res) => {
  try {
    const { content } = req.body;
    const imageUrls = req.files.map(file => `/uploads/${file.filename}`);

    const newPost = new Post({
      userId: req.userId,
      content,
      images: imageUrls
    });
    await newPost.save();
    res.status(201).json({ message: '发布成功', data: newPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- C. 评论、点赞、收藏 ---
// 1. 点赞/取消点赞
app.post('/api/posts/:id/like', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: '帖子不存在' });

    const index = post.likes.indexOf(req.userId);
    if (index === -1) {
      post.likes.push(req.userId); // 点赞
    } else {
      post.likes.splice(index, 1); // 取消点赞
    }
    await post.save();
    res.json({ message: index === -1 ? '点赞成功' : '已取消点赞', likesCount: post.likes.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. 发表评论
app.post('/api/posts/:id/comments', authMiddleware, async (req, res) => {
  try {
    const newComment = new Comment({
      postId: req.params.id,
      userId: req.userId,
      content: req.body.content
    });
    await newComment.save();
    res.status(201).json({ message: '评论成功', data: newComment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. 收藏/取消收藏
app.post('/api/posts/:id/collect', authMiddleware, async (req, res) => {
  try {
    const existingFav = await Favorite.findOne({ userId: req.userId, postId: req.params.id });
    if (existingFav) {
      await Favorite.findByIdAndDelete(existingFav._id);
      res.json({ message: '已取消收藏' });
    } else {
      const newFav = new Favorite({ userId: req.userId, postId: req.params.id });
      await newFav.save();
      res.status(201).json({ message: '收藏成功' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- D. 搜索与搜索历史 ---
app.get('/api/search', authMiddleware, async (req, res) => {
  try {
    const { keyword } = req.query;
    
    // 记录搜索历史
    if (keyword) {
      await SearchHistory.findOneAndUpdate(
        { userId: req.userId, keyword: keyword },
        { createdAt: Date.now() }, // 更新时间
        { upsert: true } // 如果不存在则插入
      );
      
      // 执行搜索 (这里简单演示通过内容搜索动态)
      const results = await Post.find({ content: { $regex: keyword, $options: 'i' } })
                                .populate('userId', 'username avatar');
      return res.json({ data: results });
    }

    // 如果没有传 keyword，就返回该用户的搜索历史
    const history = await SearchHistory.find({ userId: req.userId })
                                       .sort({ createdAt: -1 }).limit(10);
    res.json({ history });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- E. 私信功能 (RESTful 基础版) ---
// 发送私信
app.post('/api/messages', authMiddleware, async (req, res) => {
  try {
    const { receiverId, content } = req.body;
    const newMessage = new Message({
      senderId: req.userId,
      receiverId,
      content
    });
    await newMessage.save();
    res.status(201).json({ message: '发送成功', data: newMessage });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取与某人的聊天记录
app.get('/api/messages/:otherUserId', authMiddleware, async (req, res) => {
  try {
    const { otherUserId } = req.params;
    const messages = await Message.find({
      $or:[
        { senderId: req.userId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: req.userId }
      ]
    }).sort({ createdAt: 1 }); // 按时间正序排列
    
    // 将对方发给我的未读消息标记为已读
    await Message.updateMany(
      { senderId: otherUserId, receiverId: req.userId, isRead: false },
      { $set: { isRead: true } }
    );

    res.json({ data: messages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// 4. 启动服务器
// ==========================================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 旅游社交后端已启动，端口: ${PORT}`);
});