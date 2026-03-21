// ==================== 主入口文件 ====================

document.addEventListener('DOMContentLoaded', function() {
    // 初始化登录状态
    if (window.Auth && window.Auth.checkLoginStatus) {
        window.Auth.checkLoginStatus();
    }
    
    console.log('旅途网站已加载完成！');
});
