(function(){
            const root = document.documentElement;
            const page = document.getElementById('page');
            const btn = document.getElementById('themeToggle');
            const year = document.getElementById('year');
            year.textContent = new Date().getFullYear();

            const KEY = 'site-theme';
            function applyTheme(t){
                if(t === 'dark') page.classList.add('dark'); else page.classList.remove('dark');
            }
            const stored = localStorage.getItem(KEY) || 'light';
            applyTheme(stored);

            btn.addEventListener('click', () => {
                const current = page.classList.contains('dark') ? 'dark' : 'light';
                const next = current === 'dark' ? 'light' : 'dark';
                applyTheme(next);
                localStorage.setItem(KEY, next);
            });
        })();