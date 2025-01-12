type Theme = 'light' | 'dark' | 'system';

export function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function setTheme(theme: Theme) {
  if (theme === 'dark' || (theme === 'system' && getSystemTheme() === 'dark')) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

export function getTheme(): Theme {
  return (localStorage.getItem('theme') as Theme) || 'system';
}

export function initTheme() {
  const theme = getTheme();
  setTheme(theme);

  if (theme === 'system') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      setTheme('system');
    });
  }
}