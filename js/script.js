const topBtn = document.querySelector('.t-btn');
const menuButton = document.querySelector('.nav-button');
const navigation = document.querySelector('.navigation');
const darkButton = document.querySelector('.dark-button');
const themeIcon = darkButton.querySelector('i');
// ================================
// Theme
// ================================
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
document.body.classList.add('dark-theme');
themeIcon.className = 'fa-solid fa-toggle-on';
}
function toggleTheme() {
const isDark = document.body.classList.toggle('dark-theme');
localStorage.setItem(
    'theme',
    isDark ? 'dark' : 'light'
);
themeIcon.className = isDark
    ? 'fa-solid fa-toggle-on'
    : 'fa-solid fa-toggle-off';
}
// ================================
// Mobile Navigation
// ================================
menuButton.addEventListener('click', () => {
const isOpen = navigation.classList.toggle('active');
menuButton.setAttribute(
    'aria-expanded',
    String(isOpen)
);
menuButton.setAttribute(
    'aria-label',
    isOpen
        ? 'Close navigation menu'
        : 'Open navigation menu'
);
menuButton.textContent = isOpen ? '×' : '≡';
});
// Close mobile navigation after selecting a link
navigation.addEventListener('click', (event) => {
if (!event.target.matches('a')) {
return;
}
navigation.classList.remove('active');
menuButton.setAttribute(
    'aria-expanded',
    'false'
);
menuButton.setAttribute(
    'aria-label',
    'Open navigation menu'
);
menuButton.textContent = '≡';
});
// ================================
// Scroll To Top
// ================================
function handleScroll() {
topBtn.classList.toggle(
'show',
window.scrollY > 300
);
}
topBtn.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
// ================================
// Events
// ================================
window.addEventListener('scroll', handleScroll);
darkButton.addEventListener('click', toggleTheme);
