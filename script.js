(() => {
  const config = window.RECURSIA_CONFIG || {};
  const safeUrl = (value) => {
    if (typeof value !== 'string' || !value.trim()) return null;
    try { const parsed = new URL(value, window.location.href); return ['http:', 'https:', 'file:'].includes(parsed.protocol) ? value : null; }
    catch { return null; }
  };
  const authorContainer = document.querySelector('#authors');
  if (authorContainer && Array.isArray(config.authors) && config.authors.length) {
    authorContainer.replaceChildren();
    config.authors.forEach(author => {
      const item = document.createElement('li');
      const url = safeUrl(author.url);
      const name = document.createElement(url ? 'a' : 'span');
      name.textContent = author.name;
      if (url) { name.href = url; name.target = '_blank'; name.rel = 'noopener noreferrer'; }
      item.append(name);
      if (Array.isArray(author.affiliations) && author.affiliations.length) {
        const reference = document.createElement('sup');
        reference.textContent = author.affiliations.join(',');
        reference.setAttribute('aria-label', `Affiliation ${author.affiliations.join(', ')}`);
        item.append(reference);
      }
      authorContainer.append(item);
    });
    authorContainer.hidden = false;
  }
  const affiliationContainer = document.querySelector('#affiliations');
  if (affiliationContainer && Array.isArray(config.affiliations) && config.affiliations.length) {
    affiliationContainer.replaceChildren();
    config.affiliations.forEach(affiliation => {
      const item = document.createElement('li');
      const reference = document.createElement('sup');
      reference.textContent = affiliation.id;
      item.append(reference, document.createTextNode(affiliation.name));
      affiliationContainer.append(item);
    });
  }
  const codeUrl = safeUrl(config.codeUrl);
  if (codeUrl) { const link = document.querySelector('#code-link'); link.href = codeUrl; link.hidden = false; }
  const formatDuration = (seconds) => {
    const tenths = Math.round(seconds * 10);
    const minutes = Math.floor(tenths / 600);
    return `${minutes}:${((tenths % 600) / 10).toFixed(1).padStart(4, '0')}`;
  };
  Object.entries(config.videos || {}).forEach(([id, item]) => {
    const src = safeUrl(item.src);
    const card = document.querySelector(`[data-task="${id}"]`);
    if (!card || !src) return;
    const slot = card.querySelector('.media-slot');
    // Enhance the native HTML player in place, preserving no-JavaScript playback.
    let video = slot.querySelector('video');
    if (!video) {
      video = document.createElement('video');
      slot.prepend(video);
    }
    video.controls = true;
    video.playsInline = true;
    video.preload = 'none';
    if (video.getAttribute('src') !== src) video.setAttribute('src', src);
    video.setAttribute('aria-label', `${card.querySelector('h3').textContent} real-robot demonstration`);
    video.setAttribute('aria-describedby', 'recording-note');
    const poster = safeUrl(item.poster);
    if (poster && video.getAttribute('poster') !== poster) video.setAttribute('poster', poster);
    const captions = safeUrl(item.captions);
    if (captions && !Array.from(video.querySelectorAll('track')).some(track => track.getAttribute('src') === captions)) {
      const track = document.createElement('track');
      track.kind = 'captions'; track.src = captions; track.srclang = 'en'; track.label = 'English'; video.append(track);
    }
    card.querySelectorAll('.open-video, .media-error a, video a').forEach(link => { link.href = src; });
    const duration = card.querySelector('[data-video-duration]');
    if (duration && Number.isFinite(item.durationSeconds) && item.durationSeconds > 0) duration.textContent = formatDuration(item.durationSeconds);
  });
  const videos = Array.from(document.querySelectorAll('.demo-card video'));
  videos.forEach(video => {
    const errorNotice = video.closest('.media-slot').querySelector('.media-error');
    if (errorNotice) {
      video.addEventListener('error', () => { errorNotice.hidden = false; });
      video.addEventListener('loadeddata', () => { errorNotice.hidden = true; });
      if (video.error) errorNotice.hidden = false;
    }
    video.addEventListener('play', () => {
      videos.forEach(other => { if (other !== video && !other.paused) other.pause(); });
    });
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (!entry.isIntersecting && !entry.target.paused) entry.target.pause(); });
    });
    videos.forEach(video => observer.observe(video));
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach(video => { if (!video.paused) video.pause(); });
  });
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); } });
  const dialog = document.querySelector('#figure-dialog');
  let figureTrigger = null;
  document.querySelectorAll('.figure-button').forEach(link => {
    link.addEventListener('click', event => {
      // The image link remains usable when dialogs or JavaScript are unavailable.
      if (!dialog || typeof dialog.showModal !== 'function' || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const source = link.querySelector('img');
      const src = safeUrl(link.getAttribute('href'));
      if (!source || !src) return;
      event.preventDefault();
      const image = dialog.querySelector('.dialog-image');
      image.src = src;
      image.alt = source.alt;
      dialog.querySelector('#figure-dialog-title').textContent = link.dataset.figureTitle || 'Paper figure';
      dialog.querySelector('.dialog-caption').textContent = link.closest('figure').querySelector('figcaption').textContent;
      dialog.querySelector('.dialog-original').href = src;
      figureTrigger = link;
      dialog.showModal();
      document.body.classList.add('figure-is-open');
    });
  });
  if (dialog) {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('figure-is-open');
      if (figureTrigger) figureTrigger.focus({ preventScroll: true });
    });
  }
})();
