// ==================== 登录注册功能 ====================

document.addEventListener('DOMContentLoaded', function() {
    const authModal = document.getElementById('authModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeModal = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const switchForms = document.querySelectorAll('.switch-form');
    const userMenu = document.getElementById('userMenu');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            openModal();
        });
    }

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

    window.openAuthModal = openModal;

    function closeAuthModal() {
        authModal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            document.querySelectorAll('.modal-forms form').forEach(form => form.reset());
            const passwordStrength = document.getElementById('passwordStrength');
            if (passwordStrength) {
                passwordStrength.className = 'password-strength';
            }
        }, 300);
    }

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

    const loginFormEl = document.querySelector('#loginForm form');
    if (loginFormEl) {
        loginFormEl.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            const users = JSON.parse(localStorage.getItem('travel_users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
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
                
                window.Utils.showToast('success', '登录成功', `欢迎回来，${user.username}！`);
                updateUIForLoggedInUser(user.username, user.email);
                closeAuthModal();
            } else {
                window.Utils.showToast('error', '登录失败', '邮箱或密码错误，请重试');
            }
        });
    }

    const registerFormEl = document.querySelector('#registerForm form');
    if (registerFormEl) {
        registerFormEl.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('regUsername').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            if (password.length < 6) {
                window.Utils.showToast('error', '注册失败', '密码长度至少6位');
                return;
            }
            
            if (password !== confirmPassword) {
                window.Utils.showToast('error', '注册失败', '两次输入的密码不一致');
                return;
            }
            
            if (!agreeTerms) {
                window.Utils.showToast('warning', '请同意条款', '请阅读并同意服务条款和隐私政策');
                return;
            }
            
            let users = JSON.parse(localStorage.getItem('travel_users') || '[]');
            
            if (users.some(u => u.email === email)) {
                window.Utils.showToast('error', '注册失败', '该邮箱已被注册');
                return;
            }
            
            if (users.some(u => u.username === username)) {
                window.Utils.showToast('error', '注册失败', '该用户名已被使用');
                return;
            }
            
            users.push({
                username,
                email,
                password,
                registerTime: new Date().toISOString()
            });
            
            localStorage.setItem('travel_users', JSON.stringify(users));
            
            window.Utils.showToast('success', '注册成功', '请使用新账号登录');
            
            registerForm.classList.remove('active');
            loginForm.classList.add('active');
            
            document.getElementById('loginEmail').value = email;
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            localStorage.removeItem('travel_session');
            sessionStorage.removeItem('travel_session');
            
            updateUIForLoggedOutUser();
            window.Utils.showToast('success', '已退出', '期待您的再次访问');
        });
    }
});

function checkLoginStatus() {
    const session = JSON.parse(
        localStorage.getItem('travel_session') || 
        sessionStorage.getItem('travel_session') || 
        'null'
    );
    
    if (session && session.isLoggedIn) {
        updateUIForLoggedInUser(session.username, session.email);
        loadUserAvatar();
    }
}

function updateUIForLoggedInUser(username, email) {
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    
    if (loginBtn) loginBtn.classList.add('hidden');
    if (userMenu) {
        userMenu.classList.remove('hidden');
        document.getElementById('username').textContent = username;
    }
    
    syncUserToProfile(username, email);
    loadUserAvatar();
}

function syncUserToProfile(username, email) {
    const profileNameEl = document.querySelector('.profile-details h2');
    if (profileNameEl) {
        profileNameEl.textContent = username;
    }
    
    const settingUsername = document.getElementById('settingUsername');
    if (settingUsername && username) {
        settingUsername.textContent = username;
    }
    
    const settingEmail = document.getElementById('settingEmail');
    if (settingEmail && email) {
        settingEmail.textContent = email;
    }
    
    const creatorAvatar = document.getElementById('creatorAvatar');
    if (creatorAvatar) {
        creatorAvatar.style.background = 'linear-gradient(135deg, var(--primary-color), #764ba2)';
        creatorAvatar.style.color = 'white';
    }
    
    const profileAvatar = document.getElementById('profileAvatar');
    if (profileAvatar && username) {
        profileAvatar.title = `点击更换${username}的头像`;
    }
}

function updateUIForLoggedOutUser() {
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    
    if (loginBtn) loginBtn.classList.remove('hidden');
    if (userMenu) userMenu.classList.add('hidden');
    
    resetProfileUserInfo();
}

