// Shared launcher for the portfolio's compact AI guide.
(() => {
  if (location.pathname.replace(/index\.html$/, '').endsWith('/ask/')) return;

  const root = new URL('.', document.currentScript.src);
  const guide = new URL('ask/index.html', root);
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = new URL('widget.css?v=1', root).href;
  document.head.append(stylesheet);

  const shell = document.createElement('div');
  shell.className = 'portfolio-chat-widget';
  const launcher = document.createElement('button');
  launcher.type = 'button';
  launcher.className = 'portfolio-chat-launcher';
  launcher.setAttribute('aria-haspopup', 'dialog');
  launcher.setAttribute('aria-expanded', 'false');
  launcher.setAttribute('aria-controls', 'portfolio-chat-panel');
  const symbol = document.createElement('span');
  symbol.className = 'portfolio-chat-symbol';
  symbol.setAttribute('aria-hidden', 'true');
  symbol.textContent = '✳';
  const launcherText = document.createElement('span');
  launcherText.className = 'portfolio-chat-launcher-text';
  launcher.append(symbol, launcherText);

  const panel = document.createElement('section');
  panel.id = 'portfolio-chat-panel';
  panel.className = 'portfolio-chat-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'false');
  panel.setAttribute('aria-labelledby', 'portfolio-chat-title');
  panel.hidden = true;
  const top = document.createElement('div');
  top.className = 'portfolio-chat-top';
  const heading = document.createElement('span');
  heading.id = 'portfolio-chat-title';
  const actions = document.createElement('div');
  actions.className = 'portfolio-chat-actions';
  const fullLink = document.createElement('a');
  fullLink.href = guide.href;
  fullLink.target = '_blank';
  fullLink.rel = 'noopener noreferrer';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'portfolio-chat-close';
  close.textContent = '×';
  actions.append(fullLink, close);
  top.append(heading, actions);
  const frame = document.createElement('iframe');
  frame.className = 'portfolio-chat-frame';
  frame.title = 'Om Vaghasiya AI portfolio guide';
  panel.append(top, frame);
  shell.append(panel, launcher);
  document.body.append(shell);

  function language() {
    return document.documentElement.lang === 'de' || localStorage.getItem('portfolio-language') === 'de' ? 'de' : 'en';
  }
  function updateCopy() {
    const german = language() === 'de';
    launcherText.textContent = german ? 'Frag nach meiner Arbeit' : 'Ask about my work';
    launcher.setAttribute('aria-label', german ? 'KI-Guide öffnen' : 'Open AI guide');
    heading.textContent = german ? 'OMS KI-GUIDE' : 'OM’S AI GUIDE';
    fullLink.textContent = german ? 'Ganze Seite ↗' : 'Full page ↗';
    close.setAttribute('aria-label', german ? 'KI-Guide schließen' : 'Close AI guide');
  }
  function setOpen(open) {
    panel.hidden = !open;
    launcher.setAttribute('aria-expanded', String(open));
    shell.classList.toggle('is-open', open);
    if (open) {
      updateCopy();
      if (!frame.src) frame.src = `${guide.href}?embed=1`;
      close.focus();
    } else {
      launcher.focus();
    }
  }
  launcher.addEventListener('click', () => setOpen(panel.hidden));
  close.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) setOpen(false);
  });
  window.addEventListener('message', (event) => {
    if (event.origin === location.origin && event.source === frame.contentWindow && event.data?.type === 'portfolio-chat-close') setOpen(false);
  });
  new MutationObserver(updateCopy).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  updateCopy();
})();
