// ==================== 社区功能 ====================

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
    
    // 点赞功能
    initLikeFeature();
}

// ==================== 点赞功能 ====================
function initLikeFeature() {
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const postId = this.dataset.postId;
            if (!postId) return;
            
            const isLiked = this.classList.toggle('liked');
            const icon = this.querySelector('i');
            
            if (isLiked) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                const countMatch = this.textContent.match(/\d+/);
                if (countMatch) {
                    const count = parseInt(countMatch[0]) + 1;
                    this.innerHTML = `<i class="fas fa-heart"></i> ${count}`;
                }
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                const countMatch = this.textContent.match(/\d+/);
                if (countMatch) {
                    const count = parseInt(countMatch[0]) - 1;
                    this.innerHTML = `<i class="far fa-heart"></i> ${count}`;
                }
            }
            
            // 保存点赞状态到localStorage
            const likedPosts = JSON.parse(localStorage.getItem('liked_posts') || '[]');
            if (isLiked) {
                if (!likedPosts.includes(postId)) {
                    likedPosts.push(postId);
                }
            } else {
                const index = likedPosts.indexOf(postId);
                if (index > -1) {
                    likedPosts.splice(index, 1);
                }
            }
            localStorage.setItem('liked_posts', JSON.stringify(likedPosts));
        });
        
        // 恢复点赞状态
        const postId = btn.dataset.postId;
        if (postId) {
            const likedPosts = JSON.parse(localStorage.getItem('liked_posts') || '[]');
            if (likedPosts.includes(postId)) {
                btn.classList.add('liked');
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                }
            }
        }
    });
}

// ==================== 灵魂配对功能 ====================
let currentQuestionIndex = 0;
let userAnswers = [];
let userPersonality = null;

function initSoulmateFeature() {
    document.getElementById('btnNextQuestion')?.addEventListener('click', nextQuestion);
    document.getElementById('btnPrevQuestion')?.addEventListener('click', prevQuestion);
    document.getElementById('complementaryMatch')?.addEventListener('click', () => showMatchResults('complementary'));
    document.getElementById('similarMatch')?.addEventListener('click', () => showMatchResults('similar'));
    document.getElementById('btnRetakeQuiz')?.addEventListener('click', retakeQuiz);
    document.getElementById('btnBackToResult')?.addEventListener('click', showResultPage);
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
    const questions = window.AppData?.soulmateQuestions || [];
    const question = questions[currentQuestionIndex];

    if (!question) return;

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

    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('quizProgressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;

    document.getElementById('btnPrevQuestion').disabled = currentQuestionIndex === 0;
    document.getElementById('btnNextQuestion').innerHTML = currentQuestionIndex === questions.length - 1 ? '查看结果 <i class="fas fa-star"></i>' : '下一题 <i class="fas fa-arrow-right"></i>';

    container.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            userAnswers[currentQuestionIndex] = index;
            renderQuestion();
        });
    });
}

function nextQuestion() {
    const questions = window.AppData?.soulmateQuestions || [];
    if (userAnswers[currentQuestionIndex] === undefined) {
        window.Utils.showToast('warning', '提示', '请先选择一个选项');
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
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

    const personalityTypes = window.AppData?.personalityTypes || {};
    const personality = personalityTypes[userPersonality];
    if (!personality) return;

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

    const mockUsers = window.AppData?.mockUsers || [];
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
    document.getElementById('btnFindGathering')?.addEventListener('click', findGatheringUsers);

    const dateInput = document.getElementById('gatheringDate');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
    }

    document.getElementById('btnSendGatheringMessage')?.addEventListener('click', sendGatheringMessage);

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
        window.Utils.showToast('warning', '提示', '请选择地点和日期');
        return;
    }

    const resultsContainer = document.getElementById('gatheringResults');
    const mockUsers = window.AppData?.mockUsers || [];

    resultsContainer.innerHTML = `
        <div class="gathering-users">
            ${mockUsers.slice(0, 4).map(user => `
                <div class="gathering-user-card" onclick="window.Community.openGatheringMessageModal('${user.name}', '${location}', '${date}')">
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

    document.getElementById('memoryExchange').classList.remove('hidden');

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

    window.Utils.showToast('success', '匹配成功', `在${location}找到4位同路人！`);
}

function sendGatheringMessage() {
    const input = document.getElementById('gatheringMessageInput');
    const message = input.value.trim();

    if (!message) return;

    const chatContainer = document.getElementById('gatheringChat');

    chatContainer.innerHTML += `
        <div class="chat-message own">
            <div class="chat-bubble">${message}</div>
        </div>
    `;

    input.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

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
    const merchantGrid = document.getElementById('merchantGrid');
    const merchants = window.AppData?.merchants || [];
    
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

    const merchantSelect = document.getElementById('selectMerchant');
    if (merchantSelect) {
        merchants.forEach(merchant => {
            const option = document.createElement('option');
            option.value = merchant.name;
            option.textContent = `${merchant.name} (${merchant.location})`;
            merchantSelect.appendChild(option);
        });
    }

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
    const merchant = document.getElementById('selectMerchant')?.value;
    const description = document.getElementById('photoDescription')?.value;
    const previewItems = document.querySelectorAll('#uploadPreview .preview-item');

    if (!merchant) {
        window.Utils.showToast('warning', '提示', '请选择合作商家');
        return;
    }

    if (previewItems.length === 0) {
        window.Utils.showToast('warning', '提示', '请上传至少一张作品');
        return;
    }

    window.Utils.showToast('success', '提交成功', '作品已提交审核，请耐心等待！');

    document.getElementById('selectMerchant').value = '';
    document.getElementById('photoDescription').value = '';
    document.getElementById('uploadPreview').innerHTML = '';
}

window.Community = {
    openSoulmateModal,
    closeSoulmateModal,
    openGatheringModal,
    closeGatheringModal,
    openGatheringMessageModal,
    closeGatheringMessageModal,
    openPhotoStayModal,
    closePhotoStayModal,
    initLikeFeature
};
