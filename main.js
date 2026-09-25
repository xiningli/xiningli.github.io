document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

for (const el of document.querySelectorAll('.reveal')) io.observe(el);

/* Reachability check for the digital human's home — an opaque no-cors fetch
   resolves as long as the host answers, without needing CORS headers. */
(async () => {
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  if (!dot || !text) return;
  try {
    await fetch('https://xiningli.ca', { mode: 'no-cors', cache: 'no-store', signal: AbortSignal.timeout(4500) });
    dot.classList.add('online');
    text.textContent = 'Online · xiningli.ca';
  } catch {
    dot.classList.add('offline');
    text.textContent = 'Launching soon · xiningli.ca';
  }
})();
