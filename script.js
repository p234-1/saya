// 定义全局的变量，存储所有新闻数据
const allNews = [
    { title: "每日AI资讯-12月04日", description: "最新的AI技术动态...", time: "2天前" },
    { title: "《2024视听AI创作大赛-智绘亦庄·与AI同…", description: "本次大赛聚焦AI与创作结合...", time: "4天前" },
    { title: "腾讯版Sora视频生成模型震撼发布", description: "腾讯发布了新的AI视频生成工具...", time: "3天前" },
    { title: "海螺AI国际版(Hailuo AI)发布Hailuo I2V-…", description: "海螺AI发布了新的技术产品...", time: "2天前" },
    { title: "首届「海丝之光」AI青瓷设计大赛名单公示", description: "青瓷设计大赛的最新进展...", time: "8天前" },
    { title: "AI产品经理大会即将召开", description: "2024年AI产品经理大会的预告...", time: "刚刚" },
    { title: "AI技术新突破：自动化工具更新", description: "AI领域的自动化工具迎来更新...", time: "1天前" },
    { title: "AI智能硬件最新动态", description: "AI硬件领域的新动态...", time: "2天前" },
    { title: "2024 AI投资新趋势", description: "分析2024年AI投资的新趋势...", time: "3天前" },
    { title: "AI产品设计前沿技术分享", description: "前沿技术在AI产品设计中的应用...", time: "5天前" },
    { title: "AI大模型崛起：新的技术变革", description: "大模型的崛起将带来技术的变革...", time: "1周前" },
    { title: "人工智能在医疗领域的新应用", description: "AI在医疗领域的最新应用案例...", time: "3天前" }
];

// 用于展示的新闻
let latestNews = [];

// 获取随机5条新闻
function fetchLatestNews() {
    let shuffledNews = allNews.sort(() => 0.5 - Math.random());  // 随机打乱数组
    latestNews = shuffledNews.slice(0, 5);  // 取前5条新闻
    updateNewsSection();  // 更新新闻显示部分
}

// 更新新闻部分内容
function updateNewsSection() {
    const newsContainer = document.getElementById('latest-news');
    newsContainer.innerHTML = `
        <h2>最新咨询</h2>
        ${latestNews.map(news => `
            <div class="news-item">
                <h3>${news.title}</h3>
                <p>${news.description}</p>
                <p><strong>${news.time}</strong></p>
            </div>
        `).join('')}
        <button class="refresh-btn" onclick="fetchLatestNews()">刷新资讯</button>
    `;
}

// 导航到指定位置并平滑滚动
function navigateTo(id) {
    const element = document.querySelector(id);
    if (element) {
        // 获取目标位置
        const targetTop = element.offsetTop - 100;  // 设置滚动偏移，使导航栏不遮挡内容
        smoothScrollTo(targetTop);
    }
}

// 显示或隐藏返回顶部按钮
function toggleBackToTopButton() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 100) { // 滚动超过100px时显示按钮
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

// 滚动到页面顶部
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 页面加载完成后初始化事件
document.addEventListener('DOMContentLoaded', () => {
    // 初始加载最新新闻
    fetchLatestNews();

    // 监听滚动事件，控制返回顶部按钮的显示
    window.addEventListener('scroll', toggleBackToTopButton);
});

// 获取所有文章导航链接
const navLinks = document.querySelectorAll('.article-nav a');

// 获取所有章节元素
const sections = document.querySelectorAll('.article');

// 监听滚动事件，更新导航栏高亮
function updateNavOnScroll() {
    let currentSectionId = '';

    // 遍历所有章节，找到当前最接近视口顶部的章节
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.id;
        }
    });

    // 更新导航栏高亮
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').substring(1); // 去掉 "#" 符号
        if (linkHref === currentSectionId) {
            link.classList.add('active');  // 给当前章节对应的导航项添加高亮样式
        } else {
            link.classList.remove('active');  // 移除其他导航项的高亮
        }
    });
}

// 监听页面滚动，更新导航栏高亮
window.addEventListener('scroll', updateNavOnScroll);

// 页面加载时初始化导航栏的高亮状态
document.addEventListener('DOMContentLoaded', updateNavOnScroll);

// 打开登录/注册弹窗
function openLoginRegisterModal() {
    document.getElementById('login-register-modal').style.display = 'flex';
}

// 关闭登录/注册弹窗
function closeLoginRegister() {
    document.getElementById('login-register-modal').style.display = 'none';
}

// 显示登录表单
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

// 显示注册表单
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// 登录操作
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // 在这里添加登录验证逻辑，例如用户名和密码的检查
    if (username && password) {
        alert("登录成功");
        closeLoginRegister(); // 登录成功后关闭弹窗
    } else {
        alert("请输入用户名和密码");
    }
}

// 注册操作
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // 在这里添加注册验证逻辑
    if (username && password && password === confirmPassword) {
        alert("注册成功");
        closeLoginRegister(); // 注册成功后关闭弹窗
    } else {
        alert("请输入完整信息或确认密码匹配");
    }
}



// 点击登录/注册按钮时弹出弹窗
document.querySelector('.login-register-btn').addEventListener('click', openLoginRegisterModal);

// 监听弹窗内取消按钮点击事件，关闭弹窗
document.querySelector('.cancel-btn').addEventListener('click', closeLoginRegister);

