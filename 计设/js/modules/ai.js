// ==================== AI助手功能 ====================

document.addEventListener('DOMContentLoaded', function() {
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

        addMessage(message, 'user');
        chatInput.value = '';

        setTimeout(() => {
            const aiResponse = generateAIResponse(message);
            addMessage(aiResponse, 'ai');
        }, 1000);
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender === 'ai' ? 'ai-message' : ''}`;
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${sender === 'ai' ? 'robot' : 'user'}"></i>
            </div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateAIResponse(message) {
        const responses = [
            "这是一个很好的问题！让我为您推荐一些热门目的地...",
            "根据您的需求，我建议您可以考虑去云南或者成都，那里风景优美，美食众多。",
            "旅行最重要的是放松心情，您可以选择一个安静的海边城市，享受慢节奏的生活。",
            "如果您喜欢历史文化，西安和北京都是不错的选择，可以感受中华文明的魅力。",
            "我理解您想要一次特别的旅行体验，让我为您规划一条独特的路线吧！"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // AI功能卡片点击
    const featureCards = document.querySelectorAll('.ai-features .feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4')?.textContent || 'AI助手';
            const desc = this.querySelector('p')?.textContent || '';
            
            if (chatInput) {
                chatInput.value = `请帮我${title}`;
                chatInput.focus();
            }
        });
    });
});

window.AI = {
    // 可以导出AI相关函数
};
