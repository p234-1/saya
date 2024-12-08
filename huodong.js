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
    // 监听滚动事件，控制返回顶部按钮的显示
    window.addEventListener('scroll', toggleBackToTopButton);
});
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

//图片滚动
document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;
    const carouselContainer = document.querySelector('.carousel-container');
  
    function showSlide(index) {
      const slideWidth = slides[0].clientWidth;
      carouselContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 3000); // 每3秒切换一次图片
  
    // 初始显示第一张图片
    showSlide(currentSlide);
  });

document.getElementById('azaz').addEventListener('click', function() {
    alert('不能查看更多');
  });
// 点击登录/注册按钮时弹出弹窗
document.querySelector('.login-register-btn').addEventListener('click', openLoginRegisterModal);

// 监听弹窗内取消按钮点击事件，关闭弹窗
document.querySelector('.cancel-btn').addEventListener('click', closeLoginRegister);