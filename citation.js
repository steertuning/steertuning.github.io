(() => {
  const button = document.querySelector('[data-copy-citation]');
  const code = document.querySelector('#citation-text');
  const status = document.querySelector('.citation-status');
  if (!button || !code || !status) return;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent.trim());
      status.textContent = 'Citation copied.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
    }
  });
})();
