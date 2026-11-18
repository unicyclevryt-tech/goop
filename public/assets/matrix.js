(() => {
  const toggle=document.getElementById('matrixMotion');
  const columns=[...document.querySelectorAll('#goopBinaryRain .goop-rain-column')];
  if (!columns.length) return;
  // Start with animation enabled in this new edition. The toggle still works.
  if (toggle) toggle.checked=true;
  function apply() {
    const enabled=!toggle || toggle.checked;
    document.body.classList.toggle('goop-motion-off',!enabled);
    columns.forEach(el=>el.style.animationPlayState=enabled?'running':'paused');
  }
  if(toggle)toggle.addEventListener('change',apply);
  apply();
})();
