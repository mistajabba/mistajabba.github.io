/* Shared navigation, theme, and notebook interactions. */

const root = document.documentElement;
const menuButton = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-navigation]');
const themeButton = document.querySelector('[data-theme-toggle]');

// Use a saved preference when present, otherwise respect the operating system.
const savedTheme = localStorage.getItem('field-journal-theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

function setTheme(theme) {
	root.dataset.theme = theme;
	if (themeButton) {
		themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
		themeButton.textContent = theme === 'dark' ? '☀' : '◐';
	}
}

themeButton?.addEventListener('click', () => {
	const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
	localStorage.setItem('field-journal-theme', nextTheme);
	setTheme(nextTheme);
});

menuButton?.addEventListener('click', () => {
	const isOpen = navigation.classList.toggle('open');
	menuButton.setAttribute('aria-expanded', String(isOpen));
	menuButton.textContent = isOpen ? '×' : '☰';
});

// Close the mobile menu after choosing a destination or pressing Escape.
navigation?.addEventListener('click', (event) => {
	if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') closeMenu();
});

function closeMenu() {
	navigation?.classList.remove('open');
	menuButton?.setAttribute('aria-expanded', 'false');
	if (menuButton) menuButton.textContent = '☰';
}

// Notebook search and category filters work together without a server.
const searchInput = document.querySelector('[data-notebook-search]');
const filterButtons = document.querySelectorAll('[data-filter]');
const entries = document.querySelectorAll('[data-entry]');
const emptyState = document.querySelector('[data-empty-state]');
let activeCategory = 'all';

function filterEntries() {
	const query = searchInput?.value.trim().toLowerCase() || '';
	let visibleCount = 0;

	entries.forEach((entry) => {
		const matchesCategory = activeCategory === 'all' || entry.dataset.category === activeCategory;
		const matchesQuery = entry.textContent.toLowerCase().includes(query);
		entry.hidden = !(matchesCategory && matchesQuery);
		if (!entry.hidden) visibleCount += 1;
	});

	emptyState?.classList.toggle('visible', visibleCount === 0);
}

searchInput?.addEventListener('input', filterEntries);
filterButtons.forEach((button) => {
	button.addEventListener('click', () => {
		activeCategory = button.dataset.filter;
		filterButtons.forEach((item) => item.classList.toggle('active', item === button));
		filterEntries();
	});
});

// Keep the copyright year current on every page.
document.querySelectorAll('[data-year]').forEach((element) => {
	element.textContent = new Date().getFullYear();
});