function resetProfileUserInfo() {
    const profileNameEl = document.querySelector('.profile-details h2');
    if (profileNameEl) {
        profileNameEl.textContent = '旅行者';
    }
    
    const creatorAvatar = document.getElementById('creatorAvatar');
    if (creatorAvatar) {
        creatorAvatar.style.background = '';
        creatorAvatar.style.color = '';
    }
    
    const profileAvatar = document.getElementById('profileAvatar');
    if (profileAvatar) {
        profileAvatar.title = '';
    }
    
    const settingUsername = document.getElementById('settingUsername');
    if (settingUsername) {
        settingUsername.textContent = '旅行者';
    }
    
    const settingEmail = document.getElementById('settingEmail');
    if (settingEmail) {
        settingEmail.textContent = 'user@example.com';
    }
    
    clearAllAvatars();
}

function loadUserAvatar() {
    const avatarData = localStorage.getItem('travel_user_avatar');
    if (avatarData) {
        updateAllAvatars(avatarData);
    }
}

function updateAllAvatars(avatarData) {
    const profileAvatarImg = document.getElementById('avatarImg');
    const profileAvatarIcon = document.getElementById('avatarIcon');
    if (profileAvatarImg) {
        profileAvatarImg.src = avatarData;
        profileAvatarImg.style.display = 'block';
        if (profileAvatarIcon) profileAvatarIcon.style.display = 'none';
    }
    
    const navAvatarImg = document.getElementById('navAvatarImg');
    const navAvatarIcon = document.getElementById('navAvatarIcon');
    if (navAvatarImg) {
        navAvatarImg.src = avatarData;
        navAvatarImg.style.display = 'block';
        if (navAvatarIcon) navAvatarIcon.style.display = 'none';
    }
    
    const creatorAvatarImg = document.getElementById('creatorAvatarImg');
    const creatorAvatarIcon = document.getElementById('creatorAvatarIcon');
    const creatorAvatar = document.getElementById('creatorAvatar');
    if (creatorAvatarImg) {
        creatorAvatarImg.src = avatarData;
        creatorAvatarImg.style.display = 'block';
        if (creatorAvatarIcon) creatorAvatarIcon.style.display = 'none';
        if (creatorAvatar) {
            creatorAvatar.style.background = 'transparent';
        }
    }
}

function clearAllAvatars() {
    const profileAvatarImg = document.getElementById('avatarImg');
    const profileAvatarIcon = document.getElementById('avatarIcon');
    if (profileAvatarImg) {
        profileAvatarImg.src = '';
        profileAvatarImg.style.display = 'none';
        if (profileAvatarIcon) profileAvatarIcon.style.display = 'block';
    }
    
    const navAvatarImg = document.getElementById('navAvatarImg');
    const navAvatarIcon = document.getElementById('navAvatarIcon');
    if (navAvatarImg) {
        navAvatarImg.src = '';
        navAvatarImg.style.display = 'none';
        if (navAvatarIcon) navAvatarIcon.style.display = 'block';
    }
    
    const creatorAvatarImg = document.getElementById('creatorAvatarImg');
    const creatorAvatarIcon = document.getElementById('creatorAvatarIcon');
    const creatorAvatar = document.getElementById('creatorAvatar');
    if (creatorAvatarImg) {
        creatorAvatarImg.src = '';
        creatorAvatarImg.style.display = 'none';
        if (creatorAvatarIcon) creatorAvatarIcon.style.display = 'block';
        if (creatorAvatar) {
            creatorAvatar.style.background = '';
            creatorAvatar.style.color = '';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.getElementById('profileAvatar');
    const avatarInput = document.getElementById('avatarInput');
    
    if (profileAvatar && avatarInput) {
        profileAvatar.addEventListener('click', function() {
            const session = JSON.parse(
                localStorage.getItem('travel_session') || 
                sessionStorage.getItem('travel_session') || 
                'null'
            );
            
            if (!session || !session.isLoggedIn) {
                window.Utils.showToast('warning', '请先登录', '登录后才能修改头像');
                window.openAuthModal();
                return;
            }
            
            avatarInput.click();
        });
        
        avatarInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            if (!file.type.startsWith('image/')) {
                window.Utils.showToast('error', '文件类型错误', '请选择图片文件');
                return;
            }
            
            if (file.size > 5 * 1024 * 1024) {
                window.Utils.showToast('error', '文件过大', '图片大小不能超过5MB');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(event) {
                const avatarData = event.target.result;
                
                localStorage.setItem('travel_user_avatar', avatarData);
                updateAllAvatars(avatarData);
                
                window.Utils.showToast('success', '头像更新成功', '您的头像已更新');
            };
            reader.onerror = function() {
                window.Utils.showToast('error', '上传失败', '图片读取失败，请重试');
            };
            reader.readAsDataURL(file);
        });
    }
});

window.Auth = {
    checkLoginStatus,
    updateUIForLoggedInUser,
    updateUIForLoggedOutUser,
    loadUserAvatar,
    updateAllAvatars,
    clearAllAvatars
};
