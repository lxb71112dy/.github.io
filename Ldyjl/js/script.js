// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 技能进度条动画
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
        // 获取宽度值并重置为0，再通过动画过渡到目标宽度
        const targetWidth = level.style.width;
        level.style.width = '0';
        // 延迟触发动画，营造加载效果
        setTimeout(() => {
            level.style.width = targetWidth;
        }, 500);
    });

    // 为区块添加点击高亮效果
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            // 移除所有区块的高亮
            sections.forEach(s => s.style.backgroundColor = '');
            // 为当前点击的区块添加淡蓝色背景
            this.style.backgroundColor = 'rgba(74, 144, 226, 0.05)';
        });
    });

    // 平滑滚动效果（如果后续添加锚点跳转）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});