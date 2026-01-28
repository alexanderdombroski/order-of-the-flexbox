// Theme Management
// Immediately check localStorage and apply theme (prevents flash)
const stored = localStorage.getItem('theme');
if (stored === 'dark') {
    document.documentElement.classList.add('dark');
} else if (stored === 'light') {
    document.documentElement.classList.add('light');
}
// No stored value = system preference (CSS handles it via @media)

// After DOM loads, set up the toggle button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('[data-theme-toggle]');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const html = document.documentElement;
            const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';

            if (currentTheme === 'dark') {
                html.classList.remove('dark');
                html.classList.add('light');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.remove('light');
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});
